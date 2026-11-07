// Entry serverless Vercel. Semua request diarahkan ke sini oleh rewrites
// di vercel.json, lalu diteruskan ke aplikasi Express (EJS + /api/v1).
// Server lokal tetap memakai apps/api/src/server.js (app.listen).
import app from '../apps/api/src/app.js';

export default app;
