import { unauthenticated } from '../utils/http.js';

/**
 * Middleware autentikasi.
 *
 * Sprint 1 (Fase 2) akan menambahkan mekanisme sesi (cookie httpOnly) dan
 * mem-populasi req.user. Rancangan sesi mengikuti keputusan E-5 (alur akun
 * peserta) yang masih terbuka — jangan mengisi mekanisme ini sebelum
 * keputusan itu diambil.
 */

// Pelengkap: baca req.user yang sudah diisi sesi middleware (Fase 2).
export function attachUser(req, _res, next) {
  // Belum ada sumber sesi. Fase 2 akan membaca sesi di sini.
  req.user = req.user ?? null;
  next();
}

// Tolak permintaan yang belum login.
export function requireAuth(req, _res, next) {
  if (!req.user) return next(unauthenticated());
  next();
}
