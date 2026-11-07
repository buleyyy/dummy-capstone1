import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import env from './config/env.js';
import { attachUser, sameOriginGuard } from './middleware/auth.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
import { formatDate, formatShortDate, formatDateTimeInput, MATERIAL_LABELS, EVALUATION_LABELS, CATEGORY_LABELS, FINDING_STATUS_LABELS, CATEGORY_BADGE, STATUS_BADGE } from './utils/format.js';

import healthRouter from './health/router.js';
import authRouter from './modules/auth/router.js';
import usersRouter from './modules/users/router.js';
import programsRouter from './modules/programs/router.js';
import sopsRouter from './modules/sops/router.js';
import evaluationsRouter from './modules/evaluations/router.js';
import auditRouter from './modules/audit/router.js';
import reportsRouter from './modules/reports/router.js';
import settingsRouter from './modules/settings/router.js';

import publicPages from './routes/public.js';
import adminPages from './routes/admin.js';
import auditPages from './routes/audit.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Di Vercel fungsi serverless dijalankan dari root repo (process.cwd()),
// sedangkan di lokal folder berada di samping src/. Pilih yang ada.
function resolveAssetDir(name) {
  const candidates = [
    path.resolve(__dirname, '..', name),
    path.resolve(process.cwd(), 'apps/api', name),
  ];
  return candidates.find((dir) => fs.existsSync(dir)) ?? candidates[0];
}

// View EJS (halaman dirender server) + aset hasil build Vite/Tailwind.
app.set('view engine', 'ejs');
app.set('views', resolveAssetDir('views'));
app.use(express.static(resolveAssetDir('public')));

app.use(cors({ origin: env.webOrigin, credentials: true }));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));
app.use(sameOriginGuard);

// Helper tampilan tersedia di semua template.
app.locals.helpers = {
  formatDate,
  formatShortDate,
  formatDateTimeInput,
  MATERIAL_LABELS,
  EVALUATION_LABELS,
  CATEGORY_LABELS,
  FINDING_STATUS_LABELS,
  CATEGORY_BADGE,
  STATUS_BADGE,
};

// Halaman (EJS). attachUser dipasang lebih dulu agar navigasi tahu peran.
app.use(attachUser);
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use('/', publicPages);
app.use('/admin', adminPages);
app.use('/audit', auditPages);

// API JSON /api/v1.
app.use('/api/v1/health', healthRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/programs', programsRouter);
app.use('/api/v1/sops', sopsRouter);
app.use('/api/v1/evaluations', evaluationsRouter);
app.use('/api/v1/findings', auditRouter);
app.use('/api/v1/reports', reportsRouter);
app.use('/api/v1/settings', settingsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
