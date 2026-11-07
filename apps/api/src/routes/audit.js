import express from 'express';
import { pageRequireRole } from '../middleware/auth.js';
import { ApiError, notFound, wrap } from '../utils/http.js';
import {
  createFinding,
  findingStats,
  getFinding,
  listFindings,
  updateFinding,
  FINDING_SOURCES,
} from '../services/findings.js';
import { getSettings } from '../services/settings.js';
import { listSops } from '../services/content.js';

const router = express.Router();

router.use(pageRequireRole('ADMIN', 'AUDITOR'));

function flash(req) {
  return { ok: req.query.ok ?? null, err: req.query.err ?? null };
}

function filtersFrom(req) {
  return {
    q: req.query.q || undefined,
    category: req.query.category || undefined,
    status: req.query.status || undefined,
    source: req.query.source || undefined,
    from: req.query.from || undefined,
    to: req.query.to || undefined,
  };
}

// ---------- Dashboard audit (KF-26, UC-14) ----------

router.get(
  '/',
  wrap(async (req, res) => {
    const filters = filtersFrom(req);
    const [stats, settings] = await Promise.all([findingStats(filters), getSettings()]);
    res.render('audit/dashboard', {
      title: 'Dashboard Audit',
      active: 'dashboard',
      user: req.user,
      settings,
      stats,
      filters,
      ...flash(req),
    });
  }),
);

// ---------- Register Temuan (KF-21..KF-25, UC-15) ----------

router.get(
  '/temuan',
  wrap(async (req, res) => {
    const filters = filtersFrom(req);
    const [findings, settings] = await Promise.all([listFindings(filters), getSettings()]);
    res.render('audit/findings', {
      title: 'Register Temuan',
      active: 'temuan',
      user: req.user,
      settings,
      findings,
      filters,
      sources: FINDING_SOURCES,
      ...flash(req),
    });
  }),
);

// Alias: URL mikro yang banyak dipakai tetap berfungsi (hanya mengubah URL, tidak fungsi).
router.get(
  '/findings',
  wrap(async (req, res) => {
    const filters = filtersFrom(req);
    const [findings, settings] = await Promise.all([listFindings(filters), getSettings()]);
    res.render('audit/findings', {
      title: 'Register Temuan',
      active: 'temuan',
      user: req.user,
      settings,
      findings,
      filters,
      sources: FINDING_SOURCES,
      ...flash(req),
    });
  }),
);

router.get(
  '/temuan/baru',
  wrap(async (req, res) => {
    res.render('audit/finding-form', {
      title: 'Tambah Temuan',
      active: 'temuan',
      user: req.user,
      settings: await getSettings(),
      finding: null,
      sources: FINDING_SOURCES,
      ...flash(req),
    });
  }),
);

router.post(
  '/temuan',
  wrap(async (req, res, next) => {
    try {
      const finding = await createFinding(req.user, req.body ?? {});
      res.redirect(`/audit/temuan/${finding.id}?ok=${encodeURIComponent('Temuan berhasil disimpan.')}`);
    } catch (err) {
      if (!(err instanceof ApiError)) return next(err);
      res.redirect(`/audit/temuan/baru?err=${encodeURIComponent(err.message)}`);
    }
  }),
);

router.get(
  '/temuan/:id',
  wrap(async (req, res, next) => {
    try {
      const finding = await getFinding(req.params.id);
      res.render('audit/finding-form', {
        title: `Temuan ${finding.code}`,
        active: 'temuan',
        user: req.user,
        settings: await getSettings(),
        finding,
        sources: FINDING_SOURCES,
        ...flash(req),
      });
    } catch (err) {
      if (err instanceof ApiError) return next();
      throw err;
    }
  }),
);

router.post(
  '/temuan/:id',
  wrap(async (req, res, next) => {
    try {
      await updateFinding(req.params.id, req.body ?? {});
      res.redirect(
        `/audit/temuan/${req.params.id}?ok=${encodeURIComponent('Perubahan temuan disimpan.')}`,
      );
    } catch (err) {
      if (!(err instanceof ApiError)) return next(err);
      res.redirect(`/audit/temuan/${req.params.id}?err=${encodeURIComponent(err.message)}`);
    }
  }),
);

// ---------- Laporan audit (KF-27/KF-28, UC-17) ----------

router.get(
  '/laporan',
  wrap(async (req, res) => {
    const filters = filtersFrom(req);
    const [findings, stats, settings] = await Promise.all([
      listFindings(filters),
      findingStats(filters),
      getSettings(),
    ]);
    res.render(
      'audit/report',
      {
        title: 'Laporan Audit',
        active: 'laporan',
        user: req.user,
        settings,
        findings,
        stats,
        filters,
        generatedAt: new Date(),
        layout: false,
      },
      (err, html) => {
        if (err) return res.status(500).send('Gagal menyusun laporan');
        res.send(html);
      },
    );
  }),
);

// ---------- Pustaka SOP untuk Auditor ----------

router.get(
  '/pustaka-sop',
  wrap(async (req, res) => {
    const [sops, settings] = await Promise.all([listSops(), getSettings()]);
    res.render('audit/sops', {
      title: 'Pustaka SOP',
      active: 'sop',
      user: req.user,
      settings,
      sops,
      ...flash(req),
    });
  }),
);

router.use((_req, _res, next) => next(notFound('Halaman audit tidak ditemukan')));

export default router;
