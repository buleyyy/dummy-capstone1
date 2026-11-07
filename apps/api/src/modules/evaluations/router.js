import express from 'express';
import { requireRole } from '../../middleware/auth.js';
import {
  createQuestion,
  deleteQuestion,
  ensureEvaluation,
  getEvaluation,
  getPublicEvaluation,
  importQuestions,
  listEvaluations,
  submitAttempt,
  updateEvaluation,
  updateQuestion,
} from '../../services/evaluations.js';
import { ok, wrap } from '../../utils/http.js';

const router = express.Router();

// ---------- Peserta (publik) ----------

// GET /api/v1/evaluations/:slug/:type — soal acak tanpa kunci jawaban
router.get(
  '/:slug/:type',
  wrap(async (req, res) =>
    ok(res, await getPublicEvaluation(req.params.slug, req.params.type)),
  ),
);

// POST /api/v1/evaluations/:id/attempts — kirim identitas + jawaban (KF-09..KF-15)
router.post(
  '/:id/attempts',
  wrap(async (req, res) => ok(res, await submitAttempt(req.params.id, req.body ?? {}), 201)),
);

// ---------- Admin ----------

// GET /api/v1/evaluations/admin/program/:programId
router.get(
  '/admin/program/:programId',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await listEvaluations(req.params.programId))),
);

// POST /api/v1/evaluations/admin/program/:programId/:type — buat bila belum ada
router.post(
  '/admin/program/:programId/:type',
  requireRole('ADMIN'),
  wrap(async (req, res) =>
    ok(res, await ensureEvaluation(req.params.programId, req.params.type), 201),
  ),
);

// GET /api/v1/evaluations/admin/:id
router.get(
  '/admin/:id',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await getEvaluation(req.params.id))),
);

// PATCH /api/v1/evaluations/admin/:id
router.patch(
  '/admin/:id',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await updateEvaluation(req.params.id, req.body ?? {}))),
);

// POST /api/v1/evaluations/admin/:id/questions
router.post(
  '/admin/:id/questions',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await createQuestion(req.params.id, req.body ?? {}), 201)),
);

// PATCH /api/v1/evaluations/admin/questions/:questionId
router.patch(
  '/admin/questions/:questionId',
  requireRole('ADMIN'),
  wrap(async (req, res) =>
    ok(res, await updateQuestion(req.params.questionId, req.body ?? {})),
  ),
);

// DELETE /api/v1/evaluations/admin/questions/:questionId
router.delete(
  '/admin/questions/:questionId',
  requireRole('ADMIN'),
  wrap(async (req, res) => {
    await deleteQuestion(req.params.questionId);
    ok(res, { deleted: true });
  }),
);

// POST /api/v1/evaluations/admin/:id/import  { text, replace }
router.post(
  '/admin/:id/import',
  requireRole('ADMIN'),
  wrap(async (req, res) => {
    const result = await importQuestions(req.params.id, req.body?.text, {
      replace: Boolean(req.body?.replace),
    });
    ok(res, result, 201);
  }),
);

export default router;
