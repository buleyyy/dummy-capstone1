import { getPrisma } from '../config/db.js';
import env from '../config/env.js';
import { randomToken, verifyPassword } from '../utils/crypto.js';
import { unauthenticated } from '../utils/http.js';

// ---------- Sesi server-side + cookie httpOnly (KF-19, KNF-02) ----------

export async function authenticate(email, password) {
  const prisma = await getPrisma();
  const user = await prisma.internalUser.findUnique({
    where: { email: String(email ?? '').trim().toLowerCase() },
  });
  if (!user || !verifyPassword(password, user.passwordHash)) {
    throw unauthenticated('Email atau kata sandi salah');
  }
  if (!user.isActive) throw unauthenticated('Akun tidak aktif');
  return user;
}

export async function createSession(userId) {
  const prisma = await getPrisma();
  const token = randomToken(32);
  const expiresAt = new Date(Date.now() + env.sessionTtlHours * 60 * 60 * 1000);
  await prisma.authSession.create({ data: { id: token, userId, expiresAt } });
  return { token, expiresAt };
}

export async function resolveSession(token) {
  if (!token) return null;
  const prisma = await getPrisma();
  const session = await prisma.authSession.findUnique({
    where: { id: token },
    include: { user: true },
  });
  if (!session) return null;
  if (session.expiresAt < new Date() || !session.user.isActive) {
    await prisma.authSession.delete({ where: { id: token } }).catch(() => {});
    return null;
  }
  return session;
}

export async function destroySession(token) {
  if (!token) return;
  const prisma = await getPrisma();
  await prisma.authSession.deleteMany({ where: { id: token } });
}

export async function pruneSessions() {
  const prisma = await getPrisma();
  await prisma.authSession.deleteMany({ where: { expiresAt: { lt: new Date() } } });
}
