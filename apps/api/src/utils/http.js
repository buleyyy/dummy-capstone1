/**
 * Format respons standar API Sopinsya.
 * Sukses: { success: true, data }
 * Gagal : { success: false, error: { code, message, details? } }
 */
export function ok(res, data, status = 200) {
  return res.status(status).json({ success: true, data });
}

export class ApiError extends Error {
  constructor(status, code, message, details) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export const notFound = (message = 'Sumber daya tidak ditemukan') =>
  new ApiError(404, 'NOT_FOUND', message);

export const unauthenticated = (message = 'Belum login') =>
  new ApiError(401, 'UNAUTHENTICATED', message);

export const forbidden = (message = 'Akses ditolak') =>
  new ApiError(403, 'FORBIDDEN', message);

export const badRequest = (message = 'Permintaan tidak valid', details) =>
  new ApiError(400, 'BAD_REQUEST', message, details);
