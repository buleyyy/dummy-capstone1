import { forbidden } from '../utils/http.js';

/**
 * Middleware RBAC berbasis peran (admin | trainer | peserta, sesuai RD1 F-04).
 * Otorisasi bersifat endpoin-per-endpoin: daftar peran yang diizinkan
 * ditentukan saat route dipasang, bukan di sini.
 */

export const ROLES = ['admin', 'trainer', 'peserta'];

export function requireRole(...allowed) {
  for (const role of allowed) {
    if (!ROLES.includes(role)) {
      throw new Error(`requireRole: peran tidak dikenal "${role}"`);
    }
  }
  return (req, _res, next) => {
    if (!req.user) return next(forbidden('Belum login'));
    if (!allowed.includes(req.user.role)) {
      return next(forbidden('Peran tidak berwenang'));
    }
    next();
  };
}
