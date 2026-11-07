import express from 'express';
import { requireRole } from '../../middleware/auth.js';
import {
  createProgram,
  deleteProgram,
  getProgramById,
  getPublicProgram,
  listAllPrograms,
  listCategories,
  listPublicPrograms,
  updateProgram,
} from '../../services/programs.js';
import {
  createMaterial,
  deleteMaterial,
  updateMaterial,
} from '../../services/content.js';
import { createReview, listReviews, reviewSummary } from '../../services/reviews.js';
import { ok, wrap } from '../../utils/http.js';

const router = express.Router();

// ---------- Publik ----------

// GET /api/v1/programs?q=&category=
router.get(
  '/',
  wrap(async (req, res) => {
    const data = await listPublicPrograms({ q: req.query.q, category: req.query.category });
    ok(res, data);
  }),
);

// GET /api/v1/programs/categories
router.get(
  '/categories',
  wrap(async (_req, res) => ok(res, await listCategories())),
);

// GET /api/v1/programs/admin — daftar termasuk draft (ADMIN)
router.get(
  '/admin',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await listAllPrograms({ q: req.query.q }))),
);

// GET /api/v1/programs/id/:id — detail lengkap untuk admin
router.get(
  '/id/:id',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await getProgramById(req.params.id))),
);

// GET /api/v1/programs/:slug
router.get(
  '/:slug',
  wrap(async (req, res) => ok(res, await getPublicProgram(req.params.slug))),
);

// GET /api/v1/programs/:slug/reviews
router.get(
  '/:slug/reviews',
  wrap(async (req, res) => {
    const program = await getPublicProgram(req.params.slug);
    ok(res, await reviewSummary(program.id));
  }),
);

// POST /api/v1/programs/:slug/reviews — KF-31 (anonim)
router.post(
  '/:slug/reviews',
  wrap(async (req, res) => ok(res, await createReview(req.params.slug, req.body ?? {}), 201)),
);

// ---------- Admin ----------

router.post(
  '/',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await createProgram(req.body ?? {}), 201)),
);

router.patch(
  '/:id',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await updateProgram(req.params.id, req.body ?? {}))),
);

router.delete(
  '/:id',
  requireRole('ADMIN'),
  wrap(async (req, res) => {
    await deleteProgram(req.params.id);
    ok(res, { deleted: true });
  }),
);

// Materi program
router.post(
  '/:id/materials',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await createMaterial(req.params.id, req.body ?? {}), 201)),
);

router.patch(
  '/materials/:materialId',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await updateMaterial(req.params.materialId, req.body ?? {}))),
);

router.delete(
  '/materials/:materialId',
  requireRole('ADMIN'),
  wrap(async (req, res) => {
    await deleteMaterial(req.params.materialId);
    ok(res, { deleted: true });
  }),
);

// Bentuk bersarang: /programs/:id/materials/:materialId
router.patch(
  '/:id/materials/:materialId',
  requireRole('ADMIN'),
  wrap(async (req, res) =>
    ok(res, await updateMaterial(req.params.materialId, req.body ?? {})),
  ),
);

router.delete(
  '/:id/materials/:materialId',
  requireRole('ADMIN'),
  wrap(async (req, res) => {
    await deleteMaterial(req.params.materialId);
    ok(res, { deleted: true });
  }),
);

export default router;
