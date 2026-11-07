import { getPrisma } from '../config/db.js';
import { badRequest, notFound } from '../utils/http.js';

// ---------- Materi program (KF-07, KF-08) ----------

export const MATERIAL_TYPES = [
  'SILABUS',
  'MATERI',
  'STUDI_KASUS',
  'VIDEO',
  'QUIZ',
  'SOP',
  'DOKUMEN',
];

function normalizeMaterial(input) {
  const type = String(input.type ?? '').toUpperCase();
  if (!MATERIAL_TYPES.includes(type)) throw badRequest('Jenis materi tidak dikenal');
  const title = String(input.title ?? '').trim();
  if (!title) throw badRequest('Judul materi wajib diisi');
  const url = String(input.url ?? '').trim() || null;
  if (url && !/^https?:\/\//i.test(url)) {
    throw badRequest('Tautan materi harus diawali http:// atau https://');
  }
  return {
    type,
    title,
    description: String(input.description ?? '').trim() || null,
    url,
    filePath: String(input.filePath ?? '').trim() || null,
    sortOrder: Number(input.sortOrder ?? 0) || 0,
    isPublished:
      input.isPublished === undefined
        ? true
        : input.isPublished === true || input.isPublished === 'on' || input.isPublished === 'true',
  };
}

export async function createMaterial(programId, input) {
  const prisma = await getPrisma();
  return prisma.material.create({
    data: { ...normalizeMaterial(input), programId: Number(programId) },
  });
}

export async function updateMaterial(id, input) {
  const prisma = await getPrisma();
  return prisma.material.update({
    where: { id: Number(id) },
    data: normalizeMaterial(input),
  });
}

export async function deleteMaterial(id) {
  const prisma = await getPrisma();
  await prisma.material.delete({ where: { id: Number(id) } });
}

export function groupMaterials(materials) {
  const groups = new Map();
  for (const material of materials) {
    if (!groups.has(material.type)) groups.set(material.type, []);
    groups.get(material.type).push(material);
  }
  return groups;
}

// ---------- Pustaka SOP (KF-07, KF-08) ----------

function normalizeSop(input) {
  const code = String(input.code ?? '').trim();
  const title = String(input.title ?? '').trim();
  const url = String(input.url ?? '').trim();
  if (!code) throw badRequest('Kode SOP wajib diisi');
  if (!title) throw badRequest('Judul SOP wajib diisi');
  if (!/^https?:\/\//i.test(url)) throw badRequest('Tautan SOP harus diawali http:// atau https://');
  return {
    code,
    title,
    version: String(input.version ?? '1.0').trim() || '1.0',
    description: String(input.description ?? '').trim() || null,
    url,
    isPublished:
      input.isPublished === undefined
        ? false
        : input.isPublished === true || input.isPublished === 'on' || input.isPublished === 'true',
  };
}

export async function listSops({ includeUnpublished = false } = {}) {
  const prisma = await getPrisma();
  return prisma.sopDocument.findMany({
    where: includeUnpublished ? {} : { isPublished: true },
    orderBy: { code: 'asc' },
  });
}

export async function createSop(input) {
  const prisma = await getPrisma();
  return prisma.sopDocument.create({ data: normalizeSop(input) });
}

export async function updateSop(id, input) {
  const prisma = await getPrisma();
  const sop = await prisma.sopDocument.findUnique({ where: { id: Number(id) } });
  if (!sop) throw notFound('SOP tidak ditemukan');
  return prisma.sopDocument.update({ where: { id: Number(id) }, data: normalizeSop(input) });
}

export async function deleteSop(id) {
  const prisma = await getPrisma();
  await prisma.sopDocument.delete({ where: { id: Number(id) } });
}

// Hubungkan SOP ke program (dipilih Admin pada detail program).
export async function toggleProgramSop(programId, sopId, attached) {
  const prisma = await getPrisma();
  if (attached) {
    await prisma.programSop.upsert({
      where: { programId_sopId: { programId: Number(programId), sopId: Number(sopId) } },
      create: { programId: Number(programId), sopId: Number(sopId) },
      update: {},
    });
  } else {
    await prisma.programSop.deleteMany({
      where: { programId: Number(programId), sopId: Number(sopId) },
    });
  }
}
