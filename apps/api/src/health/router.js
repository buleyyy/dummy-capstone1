import express from 'express';
import { pingDb } from '../config/db.js';
import env from '../config/env.js';
import { ok } from '../utils/http.js';

const router = express.Router();

/**
 * Modul: health
 * Readiness API + status database. Tetap merespons walau database mati.
 */
router.get('/', async (_req, res, next) => {
  try {
    const db = (await pingDb()) ? 'ok' : 'unavailable';
    ok(res, {
      status: 'ok',
      uptime: process.uptime(),
      db,
      driver: env.dbDriver,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
