import { getPrisma } from '../config/db.js';
import { hashPassword } from '../utils/crypto.js';
import { badRequest, notFound } from '../utils/http.js';

export const ROLES = ['ADMIN', 'AUDITOR'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function listUsers() {
  const prisma = await getPrisma();
  return prisma.internalUser.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
      _count: { select: { findings: true } },
    },
    orderBy: { createdAt: 'asc' },
  });
}

function normalize(input, { partial = false } = {}) {
  const data = {};
  if (!partial || input.name !== undefined) {
    const name = String(input.name ?? '').trim();
    if (!name) throw badRequest('Nama wajib diisi');
    data.name = name;
  }
  if (!partial || input.email !== undefined) {
    const email = String(input.email ?? '').trim().toLowerCase();
    if (!EMAIL_RE.test(email)) throw badRequest('Format email tidak valid');
    data.email = email;
  }
  if (!partial || input.role !== undefined) {
    const role = String(input.role ?? '').toUpperCase();
    if (!ROLES.includes(role)) throw badRequest('Role harus ADMIN atau AUDITOR');
    data.role = role;
  }
  if (!partial || input.isActive !== undefined) {
    data.isActive =
      input.isActive === undefined
        ? true
        : input.isActive === true || input.isActive === 'on' || input.isActive === 'true';
  }
  if (!partial) {
    const password = String(input.password ?? '');
    if (password.length < 8) throw badRequest('Kata sandi minimal 8 karakter');
    data.passwordHash = hashPassword(password);
  } else if (input.password) {
    const password = String(input.password);
    if (password.length < 8) throw badRequest('Kata sandi minimal 8 karakter');
    data.passwordHash = hashPassword(password);
  }
  return data;
}

export async function createUser(input) {
  const prisma = await getPrisma();
  const data = normalize(input);
  const exists = await prisma.internalUser.findUnique({ where: { email: data.email } });
  if (exists) throw badRequest('Email sudah terdaftar');
  return prisma.internalUser.create({ data });
}

export async function updateUser(id, input) {
  const prisma = await getPrisma();
  const user = await prisma.internalUser.findUnique({ where: { id: Number(id) } });
  if (!user) throw notFound('Akun tidak ditemukan');
  const data = normalize(input, { partial: true });
  if (data.email && data.email !== user.email) {
    const exists = await prisma.internalUser.findUnique({ where: { email: data.email } });
    if (exists) throw badRequest('Email sudah terdaftar');
  }
  return prisma.internalUser.update({ where: { id: Number(id) }, data });
}

export async function setUserActive(id, isActive) {
  const prisma = await getPrisma();
  const user = await prisma.internalUser.update({
    where: { id: Number(id) },
    data: { isActive: Boolean(isActive) },
  });
  if (!isActive) {
    await prisma.authSession.deleteMany({ where: { userId: user.id } });
  }
  return user;
}
