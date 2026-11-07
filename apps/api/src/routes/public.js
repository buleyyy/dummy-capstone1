import express from 'express';
import {
  getPublicProgram,
  listCategories,
  listPublicPrograms,
  publicStats,
} from '../services/programs.js';
import { createReview, reviewSummary } from '../services/reviews.js';
import { getPublicEvaluation } from '../services/evaluations.js';
import { listSops } from '../services/content.js';
import { getSettings, whatsappLink } from '../services/settings.js';
import { authenticate, createSession, destroySession } from '../services/auth.js';
import {
  clearSessionCookie,
  getSessionToken,
  setSessionCookie,
} from '../middleware/auth.js';
import { ApiError, wrap } from '../utils/http.js';

const router = express.Router();

async function base(extra = {}) {
  const settings = await getSettings();
  return {
    settings,
    waLink: whatsappLink(
      settings.whatsapp,
      'Halo Sopinsya Educenter, saya ingin bertanya mengenai program pelatihan.',
    ),
    ...extra,
  };
}

function flash(req) {
  return { ok: req.query.ok ?? null, err: req.query.err ?? null };
}

// ---------- Beranda (KF-01) ----------

router.get(
  '/',
  wrap(async (req, res) => {
    const [programs, categories, stats, sops] = await Promise.all([
      listPublicPrograms(),
      listCategories(),
      publicStats(),
      listSops(),
    ]);
    res.render(
      'pages/home',
      await base({
        title: 'Beranda',
        active: 'beranda',
        programs: programs.slice(0, 3),
        categories,
        stats,
        sops: sops.slice(0, 3),
        ...flash(req),
      }),
    );
  }),
);

// ---------- Katalog program (KF-02, UC-01) ----------

router.get(
  '/program',
  wrap(async (req, res) => {
    const q = String(req.query.q ?? '').trim();
    const category = String(req.query.category ?? '').trim();
    const [programs, categories] = await Promise.all([
      listPublicPrograms({ q, category }),
      listCategories(),
    ]);
    res.render(
      'pages/programs',
      await base({
        title: 'Program Pelatihan',
        active: 'program',
        programs,
        categories,
        q,
        category,
        ...flash(req),
      }),
    );
  }),
);

// ---------- Detail program (KF-03, UC-02) ----------

router.get(
  '/program/:slug',
  wrap(async (req, res) => {
    const program = await getPublicProgram(req.params.slug);
    const reviews = await reviewSummary(program.id);
    res.render(
      'pages/program',
      await base({
        title: program.title,
        active: 'program',
        program,
        reviews,
        ...flash(req),
      }),
    );
  }),
);

// ---------- Rating & ulasan (KF-31, UC-05) ----------

router.get(
  '/program/:slug/ulasan',
  wrap(async (req, res) => {
    const program = await getPublicProgram(req.params.slug);
    const reviews = await reviewSummary(program.id);
    res.render(
      'pages/review',
      await base({
        title: `Rating & Ulasan — ${program.title}`,
        active: 'program',
        program,
        reviews,
        ...flash(req),
      }),
    );
  }),
);

router.post(
  '/program/:slug/ulasan',
  wrap(async (req, res) => {
    try {
      await createReview(req.params.slug, req.body ?? {});
      res.redirect(`/program/${req.params.slug}?ok=${encodeURIComponent('Terima kasih, ulasan Anda sudah terkirim secara anonim.')}#ulasan`);
    } catch (err) {
      if (err instanceof ApiError) {
        res.redirect(
          `/program/${req.params.slug}/ulasan?err=${encodeURIComponent(err.message)}`,
        );
        return;
      }
      throw err;
    }
  }),
);

// ---------- Evaluasi (KF-09..KF-15) ----------

router.get(
  '/program/:slug/evaluasi/:type',
  wrap(async (req, res) => {
    try {
      const data = await getPublicEvaluation(req.params.slug, req.params.type);
      res.render(
        'pages/evaluation',
        await base({
          title: `${data.evaluation.title} — ${data.program.title}`,
          active: 'program',
          ...data,
        }),
      );
    } catch (err) {
      if (err instanceof ApiError) {
        res.status(err.status).render(
          'pages/error',
          await base({
            title: 'Evaluasi Tidak Tersedia',
            active: 'program',
            status: err.status,
            message: err.message,
          }),
        );
        return;
      }
      throw err;
    }
  }),
);

// ---------- Tentang & kontak ----------

router.get(
  '/tentang',
  wrap(async (req, res) => {
    res.render('pages/about', await base({ title: 'Tentang Kami', active: 'tentang' }));
  }),
);

router.get(
  '/kontak',
  wrap(async (req, res) => {
    res.render(
      'pages/contact',
      await base({ title: 'Hubungi Kami', active: 'kontak', ...flash(req) }),
    );
  }),
);

router.get(
  '/pustaka-sop',
  wrap(async (req, res) => {
    res.render(
      'pages/sops',
      await base({
        title: 'Pustaka SOP',
        active: 'pustaka',
        sops: await listSops(),
      }),
    );
  }),
);

// ---------- Autentikasi halaman (KF-19, UC-07, UC-13) ----------

router.get('/login', (req, res) => {
  if (req.user) return res.redirect(req.user.role === 'ADMIN' ? '/admin' : '/audit');
  res.render('pages/login', {
    title: 'Masuk',
    active: '',
    user: null,
    settings: null,
    next: typeof req.query.next === 'string' ? req.query.next : '',
    error: req.query.err ?? null,
    info: req.query.ok ?? null,
  });
});

router.post(
  '/login',
  wrap(async (req, res) => {
    const { email, password, next } = req.body ?? {};
    try {
      const user = await authenticate(email, password);
      const session = await createSession(user.id);
      setSessionCookie(res, session.token, session.expiresAt);
      const target =
        typeof next === 'string' && next.startsWith('/') && !next.startsWith('//')
          ? next
          : user.role === 'ADMIN'
            ? '/admin'
            : '/audit';
      res.redirect(target);
    } catch (err) {
      if (err instanceof ApiError) {
        res.status(err.status).render('pages/login', {
          title: 'Masuk',
          active: '',
          user: null,
          settings: await getSettings(),
          next: typeof next === 'string' ? next : '',
          error: err.message,
          info: null,
        });
        return;
      }
      throw err;
    }
  }),
);

router.post(
  '/logout',
  wrap(async (req, res) => {
    await destroySession(getSessionToken(req));
    clearSessionCookie(res);
    res.redirect('/?ok=' + encodeURIComponent('Anda telah keluar.'));
  }),
);

export default router;
