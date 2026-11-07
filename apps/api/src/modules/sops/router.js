import express from 'express';
import { requireRole } from '../../middleware/auth.js';
import {
  createSop,
  deleteSop,
  listSops,
  toggleProgramSop,
  updateSop,
} from '../../services/content.js';
import { ok, wrap } from '../../utils/http.js';

const router = express.Router();

// GET /api/v1/sops — pustaka SOP publik (yang dipublikasikan)
router.get(
  '/',
  wrap(async (_req, res) => ok(res, await listSops())),
);

// GET /api/v1/sops/admin — seluruh SOP termasuk draft
router.get(
  '/admin',
  requireRole('ADMIN'),
  wrap(async (_req, res) => ok(res, await listSops({ includeUnpublished: true }))),
);

router.post(
  '/',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await createSop(req.body ?? {}), 201)),
);

router.patch(
  '/:id',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await updateSop(req.params.id, req.body ?? {}))),
);

router.delete(
  '/:id',
  requireRole('ADMIN'),
  wrap(async (req, res) => {
    await deleteSop(req.params.id);
    ok(res, { deleted: true });
  }),
);

// POST /api/v1/sops/program/:programId/:sopId  { attached: boolean }
router.post(
  '/program/:programId/:sopId',
  requireRole('ADMIN'),
  wrap(async (req, res) => {
    await toggleProgramSop(
      req.params.programId,
      req.params.sopId,
      Boolean(req.body?.attached),
    );
    ok(res, { updated: true });
  }),
);

export default router;
