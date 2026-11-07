import express from 'express';
import { requireRole } from '../../middleware/auth.js';
import {
  createFinding,
  findingStats,
  getFinding,
  listFindings,
  updateFinding,
} from '../../services/findings.js';
import { ok, wrap } from '../../utils/http.js';

const router = express.Router();

router.use(requireRole('ADMIN', 'AUDITOR'));

// GET /api/v1/findings?q=&category=&status=&source=&from=&to=
router.get(
  '/',
  wrap(async (req, res) => ok(res, await listFindings(req.query))),
);

// GET /api/v1/findings/stats
router.get(
  '/stats',
  wrap(async (req, res) => ok(res, await findingStats(req.query))),
);

// GET /api/v1/findings/:id
router.get(
  '/:id',
  wrap(async (req, res) => ok(res, await getFinding(req.params.id))),
);

// POST /api/v1/findings — KF-21..KF-24, UC-16
router.post(
  '/',
  wrap(async (req, res) => ok(res, await createFinding(req.user, req.body ?? {}), 201)),
);

// PATCH /api/v1/findings/:id — KF-25
router.patch(
  '/:id',
  wrap(async (req, res) => ok(res, await updateFinding(req.params.id, req.body ?? {}))),
);

export default router;
