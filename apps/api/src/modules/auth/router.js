import express from 'express';
import { authenticate, createSession, destroySession } from '../../services/auth.js';
import {
  clearSessionCookie,
  requireAuth,
  setSessionCookie,
} from '../../middleware/auth.js';
import { badRequest, ok, wrap } from '../../utils/http.js';

const router = express.Router();

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, role: user.role };
}

// POST /api/v1/auth/login — KF-19, UC-07, UC-13
router.post(
  '/login',
  wrap(async (req, res) => {
    const { email, password } = req.body ?? {};
    if (!email || !password) throw badRequest('Email dan kata sandi wajib diisi');
    const user = await authenticate(email, password);
    const session = await createSession(user.id);
    setSessionCookie(res, session.token, session.expiresAt);
    ok(res, { user: publicUser(user), expiresAt: session.expiresAt });
  }),
);

// POST /api/v1/auth/logout
router.post(
  '/logout',
  wrap(async (req, res) => {
    await destroySession(req.sessionToken);
    clearSessionCookie(res);
    ok(res, { loggedOut: true });
  }),
);

// GET /api/v1/auth/me — 401 bila belum login (requireAuth)
router.get('/me', requireAuth, (req, res) => ok(res, { user: publicUser(req.user) }));

export default router;
