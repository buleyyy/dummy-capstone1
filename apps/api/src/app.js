import express from 'express';
import cors from 'cors';
import env from './config/env.js';
import { pingDb } from './config/db.js';
import { ok } from './utils/http.js';
import { attachUser } from './middleware/auth.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

import authRouter from './modules/auth/router.js';
import usersRouter from './modules/users/router.js';
import trainingsRouter from './modules/trainings/router.js';
import schedulesRouter from './modules/schedules/router.js';
import registrationsRouter from './modules/registrations/router.js';
import materialsRouter from './modules/materials/router.js';
import testsRouter from './modules/tests/router.js';
import gradingRouter from './modules/grading/router.js';
import reportsRouter from './modules/reports/router.js';
import contactRouter from './modules/contact/router.js';

const app = express();

app.use(cors({ origin: env.webOrigin, credentials: true }));
app.use(express.json());
app.use(attachUser);

// Health check — tidak membutuhkan MySQL agar tetap menjawab saat DB mati.
app.get('/api/health', async (_req, res, next) => {
  try {
    let db = 'ok';
    try {
      await pingDb();
    } catch {
      db = 'unavailable';
    }
    ok(res, { status: 'ok', uptime: process.uptime(), db });
  } catch (err) {
    next(err);
  }
});

// Router modul (M1–M10) di bawah /api/v1.
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/trainings', trainingsRouter);
app.use('/api/v1/schedules', schedulesRouter);
app.use('/api/v1/registrations', registrationsRouter);
app.use('/api/v1/materials', materialsRouter);
app.use('/api/v1/tests', testsRouter);
app.use('/api/v1/grading', gradingRouter);
app.use('/api/v1/reports', reportsRouter);
app.use('/api/v1/contact', contactRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
