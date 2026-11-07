import { getPrisma } from '../config/db.js';
import { badRequest, notFound } from '../utils/http.js';

export function slugify(text) {
  return String(text ?? '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 150);
}

const PUBLIC_PROGRAM_SELECT = {
  id: true,
  slug: true,
  title: true,
  summary: true,
  coverUrl: true,
  description: true,
  syllabus: true,
  meetingUrl: true,
  trainerName: true,
  category: true,
  _count: { select: { materials: true, evaluations: true, reviews: true } },
};

export async function listCategories() {
  const prisma = await getPrisma();
  return prisma.category.findMany({ orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }] });
}

export async function listPublicPrograms({ q, category } = {}) {
  const prisma = await getPrisma();
  const keyword = String(q ?? '').trim();
  return prisma.program.findMany({
    where: {
      isPublished: true,
      ...(category ? { category: { slug: category } } : {}),
      ...(keyword
        ? {
            OR: [
              { title: { contains: keyword } },
              { summary: { contains: keyword } },
              { description: { contains: keyword } },
            ],
          }
        : {}),
    },
    select: PUBLIC_PROGRAM_SELECT,
    orderBy: { createdAt: 'desc' },
  });
}

export async function listAllPrograms({ q } = {}) {
  const prisma = await getPrisma();
  const keyword = String(q ?? '').trim();
  return prisma.program.findMany({
    where: keyword ? { title: { contains: keyword } } : {},
    include: {
      category: true,
      _count: { select: { materials: true, evaluations: true, reviews: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getPublicProgram(slug) {
  const prisma = await getPrisma();
  const program = await prisma.program.findFirst({
    where: { slug, isPublished: true },
    include: {
      category: true,
      materials: { where: { isPublished: true }, orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }] },
      evaluations: {
        where: { isPublished: true },
        include: { _count: { select: { questions: true } } },
        orderBy: { type: 'asc' },
      },
      programSops: { include: { sop: true } },
      reviews: { orderBy: { createdAt: 'desc' }, take: 30 },
    },
  });
  if (!program) throw notFound('Program tidak ditemukan atau belum dipublikasikan');
  return program;
}

export async function getProgramById(id) {
  const prisma = await getPrisma();
  const program = await prisma.program.findUnique({
    where: { id: Number(id) },
    include: {
      category: true,
      materials: { orderBy: [{ type: 'asc' }, { sortOrder: 'asc' }, { id: 'asc' }] },
      evaluations: {
        include: {
          questions: { orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }] },
          _count: { select: { attempts: true } },
        },
        orderBy: { type: 'asc' },
      },
      programSops: { include: { sop: true } },
      reviews: { orderBy: { createdAt: 'desc' } },
    },
  });
  if (!program) throw notFound('Program tidak ditemukan');
  return program;
}

function normalizeProgramInput(input) {
  const title = String(input.title ?? '').trim();
  if (!title) throw badRequest('Nama program wajib diisi');
  const summary = String(input.summary ?? '').trim().slice(0, 300);
  const slug = slugify(input.slug || title);
  if (!slug) throw badRequest('Slug program tidak valid');
  return {
    title,
    slug,
    summary: summary || null,
    description: String(input.description ?? '').trim() || null,
    syllabus: String(input.syllabus ?? '').trim() || null,
    coverUrl: String(input.coverUrl ?? '').trim() || null,
    meetingUrl: String(input.meetingUrl ?? '').trim() || null,
    trainerName: String(input.trainerName ?? '').trim() || null,
    categoryId:
      input.categoryId === '' || input.categoryId == null ? null : Number(input.categoryId),
    isPublished: input.isPublished === true || input.isPublished === 'on' || input.isPublished === 'true',
  };
}

export async function createProgram(input) {
  const prisma = await getPrisma();
  const data = normalizeProgramInput(input);
  const exists = await prisma.program.findUnique({ where: { slug: data.slug } });
  if (exists) throw badRequest('Slug program sudah dipakai');
  return prisma.program.create({ data });
}

export async function updateProgram(id, input) {
  const prisma = await getPrisma();
  const data = normalizeProgramInput(input);
  const current = await prisma.program.findUnique({ where: { id: Number(id) } });
  if (!current) throw notFound('Program tidak ditemukan');
  if (data.slug !== current.slug) {
    const exists = await prisma.program.findUnique({ where: { slug: data.slug } });
    if (exists && exists.id !== current.id) throw badRequest('Slug program sudah dipakai');
  }
  return prisma.program.update({ where: { id: Number(id) }, data });
}

export async function deleteProgram(id) {
  const prisma = await getPrisma();
  await prisma.program.delete({ where: { id: Number(id) } });
}

export async function publicStats() {
  const prisma = await getPrisma();
  const [programCount, reviewAggregate, materialCount, evaluationCount] = await Promise.all([
    prisma.program.count({ where: { isPublished: true } }),
    prisma.programReview.aggregate({ _avg: { rating: true }, _count: true }),
    prisma.material.count({ where: { isPublished: true } }),
    prisma.evaluation.count({ where: { isPublished: true } }),
  ]);
  return {
    programCount,
    materialCount,
    evaluationCount,
    reviewCount: reviewAggregate._count,
    averageRating: Number(reviewAggregate._avg.rating ?? 0),
  };
}

export async function ensureCategories() {
  const prisma = await getPrisma();
  const count = await prisma.category.count();
  if (count > 0) return;
  const defaults = [
    { name: 'Sistem Manajemen Mutu', slug: 'sistem-manajemen-mutu', sortOrder: 1 },
    { name: 'Sistem Manajemen Lingkungan', slug: 'sistem-manajemen-lingkungan', sortOrder: 2 },
    { name: 'Keselamatan & Kesehatan Kerja', slug: 'k3', sortOrder: 3 },
    { name: 'Anti Penyuapan', slug: 'anti-penyuapan', sortOrder: 4 },
  ];
  for (const item of defaults) {
    await prisma.category.create({ data: item });
  }
}
