import { getPrisma } from '../src/config/db.js';
import { hashPassword } from '../src/utils/crypto.js';
import { DEFAULT_SETTINGS } from '../src/services/settings.js';

const prisma = await getPrisma();

const startedAt = Date.now();
const step = (message) =>
  console.log(`  … ${message} (${((Date.now() - startedAt) / 1000).toFixed(1)}s)`);

async function reset() {
  await prisma.attemptAnswer.deleteMany();
  await prisma.attempt.deleteMany();
  await prisma.question.deleteMany();
  await prisma.evaluation.deleteMany();
  await prisma.programReview.deleteMany();
  await prisma.programSop.deleteMany();
  await prisma.material.deleteMany();
  await prisma.program.deleteMany();
  await prisma.sopDocument.deleteMany();
  await prisma.category.deleteMany();
  await prisma.finding.deleteMany();
  await prisma.authSession.deleteMany();
  await prisma.internalUser.deleteMany();
  await prisma.setting.deleteMany();
}

async function main() {
  step('mengosongkan tabel');
  await reset();
  step('membuat akun internal');

  // ---------- Akun internal ----------
  const admin = await prisma.internalUser.create({
    data: {
      name: 'Admin Sopinsya',
      email: 'admin@sopinsya.test',
      passwordHash: hashPassword('Admin#12345'),
      role: 'ADMIN',
    },
  });
  const auditor = await prisma.internalUser.create({
    data: {
      name: 'Tony Stark',
      email: 'auditor@sopinsya.test',
      passwordHash: hashPassword('Auditor#12345'),
      role: 'AUDITOR',
    },
  });
  await prisma.internalUser.create({
    data: {
      name: 'Bruce Banner',
      email: 'bruce@sopinsya.test',
      passwordHash: hashPassword('Auditor#12345'),
      role: 'AUDITOR',
    },
  });

  // ---------- Pengaturan ----------
  step('menyimpan pengaturan');
  for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
    await prisma.setting.create({ data: { key, value: String(value) } });
  }

  // ---------- Kategori ----------
  step('membuat kategori');
  const [catMutu, catLingkungan, catK3, catAnti] = await Promise.all([
    prisma.category.create({ data: { name: 'Sistem Manajemen Mutu', slug: 'sistem-manajemen-mutu', sortOrder: 1 } }),
    prisma.category.create({ data: { name: 'Sistem Manajemen Lingkungan', slug: 'sistem-manajemen-lingkungan', sortOrder: 2 } }),
    prisma.category.create({ data: { name: 'Keselamatan & Kesehatan Kerja', slug: 'k3', sortOrder: 3 } }),
    prisma.category.create({ data: { name: 'Anti Penyuapan', slug: 'anti-penyuapan', sortOrder: 4 } }),
  ]);

  // ---------- Pustaka SOP ----------
  step('membuat pustaka SOP');
  const sopDoc = await prisma.sopDocument.create({
    data: {
      code: 'SOP-01',
      title: 'Pengelolaan Dokumen dan Rekaman Mutu',
      version: '2.0',
      description: 'Tata cara pengendalian dokumen, revisi, dan penyimpanan rekaman mutu laboratorium.',
      url: 'https://drive.google.com/file/d/1SopPengelolaanDokumen/view',
      isPublished: true,
    },
  });
  const sopAudit = await prisma.sopDocument.create({
    data: {
      code: 'SOP-02',
      title: 'Pelaksanaan Audit Internal',
      version: '1.2',
      description: 'Perencanaan, pelaksanaan, pelaporan, dan tindak lanjut audit internal.',
      url: 'https://drive.google.com/file/d/1SopAuditInternal/view',
      isPublished: true,
    },
  });
  const sopFasilitas = await prisma.sopDocument.create({
    data: {
      code: 'SOP-03',
      title: 'Pengelolaan Fasilitas dan Kondisi Lingkungan',
      version: '1.1',
      description: 'Persyaratan fasilitas, pemantauan suhu, dan pengendalian kondisi lingkungan pengujian.',
      url: 'https://drive.google.com/file/d/1SopFasilitas/view',
      isPublished: true,
    },
  });
  await prisma.sopDocument.create({
    data: {
      code: 'SOP-04',
      title: 'Penanganan Sampel dan Barang Uji',
      version: '1.0',
      description: 'Penerimaan, penyimpanan, dan penanganan sampel sesuai persyaratan lingkungan.',
      url: 'https://drive.google.com/file/d/1SopSampel/view',
      isPublished: false,
    },
  });

  // ---------- Program ----------
  step('membuat program pelatihan');
  const iso37001 = await prisma.program.create({
    data: {
      categoryId: catAnti.id,
      slug: 'iso-37001-2025',
      title: 'ISO 37001:2025 — Sistem Manajemen Anti Penyuapan',
      summary:
        'Pahami persyaratan sistem manajemen anti penyuapan, cara menerapkan, serta audit internalnya.',
      description:
        'Pelatihan ini membahas persyaratan ISO 37001:2025, identifikasi risiko penyuapan, penetapan kebijakan anti penyuapan, due diligence, hingga pengukuran efektivitas sistem. Peserta akan mempelajari studi kasus penerapan di organisasi jasa dan laboratorium.',
      syllabus: [
        '1. Ruang lingkup dan istilah ISO 37001:2025',
        '2. Konteks organisasi dan kepemimpinan',
        '3. Perencanaan: penilaian risiko penyuapan',
        '4. Dukungan: kompetensi, kesadaran, dan komunikasi',
        '5. Operasi: due diligence dan pengendalian keuangan/non-keuangan',
        '6. Evaluasi kinerja dan peningkatan',
        '7. Audit internal dan tinjauan manajemen',
      ].join('\n'),
      trainerName: 'Ahmad Fadillah',
      meetingUrl: 'https://meet.google.com/sopinsya-iso37001',
      isPublished: true,
    },
  });

  const iso9001 = await prisma.program.create({
    data: {
      categoryId: catMutu.id,
      slug: 'iso-9001-2015',
      title: 'ISO 9001:2015 — Sistem Manajemen Mutu',
      summary: 'Dasar penerapan sistem manajemen mutu berbasis risiko dan pendekatan proses.',
      description:
        'Pelatihan ISO 9001:2015 membahas konteks organisasi, kepemimpinan, perencanaan, dukungan, operasi, evaluasi kinerja, dan peningkatan berkelanjutan dengan pendekatan proses.',
      syllabus: [
        '1. Prinsip manajemen mutu dan pendekatan proses',
        '2. Konteks organisasi dan pihak berkepentingan',
        '3. Kepemimpinan dan kebijakan mutu',
        '4. Perencanaan risiko dan peluang',
        '5. Operasi dan pengendalian proses',
        '6. Evaluasi kinerja dan audit internal',
        '7. Peningkatan berkelanjutan',
      ].join('\n'),
      trainerName: 'Ahmad Fadillah',
      isPublished: true,
    },
  });

  const iso14001 = await prisma.program.create({
    data: {
      categoryId: catLingkungan.id,
      slug: 'iso-14001-2015',
      title: 'ISO 14001:2015 — Sistem Manajemen Lingkungan',
      summary: 'Identifikasi aspek dan dampak lingkungan serta pengelolaan kewajiban kepatuhan.',
      description:
        'Pelatihan ini membahas penerapan sistem manajemen lingkungan, identifikasi aspek dan dampak, penentuan kewajiban kepatuhan, hingga pengendalian operasional dan tanggap darurat.',
      syllabus: [
        '1. Ruang lingkup dan konteks organisasi',
        '2. Aspek dan dampak lingkungan',
        '3. Kewajiban kepatuhan',
        '4. Pengendalian operasional',
        '5. Tanggap darurat dan kesiapsiagaan',
        '6. Evaluasi kinerja lingkungan',
      ].join('\n'),
      isPublished: true,
    },
  });

  const iso17025 = await prisma.program.create({
    data: {
      categoryId: catMutu.id,
      slug: 'iso-iec-17025-2017',
      title: 'ISO/IEC 17025:2017 — Kompetensi Laboratorium',
      summary: 'Persyaratan manajemen dan teknis laboratorium pengujian dan kalibrasi.',
      description:
        'Pelatihan persyaratan kompetensi laboratorium pengujian dan kalibrasi: persyaratan manajemen, persyaratan teknis, ketidakberpihakan, validasi metode, hingga jaminan validitas hasil.',
      syllabus: [
        '1. Ruang lingkup dan ketidakberpihakan laboratorium',
        '2. Persyaratan umum dan struktural',
        '3. Persyaratan sumber daya: personel, fasilitas, peralatan',
        '4. Persyaratan proses: metode, pengambilan sampel, penanganan barang uji',
        '5. Jaminan validitas hasil dan pelaporan hasil',
        '6. Persyaratan manajemen dan audit internal',
      ].join('\n'),
      trainerName: 'Ahmad Fadillah',
      isPublished: true,
    },
  });

  step('menghubungkan SOP ke program');
  await prisma.programSop.createMany({
    data: [
      { programId: iso37001.id, sopId: sopDoc.id },
      { programId: iso37001.id, sopId: sopAudit.id },
      { programId: iso17025.id, sopId: sopFasilitas.id },
      { programId: iso17025.id, sopId: sopAudit.id },
    ],
  });

  // ---------- Materi ----------
  step('membuat materi program');
  const materials = [
    // ISO 37001
    {
      programId: iso37001.id,
      type: 'MATERI',
      title: 'Modul Peserta — Persyaratan ISO 37001:2025',
      description: 'Ringkasan pasal 4 sampai 10 beserta lembar kerja penilaian risiko penyuapan.',
      url: 'https://drive.google.com/file/d/1ModulISO37001/view',
      sortOrder: 1,
    },
    {
      programId: iso37001.id,
      type: 'MATERI',
      title: 'Lembar Kerja Penilaian Risiko Penyuapan',
      description: 'Template identifikasi risiko berdasarkan fungsi dan proses organisasi.',
      url: 'https://drive.google.com/file/d/1LKRiskPenyuapan/view',
      sortOrder: 2,
    },
    {
      programId: iso37001.id,
      type: 'STUDI_KASUS',
      title: 'Studi Kasus — Gratifikasi pada Pengadaan Barang',
      description: 'Analisis kasus dan penyusunan tindakan pengendalian sesuai ISO 37001.',
      url: 'https://drive.google.com/file/d/1StudiKasusGratifikasi/view',
      sortOrder: 1,
    },
    {
      programId: iso37001.id,
      type: 'VIDEO',
      title: 'Video Referensi — Penerapan ISO 37001 di Organisasi Jasa',
      description: 'Rekaman sesi daring trainer (YouTube).',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      sortOrder: 1,
    },
    {
      programId: iso37001.id,
      type: 'QUIZ',
      title: 'Quiz Game — Pemahaman Persyaratan ISO 37001',
      description: 'Kuis interaktif melalui tautan eksternal (Blooket).',
      url: 'https://www.blooket.com/play',
      sortOrder: 1,
    },
    // ISO 9001
    {
      programId: iso9001.id,
      type: 'MATERI',
      title: 'Modul Peserta — Pendekatan Proses ISO 9001',
      description: 'Diagram proses, peta risiko, dan contoh dokumentasi.',
      url: 'https://drive.google.com/file/d/1ModulISO9001/view',
      sortOrder: 1,
    },
    {
      programId: iso9001.id,
      type: 'STUDI_KASUS',
      title: 'Studi Kasus — Ketidaksesuaian Produk',
      description: 'Latihan analisis akar masalah dan tindakan korektif.',
      url: 'https://drive.google.com/file/d/1StudiKasus9001/view',
      sortOrder: 1,
    },
    {
      programId: iso9001.id,
      type: 'VIDEO',
      title: 'Video Referensi — Audit Internal ISO 9001',
      url: 'https://www.youtube.com/watch?v=1ISO9001Audit',
      sortOrder: 1,
    },
    // ISO 14001
    {
      programId: iso14001.id,
      type: 'MATERI',
      title: 'Modul Peserta — Aspek dan Dampak Lingkungan',
      description: 'Matriks identifikasi aspek, dampak, dan pengendaliannya.',
      url: 'https://drive.google.com/file/d/1ModulISO14001/view',
      sortOrder: 1,
    },
    {
      programId: iso14001.id,
      type: 'VIDEO',
      title: 'Video Referensi — Pengelolaan Limbah',
      url: 'https://www.youtube.com/watch?v=1LimbahISO14001',
      sortOrder: 1,
    },
    // ISO 17025
    {
      programId: iso17025.id,
      type: 'MATERI',
      title: 'Modul Peserta — Persyaratan Teknis ISO/IEC 17025',
      description: 'Validasi metode, ketertelusuran pengukuran, dan jaminan validitas hasil.',
      url: 'https://drive.google.com/file/d/1Modul17025/view',
      sortOrder: 1,
    },
    {
      programId: iso17025.id,
      type: 'STUDI_KASUS',
      title: 'Studi Kasus — Fasilitas dan Kondisi Lingkungan Laboratorium',
      description: 'Studi kasus berdasarkan temuan audit laboratorium beton.',
      url: 'https://drive.google.com/file/d/1StudiKasus17025/view',
      sortOrder: 1,
    },
  ];
  for (const material of materials) {
    await prisma.material.create({ data: material });
  }

  // ---------- Evaluasi & soal ----------
  step('membuat evaluasi dan soal');
  const preTest = await prisma.evaluation.create({
    data: {
      programId: iso37001.id,
      type: 'PRE_TEST',
      title: 'Pre-test ISO 37001:2025',
      instructions: 'Pilih satu jawaban yang paling tepat. Nilai tidak ditampilkan langsung.',
      isPublished: true,
      shuffle: true,
    },
  });
  const postTest = await prisma.evaluation.create({
    data: {
      programId: iso37001.id,
      type: 'POST_TEST',
      title: 'Post-test ISO 37001:2025',
      instructions: 'Kerjakan seluruh soal untuk mengukur pemahaman akhir Anda.',
      isPublished: true,
      shuffle: true,
    },
  });

  const questionSet = [
    {
      text: 'Apa tujuan utama sistem manajemen anti penyuapan menurut ISO 37001?',
      options: ['Mencegah, mendeteksi, dan menanggapi penyuapan', 'Meningkatkan laba perusahaan', 'Menghindari audit eksternal', 'Menggantikan sistem manajemen mutu'],
      correctAnswer: 'A',
    },
    {
      text: 'Siapa yang bertanggung jawab menetapkan kebijakan anti penyuapan?',
      options: ['Seluruh karyawan', 'Top management', 'Auditor eksternal', 'Pemasok'],
      correctAnswer: 'B',
    },
    {
      text: 'Apa yang dimaksud dengan due diligence pada ISO 37001?',
      options: ['Pemeriksaan keuangan tahunan', 'Penilaian risiko penyuapan terhadap transaksi dan mitra bisnis', 'Audit produk', 'Pengukuran kinerja karyawan'],
      correctAnswer: 'B',
    },
    {
      text: 'Dokumen apa yang wajib dimiliki sebagai bukti penerapan sistem anti penyuapan?',
      options: ['Rekaman penilaian risiko penyuapan', 'Daftar hadir rapat mingguan', 'Notulen rapat pemasaran', 'Laporan penjualan'],
      correctAnswer: 'A',
    },
    {
      text: 'Bagaimana organisasi menangani laporan penyuapan yang masuk?',
      options: ['Diabaikan bila tidak lengkap', 'Ditangani melalui prosedur pelaporan dan investigasi yang terlindungi', 'Disampaikan ke publik', 'Diserahkan ke mitra bisnis'],
      correctAnswer: 'B',
    },
  ];

  for (const [index, question] of questionSet.entries()) {
    await prisma.question.create({
      data: {
        evaluationId: preTest.id,
        text: question.text,
        options: JSON.stringify(question.options),
        correctAnswer: question.correctAnswer,
        score: 1,
        sortOrder: index + 1,
      },
    });
  }
  for (const [index, question] of questionSet.entries()) {
    await prisma.question.create({
      data: {
        evaluationId: postTest.id,
        text: question.text,
        options: JSON.stringify(question.options),
        correctAnswer: question.correctAnswer,
        score: 1,
        sortOrder: index + 1,
      },
    });
  }

  const iso9001Pre = await prisma.evaluation.create({
    data: {
      programId: iso9001.id,
      type: 'PRE_TEST',
      title: 'Pre-test ISO 9001:2015',
      instructions: 'Pilih satu jawaban yang paling tepat.',
      isPublished: true,
      shuffle: true,
    },
  });
  const iso9001Questions = [
    {
      text: 'Prinsip utama ISO 9001:2015 adalah…',
      options: ['Pendekatan proses dan berbasis risiko', 'Menghindari dokumentasi', 'Fokus pada harga produk', 'Audit tahunan saja'],
      correctAnswer: 'A',
    },
    {
      text: 'Apa fungsi tinjauan manajemen?',
      options: ['Menilai kinerja sistem manajemen mutu secara berkala', 'Menetapkan harga jual', 'Merekrut karyawan baru', 'Mengganti sertifikat'],
      correctAnswer: 'A',
    },
    {
      text: 'Rekaman wajib dikendalikan untuk…',
      options: ['Menambah jumlah dokumen', 'Membuktikan kesesuaian dan efektivitas sistem', 'Memperlambat proses', 'Menghindari pelatihan'],
      correctAnswer: 'B',
    },
  ];
  for (const [index, question] of iso9001Questions.entries()) {
    await prisma.question.create({
      data: {
        evaluationId: iso9001Pre.id,
        text: question.text,
        options: JSON.stringify(question.options),
        correctAnswer: question.correctAnswer,
        score: 1,
        sortOrder: index + 1,
      },
    });
  }

  // ---------- Rating & ulasan ----------
  step('membuat rating dan ulasan');
  const reviews = [
    { rating: 5, comment: 'Materinya jelas dan mudah dipahami, trainer sangat komunikatif dan contoh kasusnya relevan dengan pekerjaan sehari-hari.' },
    { rating: 5, comment: 'Studi kasus serta pre-test dan post-test membantu saya mengukur peningkatan pemahaman. Sangat direkomendasikan.' },
    { rating: 4, comment: 'Alur pelatihan rapi. Video referensi membantu saat sesi daring terlewat.' },
    { rating: 4, comment: 'Materi lengkap, pustaka SOP memudahkan penerapan di tempat kerja.' },
    { rating: 5, comment: 'Penjelasan due diligence sangat aplikatif. Terima kasih Sopinsya.' },
  ];
  for (const review of reviews) {
    await prisma.programReview.create({
      data: { programId: iso37001.id, rating: review.rating, comment: review.comment, reviewerName: 'Anonim' },
    });
  }
  await prisma.programReview.create({
    data: { programId: iso9001.id, rating: 5, comment: 'Contoh dokumentasi yang diberikan sangat membantu tim mutu kami.', reviewerName: 'Anonim' },
  });

  // ---------- Register Temuan (mengikuti format formulir Laboratorium BBWS) ----------
  step('membuat register temuan audit');
  const reportedAt = new Date('2023-12-21T09:00:00Z');
  const findings = [
    {
      clause: 'SNI ISO/IEC 17025:2017 - 4.1.1',
      category: 'OBSERVASI',
      description:
        'Disarankan untuk menyediakan ruangan dan petugas untuk menerima layanan pengujian laboratorium secara terpadu, sehingga bisa menjaga ketidakberpihakan Laboratorium.',
      rootCause: 'Belum memahami SOP pengelolaan fasilitas dan kondisi lingkungan laboratorium No. SOP.03.',
      correction: '-',
      correctiveAction:
        'Tindakan Peningkatan: Menyediakan Ruangan Sekretariat Layanan Laboratorium secara terpadu.\nPelaksana: Tim Mutu\nTarget Selesai: April 2024\nBukti: SK_Ruang_Layanan_Terpadu_2024.pdf',
      verificationResult: 'Closed (efektif)',
      status: 'CLOSED',
      targetDate: new Date('2024-04-30'),
      evidenceUrl: 'https://drive.google.com/file/d/1SKRuangLayanan/view',
    },
    {
      clause: 'SNI ISO/IEC 17025:2017 - 6.3.2',
      category: 'MINOR',
      description:
        'Laboratorium Beton belum menentukan persyaratan kondisi lingkungan di masing-masing laboratoriumnya dan belum menyediakan peralatan dan formulir pemantauannya. Pada saat observasi didapatkan suhu ruangan laboratorium Beton yang cukup panas.',
      rootCause:
        'Belum ditentukannya lokasi pengujian sehingga seluruh pengujian dilakukan di ruangan terbuka.',
      correction:
        'Menyediakan ruangan pengujian yang tertutup agar suhu lebih terkontrol menggunakan AC.\nPelaksana: Tim Laboratorium Beton\nTarget Selesai: April 2024\nBukti: Foto_Ruang_Pengujian_AC_Beton.jpg',
      correctiveAction:
        'Menentukan persyaratan fasilitas dan kondisi lingkungan menggunakan formulir F.03-01 serta menyediakan peralatan pemantauan (termometer).\nPelaksana: Tim Laboratorium Beton\nTarget Selesai: Januari 2024',
      verificationResult: 'Closed (efektif)',
      status: 'CLOSED',
      targetDate: new Date('2024-04-30'),
      evidenceUrl: 'https://drive.google.com/file/d/1FotoTermometer/view',
    },
    {
      clause: 'SNI ISO/IEC 17025:2017 - 6.3.3',
      category: 'MINOR',
      description:
        'Pada saat observasi ditemukan peralatan yang belum terkalibrasi, antara lain compressive test, sieve shaker, hammer test, saringan, air entrainmeter, set alat berat jenis, los angeles, dan set slump test.',
      rootCause:
        'Belum tersedianya program dan anggaran kalibrasi berkala untuk seluruh alat ukur.',
      correction:
        'Mengkalibrasi peralatan ke laboratorium kalibrasi terakreditasi KAN.\nPelaksana: Tim Laboratorium Beton\nTarget Selesai: April 2024\nBukti: Sertifikat_Kalibrasi_KAN_2024.pdf',
      correctiveAction:
        'Menyediakan program dan anggaran kalibrasi peralatan secara terstruktur tahunan.\nPelaksana: Tim Administrasi\nTarget Selesai: Januari 2024\nBukti: Rencana_Anggaran_Kalibrasi_Tahunan.xlsx',
      verificationResult: 'Closed (efektif)',
      status: 'CLOSED',
      targetDate: new Date('2024-04-30'),
      evidenceUrl: 'https://drive.google.com/file/d/1SertifikatKalibrasi/view',
    },
    {
      clause: 'SNI ISO/IEC 17025:2017 - 6.4.6',
      category: 'MINOR',
      description:
        'Belum ditemukannya ruangan penyimpanan sampel dan/atau sisa sampel sesuai persyaratan (misalnya suhu harus dijaga 25–30 °C) di Laboratorium Beton.',
      rootCause:
        'Belum ditentukannya lokasi penyimpanan sampel sehingga seluruh sampel disimpan di ruangan terbuka.',
      correction:
        'Menyediakan ruangan penyimpanan sampel yang tertutup agar suhu lebih terkontrol menggunakan AC.\nPelaksana: Tim Laboratorium Beton\nTarget Selesai: April 2024\nBukti: Foto_Ruang_Simpan_Sampel_Beton.jpg',
      correctiveAction:
        'Menentukan jenis sampel dan lokasi simpannya sesuai persyaratan lingkungan yang telah ditentukan di SNI.\nPelaksana: Tim Laboratorium Beton\nTarget Selesai: Januari 2024\nBukti: SOP_Penyimpanan_Penanganan_Sampel.pdf',
      verificationResult: 'Closed (efektif)',
      status: 'CLOSED',
      targetDate: new Date('2024-04-30'),
      evidenceUrl: 'https://drive.google.com/file/d/1SOPPenyimpananSampel/view',
    },
    {
      clause: 'SNI ISO/IEC 17025:2017 - 7.4.1',
      category: 'MINOR',
      description:
        'Pada saat observasi laboratorium didapatkan suhu ruangan laboratorium Beton yang cukup panas. Hal ini dapat berpengaruh pada saat pengujian yang membutuhkan kontrol suhu.',
      rootCause: 'Pengendalian kondisi lingkungan belum terdokumentasi dan belum dipantau secara berkala.',
      correction:
        'Menyediakan ruangan pengujian yang tertutup agar suhu lebih terkontrol menggunakan AC.',
      correctiveAction:
        'Sosialisasi SOP Pengelolaan Fasilitas dan Kondisi Lingkungan Laboratorium No. SOP.03 ke seluruh personil laboratorium.\nPelaksana: Tim Mutu\nTarget Selesai: Januari 2024',
      verificationResult: 'Open — menunggu bukti sosialisasi',
      status: 'OPEN',
      targetDate: new Date('2024-05-31'),
      evidenceUrl: 'https://drive.google.com/file/d/1DaftarHadirSosialisasi/view',
    },
  ];
  for (const [index, finding] of findings.entries()) {
    await prisma.finding.create({
      data: {
        code: `FND-202312-${String(index + 1).padStart(3, '0')}`,
        auditorId: index === 0 ? auditor.id : auditor.id,
        source: 'Internal',
        reportedAt,
        ...finding,
      },
    });
  }

  console.log('Seed selesai.');
  console.log('  Admin   : admin@sopinsya.test / Admin#12345');
  console.log('  Auditor : auditor@sopinsya.test / Auditor#12345');
  console.log(`  Program : ${await prisma.program.count()} | Temuan: ${await prisma.finding.count()}`);
  await prisma.$disconnect();
}

main().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
