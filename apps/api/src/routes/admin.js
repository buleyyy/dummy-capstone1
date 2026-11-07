import express from 'express';
import { pageRequireRole } from '../middleware/auth.js';
import { ApiError, notFound, wrap } from '../utils/http.js';
import {
  createProgram,
  deleteProgram,
  getProgramById,
  listAllPrograms,
  listCategories,
  updateProgram,
} from '../services/programs.js';
import {
  createMaterial,
  createSop,
  deleteMaterial,
  deleteSop,
  listSops,
  toggleProgramSop,
  updateMaterial,
  updateSop,
} from '../services/content.js';
import {
  createQuestion,
  deleteQuestion,
  ensureEvaluation,
  importQuestions,
  updateEvaluation,
  updateQuestion,
} from '../services/evaluations.js';
import { adminDashboard, evaluationRecap } from '../services/reports.js';
import { listAllReviews } from '../services/reviews.js';
import { createUser, listUsers, setUserActive, updateUser } from '../services/users.js';
import { getSettings, saveSettings } from '../services/settings.js';

const router = express.Router();

router.use(pageRequireRole('ADMIN'));

function flash(req) {
  return { ok: req.query.ok ?? null, err: req.query.err ?? null };
}

function act(backFn, handler) {
  return wrap(async (req, res, next) => {
    try {
      await handler(req, res);
      const back = typeof backFn === 'function' ? backFn(req, res) : backFn;
      if (back && !res.headersSent) {
        res.redirect(`${back}${back.includes('?') ? '&' : '?'}ok=${encodeURIComponent('Perubahan disimpan.')}`);
      }
    } catch (err) {
      if (!(err instanceof ApiError)) return next(err);
      const back = typeof backFn === 'function' ? backFn(req, res) : backFn;
      if (!back || res.headersSent) return next(err);
      res.redirect(`${back}${back.includes('?') ? '&' : '?'}err=${encodeURIComponent(err.message)}`);
    }
  });
}

const optionsFromText = (text) =>
  String(text ?? '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

// ---------- Dashboard ----------

router.get(
  '/',
  wrap(async (req, res) => {
    const [stats, settings] = await Promise.all([adminDashboard(), getSettings()]);
    res.render('admin/dashboard', {
      title: 'Dashboard Admin',
      active: 'dashboard',
      user: req.user,
      settings,
      stats,
      ...flash(req),
    });
  }),
);

// ---------- Program ----------

router.get(
  '/program',
  wrap(async (req, res) => {
    const [programs, settings] = await Promise.all([
      listAllPrograms({ q: req.query.q }),
      getSettings(),
    ]);
    res.render('admin/programs', {
      title: 'Kelola Program',
      active: 'program',
      user: req.user,
      settings,
      programs,
      q: req.query.q ?? '',
      ...flash(req),
    });
  }),
);

router.get(
  '/program/baru',
  wrap(async (req, res) => {
    const [categories, settings] = await Promise.all([listCategories(), getSettings()]);
    res.render('admin/program-form', {
      title: 'Tambah Program',
      active: 'program',
      user: req.user,
      settings,
      categories,
      program: null,
      ...flash(req),
    });
  }),
);

router.post(
  '/program',
  wrap(async (req, res, next) => {
    try {
      const program = await createProgram(req.body ?? {});
      res.redirect(
        `/admin/program/${program.id}?ok=${encodeURIComponent('Program berhasil dibuat.')}`,
      );
    } catch (err) {
      if (!(err instanceof ApiError)) return next(err);
      res.redirect(`/admin/program/baru?err=${encodeURIComponent(err.message)}`);
    }
  }),
);

router.get(
  '/program/:id',
  wrap(async (req, res, next) => {
    try {
      const [program, categories, allSops, settings] = await Promise.all([
        getProgramById(req.params.id),
        listCategories(),
        listSops({ includeUnpublished: true }),
        getSettings(),
      ]);
      const attached = new Set(program.programSops.map((row) => row.sopId));
      res.render('admin/program-detail', {
        title: `Kelola — ${program.title}`,
        active: 'program',
        user: req.user,
        settings,
        program,
        categories,
        allSops,
        attached,
        ...flash(req),
      });
    } catch (err) {
      if (err instanceof ApiError) return next();
      throw err;
    }
  }),
);

router.post(
  '/program/:id',
  act((req) => `/admin/program/${req.params.id}`, async (req) => {
    await updateProgram(req.params.id, req.body ?? {});
  }),
);

router.post(
  '/program/:id/hapus',
  act('/admin/program', async (req) => {
    await deleteProgram(req.params.id);
  }),
);

// ---------- Materi ----------

router.post(
  '/program/:id/materi',
  act((req) => `/admin/program/${req.params.id}`, async (req) => {
    await createMaterial(req.params.id, req.body ?? {});
  }),
);

router.post(
  '/materi/:id',
  act((req) => `/admin/program/${req.body.programId}`, async (req) => {
    await updateMaterial(req.params.id, req.body ?? {});
  }),
);

router.post(
  '/materi/:id/hapus',
  act((req) => `/admin/program/${req.body.programId}`, async (req) => {
    await deleteMaterial(req.params.id);
  }),
);

// ---------- SOP program ----------

router.post(
  '/program/:id/sop',
  act((req) => `/admin/program/${req.params.id}`, async (req) => {
    await toggleProgramSop(req.params.id, req.body.sopId, req.body.attached === '1');
  }),
);

// ---------- Evaluasi & soal ----------

router.post(
  '/program/:id/evaluasi/:type',
  act((req) => `/admin/program/${req.params.id}`, async (req) => {
    const evaluation = await ensureEvaluation(req.params.id, req.params.type);
    await updateEvaluation(evaluation.id, {
      title: req.body.title || evaluation.title,
      instructions: req.body.instructions,
      isPublished: req.body.isPublished,
      shuffle: req.body.shuffle,
    });
  }),
);

router.post(
  '/evaluasi/:id/soal',
  act((req) => `/admin/program/${req.body.programId}#soal`, async (req) => {
    await createQuestion(req.params.id, {
      text: req.body.text,
      options: optionsFromText(req.body.options),
      correctAnswer: req.body.correctAnswer,
      score: req.body.score,
      sortOrder: req.body.sortOrder,
    });
  }),
);

router.post(
  '/soal/:id',
  act((req) => `/admin/program/${req.body.programId}#soal`, async (req) => {
    await updateQuestion(req.params.id, {
      text: req.body.text,
      options: optionsFromText(req.body.options),
      correctAnswer: req.body.correctAnswer,
      score: req.body.score,
      sortOrder: req.body.sortOrder,
    });
  }),
);

router.post(
  '/soal/:id/hapus',
  act((req) => `/admin/program/${req.body.programId}#soal`, async (req) => {
    await deleteQuestion(req.params.id);
  }),
);

router.post(
  '/evaluasi/:id/impor',
  act((req) => `/admin/program/${req.body.programId}#soal`, async (req) => {
    await importQuestions(req.params.id, req.body.text, {
      replace: req.body.replace === '1',
    });
  }),
);

// ---------- Hasil evaluasi (KF-16) ----------

router.get(
  '/hasil',
  wrap(async (req, res) => {
    const filters = {
      programId: req.query.programId || undefined,
      type: req.query.type || undefined,
      from: req.query.from || undefined,
      to: req.query.to || undefined,
    };
    const [rows, programs, settings] = await Promise.all([
      evaluationRecap(filters),
      listAllPrograms(),
      getSettings(),
    ]);
    res.render('admin/results', {
      title: 'Hasil Evaluasi',
      active: 'hasil',
      user: req.user,
      settings,
      rows,
      programs,
      filters,
      ...flash(req),
    });
  }),
);

// Alias: URL mikro yang banyak dipakai tetap berfungsi (hanya mengubah URL, tidak fungsi).
router.get(
  '/results',
  wrap(async (req, res) => {
    const filters = {
      programId: req.query.programId || undefined,
      type: req.query.type || undefined,
      from: req.query.from || undefined,
      to: req.query.to || undefined,
    };
    const [rows, programs, settings] = await Promise.all([
      evaluationRecap(filters),
      listAllPrograms(),
      getSettings(),
    ]);
    res.render('admin/results', {
      title: 'Hasil Evaluasi',
      active: 'hasil',
      user: req.user,
      settings,
      rows,
      programs,
      filters,
      ...flash(req),
    });
  }),
);

router.get(
  '/hasil.csv',
  wrap(async (req, res) => {
    const { recapToCsv, evaluationRecap } = await import('../services/reports.js');
    const rows = await evaluationRecap({
      programId: req.query.programId || undefined,
      type: req.query.type || undefined,
      from: req.query.from || undefined,
      to: req.query.to || undefined,
    });
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="rekap-nilai-sopinsya.csv"');
    res.send(recapToCsv(rows));
  }),
);

// ---------- Akun internal (KF-33, UC-12) ----------

router.get(
  '/akun',
  wrap(async (req, res) => {
    const [users, settings] = await Promise.all([listUsers(), getSettings()]);
    res.render('admin/users', {
      title: 'Kelola Akun',
      active: 'akun',
      user: req.user,
      settings,
      users,
      ...flash(req),
    });
  }),
);

// Alias: URL mikro yang banyak dipakai tetap berfungsi (hanya mengubah URL, tidak fungsi).
router.get(
  '/users',
  wrap(async (req, res) => {
    const [users, settings] = await Promise.all([listUsers(), getSettings()]);
    res.render('admin/users', {
      title: 'Kelola Akun',
      active: 'akun',
      user: req.user,
      settings,
      users,
      ...flash(req),
    });
  }),
);

router.post(
  '/akun',
  act('/admin/akun', async (req) => {
    await createUser(req.body ?? {});
  }),
);

router.post(
  '/akun/:id',
  act('/admin/akun', async (req) => {
    await updateUser(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      ...(req.body.password ? { password: req.body.password } : {}),
    });
  }),
);

router.post(
  '/akun/:id/status',
  act('/admin/akun', async (req) => {
    await setUserActive(req.params.id, req.body.isActive === '1');
  }),
);

// ---------- Pustaka SOP (KF-07/KF-08) ----------

router.get(
  '/sop',
  wrap(async (req, res) => {
    const [sops, settings] = await Promise.all([
      listSops({ includeUnpublished: true }),
      getSettings(),
    ]);
    res.render('admin/sops', {
      title: 'Pustaka SOP',
      active: 'sop',
      user: req.user,
      settings,
      sops,
      ...flash(req),
    });
  }),
);

router.get(
  '/sops',
  wrap(async (req, res) => {
    const [sops, settings] = await Promise.all([
      listSops({ includeUnpublished: true }),
      getSettings(),
    ]);
    res.render('admin/sops', {
      title: 'Pustaka SOP',
      active: 'sop',
      user: req.user,
      settings,
      sops,
      ...flash(req),
    });
  }),
);

router.post(
  '/sop',
  act('/admin/sop', async (req) => {
    await createSop(req.body ?? {});
  }),
);

router.post(
  '/sop/:id',
  act('/admin/sop', async (req) => {
    await updateSop(req.params.id, req.body ?? {});
  }),
);

router.post(
  '/sop/:id/hapus',
  act('/admin/sop', async (req) => {
    await deleteSop(req.params.id);
  }),
);

// ---------- Rating & ulasan (KF-31) ----------

router.get(
  '/ulasan',
  wrap(async (req, res) => {
    const [reviews, settings] = await Promise.all([listAllReviews(), getSettings()]);
    res.render('admin/reviews', {
      title: 'Rating & Ulasan',
      active: 'ulasan',
      user: req.user,
      settings,
      reviews,
      ...flash(req),
    });
  }),
);

// ---------- Pengaturan (KF-18/KF-29) ----------

router.get(
  '/pengaturan',
  wrap(async (req, res) => {
    res.render('admin/settings', {
      title: 'Pengaturan Situs',
      active: 'pengaturan',
      user: req.user,
      settings: await getSettings(),
      ...flash(req),
    });
  }),
);

router.post(
  '/pengaturan',
  act('/admin/pengaturan', async (req) => {
    await saveSettings(req.body ?? {});
  }),
);

// ---------- 404 area admin ----------

router.use((req, res, next) => next(notFound('Halaman admin tidak ditemukan')));

export default router;
