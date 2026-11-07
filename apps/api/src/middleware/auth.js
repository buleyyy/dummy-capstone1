import env from '../config/env.js';
import { resolveSession } from '../services/auth.js';
import { forbidden, unauthenticated } from '../utils/http.js';

// ---------- Cookie ----------

export function parseCookies(header = '') {
  const out = {};
  for (const part of String(header).split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    if (!key) continue;
    out[key] = decodeURIComponent(part.slice(idx + 1).trim());
  }
  return out;
}

export function getSessionToken(req) {
  return parseCookies(req.headers.cookie)[env.sessionCookie] ?? null;
}

export function setSessionCookie(res, token, expiresAt) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.append(
    'Set-Cookie',
    `${env.sessionCookie}=${token}; Path=/; HttpOnly; SameSite=Lax; Expires=${expiresAt.toUTCString()}${secure}`,
  );
}

export function clearSessionCookie(res) {
  res.append(
    'Set-Cookie',
    `${env.sessionCookie}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`,
  );
}

// ---------- Identitas permintaan ----------

export async function attachUser(req, _res, next) {
  try {
    const token = getSessionToken(req);
    const session = await resolveSession(token);
    req.sessionToken = token;
    req.user = session?.user ?? null;
    next();
  } catch (err) {
    next(err);
  }
}

export function requireAuth(req, _res, next) {
  if (!req.user) return next(unauthenticated());
  next();
}

export const requireRole =
  (...allowed) =>
  (req, _res, next) => {
    if (!req.user) return next(unauthenticated());
    if (!allowed.includes(req.user.role)) return next(forbidden('Peran tidak berwenang'));
    next();
  };

// Tolak permintaan mutasi lintas-origin (pertahanan CSRF tambahan).
export function sameOriginGuard(req, _res, next) {
  const method = req.method.toUpperCase();
  if (!['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) return next();
  const origin = req.get('origin');
  if (!origin) return next();
  const allowed = new Set([
    env.webOrigin,
    `${req.protocol}://${req.get('host')}`,
    `http://${req.get('host')}`,
    `https://${req.get('host')}`,
  ]);
  if (!allowed.has(origin)) return next(forbidden('Origin tidak diizinkan'));
  next();
}

// Pengalihan halaman untuk pengguna yang belum/tidak berhak.
export function pageRequireLogin(req, res, next) {
  if (req.user) return next();
  const next_ = encodeURIComponent(req.originalUrl);
  res.redirect(`/login?next=${next_}`);
}

export function pageRequireRole(...allowed) {
  return (req, res, next) => {
    if (!req.user) return res.redirect(`/login?next=${encodeURIComponent(req.originalUrl)}`);
    if (!allowed.includes(req.user.role)) {
      return res.status(403).render('pages/forbidden', {
        title: 'Akses Ditolak',
        user: req.user,
      });
    }
    next();
  };
}
