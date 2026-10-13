import { ApiError } from '../utils/http.js';

// 404 untuk route yang tidak dikenal.
export function notFoundHandler(_req, res) {
  res.status(404).json({
    success: false,
    error: { code: 'NOT_FOUND', message: 'Endpoint tidak ditemukan' },
  });
}

// Penangan error terpusat: ApiError → sesuai status; error lain → 500.
export function errorHandler(err, _req, res, _next) { // eslint-disable-line no-unused-vars
  if (err instanceof ApiError) {
    return res.status(err.status).json({
      success: false,
      error: { code: err.code, message: err.message, details: err.details },
    });
  }
  console.error(err);
  res.status(500).json({
    success: false,
    error: { code: 'INTERNAL_ERROR', message: 'Terjadi kesalahan pada server' },
  });
}
