import crypto from 'node:crypto';

// Hash kata sandi: scrypt + salt acak (tanpa dependency tambahan).
export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(String(password), salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password, stored) {
  const [salt, hash] = String(stored ?? '').split(':');
  if (!salt || !hash) return false;
  const expected = Buffer.from(hash, 'hex');
  const actual = crypto.scryptSync(String(password), salt, 64);
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

export function randomToken(bytes = 32) {
  return crypto.randomBytes(bytes).toString('hex');
}
