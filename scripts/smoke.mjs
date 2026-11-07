// Uji integrasi end-to-end Sopinsya.
// Jalankan: node scripts/smoke.mjs  (server harus berjalan di API_BASE)
const BASE = process.env.API_BASE ?? 'http://127.0.0.1:4000';

let passed = 0;
let failed = 0;
const failures = [];

function check(name, condition, detail = '') {
  if (condition) {
    passed += 1;
    console.log(`ok   ${name}`);
  } else {
    failed += 1;
    failures.push(`${name}${detail ? ` — ${detail}` : ''}`);
    console.log(`FAIL ${name}${detail ? ` — ${detail}` : ''}`);
  }
}

async function page(path, { cookie, status = 200 } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    redirect: 'manual',
    headers: cookie ? { cookie } : {},
  });
  const html = await res.text();
  check(`GET ${path} → ${status}`, res.status === status, `dapat ${res.status}`);
  return { res, html };
}

async function api(path, { method = 'GET', cookie, body, origin = BASE, status = 200 } = {}) {
  const headers = {};
  if (cookie) headers.cookie = cookie;
  if (body !== undefined) headers['content-type'] = 'application/json';
  if (method !== 'GET') headers.origin = origin;
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    redirect: 'manual',
  });
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    json = null;
  }
  check(`API ${method} ${path} → ${status}`, res.status === status, `dapat ${res.status}: ${text.slice(0, 100)}`);
  return { res, json };
}

function cookieFrom(res) {
  const raw = res.headers.getSetCookie?.() ?? [];
  return raw.map((value) => value.split(';')[0]).join('; ');
}

async function login(email, password) {
  const res = await fetch(`${BASE}/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded', origin: BASE },
    body: new URLSearchParams({ email, password }).toString(),
    redirect: 'manual',
  });
  check(`login ${email}`, res.status === 302, `dapat ${res.status}`);
  return cookieFrom(res);
}

async function main() {
  // ---------- Halaman publik ----------
  await page('/');
  await page('/program');
  await page('/program?q=iso&category=mutu');
  await page('/program/iso-37001-2025');
  await page('/program/iso-37001-2025/evaluasi/PRE_TEST');
  await page('/program/iso-37001-2025/ulasan');
  await page('/tentang');
  await page('/kontak');
  await page('/pustaka-sop');
  await page('/login');
  await page('/tidak-ada-halaman', { status: 404 });

  // ---------- API publik ----------
  const programs = await api('/api/v1/programs');
  check('katalog memuat 4 program', programs.json?.data?.length === 4, JSON.stringify(programs.json?.data?.length));
  const filtered = await api('/api/v1/programs?q=17025');
  check('pencarian program bekerja', filtered.json?.data?.length === 1);

  const detail = await api('/api/v1/programs/iso-37001-2025');
  check('detail program memuat materi & evaluasi', (detail.json?.data?.materials?.length ?? 0) >= 4);

  const reviewsBefore = await api('/api/v1/programs/iso-37001-2025/reviews');
  const countBefore = reviewsBefore.json?.data?.count ?? 0;
  await api('/api/v1/programs/iso-37001-2025/reviews', {
    method: 'POST',
    status: 201,
    body: { rating: 5, comment: 'Uji integrasi: materi jelas dan aplikatif.' },
  });
  const reviewsAfter = await api('/api/v1/programs/iso-37001-2025/reviews');
  check('rating tersimpan anonim', (reviewsAfter.json?.data?.count ?? 0) === countBefore + 1);
  await api('/api/v1/programs/iso-37001-2025/reviews', {
    method: 'POST',
    status: 400,
    body: { rating: 9 },
  });

  // ---------- Evaluasi ----------
  const pre = await api('/api/v1/evaluations/iso-37001-2025/PRE_TEST');
  const questions = pre.json?.data?.questions ?? [];
  check('soal pre-test tidak memuat kunci jawaban', questions.every((q) => !('correctAnswer' in q)));
  check('soal pre-test minimal 5', questions.length >= 5);

  const answers = Object.fromEntries(questions.map((q) => [q.id, 'A']));
  const email = `peserta.${Date.now()}@example.test`;
  const preSubmit = await api(`/api/v1/evaluations/${pre.json.data.evaluation.id}/attempts`, {
    method: 'POST',
    status: 201,
    body: { name: 'Peserta Uji', email, phone: '08123456789', position: 'Staf Mutu', answers },
  });
  check('nilai pre-test disembunyikan (KF-15)', preSubmit.json?.data?.scoreVisible === false);
  check('jawaban pre-test tersimpan', Number.isInteger(preSubmit.json?.data?.percent));

  await api(`/api/v1/evaluations/${pre.json.data.evaluation.id}/attempts`, {
    method: 'POST',
    status: 409,
    body: { name: 'Peserta Uji', email, phone: '08123456789', position: 'Staf Mutu', answers },
  });

  const post = await api('/api/v1/evaluations/iso-37001-2025/POST_TEST');
  const postAnswers = Object.fromEntries((post.json?.data?.questions ?? []).map((q) => [q.id, 'A']));
  const postSubmit = await api(`/api/v1/evaluations/${post.json.data.evaluation.id}/attempts`, {
    method: 'POST',
    status: 201,
    body: {
      name: 'Peserta Uji',
      email: `post.${Date.now()}@example.test`,
      phone: '08123456789',
      position: 'Staf Mutu',
      answers: postAnswers,
    },
  });
  check('nilai post-test ditampilkan', postSubmit.json?.data?.scoreVisible === true);

  await api(`/api/v1/evaluations/${post.json.data.evaluation.id}/attempts`, {
    method: 'POST',
    status: 400,
    body: { name: 'Tanpa Identitas', email: 'x@y.z', answers: {} },
  });

  const foreign = await api('/api/v1/programs/iso-37001-2025/reviews', {
    method: 'POST',
    status: 403,
    origin: 'https://evil.example',
    body: { rating: 5 },
  });
  check('permintaan lintas-origin ditolak', foreign.json?.error?.code === 'FORBIDDEN');

  // ---------- Admin ----------
  const adminCookie = await login('admin@sopinsya.test', 'Admin#12345');
  const adminPage = await page('/admin', { cookie: adminCookie });
  check('dashboard admin memuat statistik', adminPage.html.includes('Dashboard Admin'));
  await page('/admin/program', { cookie: adminCookie });
  // ID program dari seed tidak dijamin 1 (auto increment), ambil dari katalog.
  const seededProgramId = programs.json?.data?.[0]?.id;
  await page(`/admin/program/${seededProgramId}`, { cookie: adminCookie });
  await page('/admin/hasil', { cookie: adminCookie });
  await page('/admin/akun', { cookie: adminCookie });
  await page('/admin/pengaturan', { cookie: adminCookie });
  await page('/audit/laporan', { cookie: adminCookie });

  const me = await api('/api/v1/auth/me', { cookie: adminCookie });
  check('sesi admin dikenali', me.json?.data?.user?.role === 'ADMIN');

  const recap = await api('/api/v1/reports/evaluations', { cookie: adminCookie });
  check('rekap nilai memuat percobaan uji', (recap.json?.data?.length ?? 0) >= 2);

  const csvRes = await fetch(`${BASE}/api/v1/reports/evaluations.csv`, { headers: { cookie: adminCookie } });
  const csv = await csvRes.text();
  check('ekspor CSV berisi header', csvRes.status === 200 && csv.includes('"Nama","Email"') && csv.includes('Persentase'));

  // tambah program + materi + soal + publikasi
  const created = await api('/api/v1/programs', {
    method: 'POST',
    cookie: adminCookie,
    status: 201,
    body: {
      title: `Program Uji ${Date.now()}`,
      summary: 'Program untuk pengujian integrasi.',
      description: 'Dibuat oleh script uji.',
      isPublished: true,
    },
  });
  const programId = created.json?.data?.id;
  check('program baru dibuat', Number.isInteger(programId));
  const material = await api(`/api/v1/programs/${programId}/materials`, {
    method: 'POST',
    cookie: adminCookie,
    status: 201,
    body: { type: 'MATERI', title: 'Materi Uji', url: 'https://example.com/materi.pdf' },
  });
  check('materi program dibuat', material.json?.data?.type === 'MATERI');
  await api(`/api/v1/programs/${programId}`, {
    method: 'PATCH',
    cookie: adminCookie,
    body: { title: 'Program Uji Diperbarui', isPublished: true },
  });
  await api(`/api/v1/programs/${programId}/materials/${material.json.data.id}`, {
    method: 'DELETE',
    cookie: adminCookie,
  });
  await api(`/api/v1/programs/${programId}`, { method: 'DELETE', cookie: adminCookie });

  // ---------- Auditor ----------
  const auditCookie = await login('auditor@sopinsya.test', 'Auditor#12345');
  const auditPage = await page('/audit', { cookie: auditCookie });
  check('dashboard audit memuat statistik', auditPage.html.includes('Dashboard Audit'));
  const findings = await api('/api/v1/findings', { cookie: auditCookie });
  check('register temuan memuat data seed', (findings.json?.data?.length ?? 0) === 5);
  const stats = await api('/api/v1/findings/stats', { cookie: auditCookie });
  check('statistik temuan dihitung', stats.json?.data?.total === 5);

  const requestId = `req-${Date.now()}`;
  const finding = await api('/api/v1/findings', {
    method: 'POST',
    cookie: auditCookie,
    status: 201,
    body: {
      clause: 'SNI ISO/IEC 17025:2017 - 7.8',
      category: 'MINOR',
      description: 'Laporan hasil tidak mencantumkan ketidakpastian pengukuran pada satu parameter.',
      rootCause: 'Template laporan belum diperbarui.',
      correction: 'Melengkapi template laporan.',
      correctiveAction: 'Pelatihan penyusunan laporan hasil.',
      targetDate: '2026-12-31',
      requestId,
    },
  });
  check('temuan baru dibuat dengan kode', /^FND-/.test(finding.json?.data?.code ?? ''));
  const again = await api('/api/v1/findings', {
    method: 'POST',
    cookie: auditCookie,
    status: 201,
    body: { clause: 'duplikat', category: 'MINOR', description: 'idempotensi', requestId },
  });
  check('permintaan ganda idempoten', again.json?.data?.id === finding.json?.data?.id);

  await api(`/api/v1/findings/${finding.json.data.id}`, {
    method: 'PATCH',
    cookie: auditCookie,
    body: { status: 'CLOSED', verificationResult: 'Closed (efektif)' },
  });

  const forbiddenProgram = await api('/api/v1/programs', {
    method: 'POST',
    cookie: auditCookie,
    status: 403,
    body: { title: 'Tidak boleh' },
  });
  check('Auditor tidak dapat mengelola program', forbiddenProgram.json?.error?.code === 'FORBIDDEN');

  const forbiddenScores = await api('/api/v1/reports/evaluations', {
    cookie: auditCookie,
    status: 403,
  });
  check('Auditor tidak dapat melihat nilai peserta (KF-17)', forbiddenScores.json?.error?.code === 'FORBIDDEN');
  await page('/admin', { cookie: auditCookie, status: 403 });
  await page('/audit/laporan', { cookie: auditCookie });

  // ---------- Logout ----------
  const logout = await fetch(`${BASE}/api/v1/auth/logout`, {
    method: 'POST',
    headers: { cookie: adminCookie, origin: BASE },
  });
  check('logout berhasil', logout.status === 200);
  await api('/api/v1/auth/me', { cookie: adminCookie, status: 401 });

  console.log(`\n${passed} lulus, ${failed} gagal`);
  if (failed) {
    console.log('Detail kegagalan:');
    failures.forEach((line) => console.log(' -', line));
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error('Uji gagal dijalankan:', error);
  process.exitCode = 1;
});
