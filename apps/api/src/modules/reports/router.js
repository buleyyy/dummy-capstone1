import express from 'express';
import { requireRole } from '../../middleware/auth.js';
import { evaluationRecap, recapToCsv, auditReport } from '../../services/reports.js';
import { ok, wrap } from '../../utils/http.js';

const router = express.Router();

// GET /api/v1/reports/evaluations — KF-16, UC-11 (hanya Admin: KF-17/KNF-07)
router.get(
  '/evaluations',
  requireRole('ADMIN'),
  wrap(async (req, res) =>
    ok(res, await evaluationRecap({
      programId: req.query.programId,
      type: req.query.type,
      from: req.query.from,
      to: req.query.to,
    })),
  ),
);

// GET /api/v1/reports/evaluations.csv
router.get(
  '/evaluations.csv',
  requireRole('ADMIN'),
  wrap(async (req, res) => {
    const rows = await evaluationRecap({
      programId: req.query.programId,
      type: req.query.type,
      from: req.query.from,
      to: req.query.to,
    });
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="rekap-nilai-sopinsya.csv"');
    res.send(recapToCsv(rows));
  }),
);

// GET /api/v1/reports/audit — KF-27, UC-17
router.get(
  '/audit',
  requireRole('ADMIN', 'AUDITOR'),
  wrap(async (req, res) => ok(res, await auditReport(req.query))),
);

export default router;
