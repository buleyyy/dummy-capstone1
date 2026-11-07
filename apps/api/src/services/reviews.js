import { getPrisma } from '../config/db.js';
import { badRequest, notFound } from '../utils/http.js';

export async function listReviews(programId, { limit = 30 } = {}) {
  const prisma = await getPrisma();
  return prisma.programReview.findMany({
    where: { programId: Number(programId) },
    orderBy: { createdAt: 'desc' },
    take: limit,
  });
}

export async function reviewSummary(programId) {
  const prisma = await getPrisma();
  const where = { programId: Number(programId) };
  const [aggregate, grouped] = await Promise.all([
    prisma.programReview.aggregate({ where, _avg: { rating: true }, _count: true }),
    prisma.programReview.groupBy({ by: ['rating'], where, _count: { rating: true } }),
  ]);
  const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const row of grouped) distribution[row.rating] = row._count.rating;
  return {
    average: Number(aggregate._avg.rating ?? 0),
    count: aggregate._count,
    distribution,
    // Identitas pemberi ulasan tidak pernah ditampilkan (KF-31, anonim).
    reviews: await listReviews(programId),
  };
}

export async function createReview(slug, input) {
  const prisma = await getPrisma();
  const program = await prisma.program.findFirst({
    where: { slug, isPublished: true },
    select: { id: true },
  });
  if (!program) throw notFound('Program tidak ditemukan');
  const rating = Number(input.rating);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw badRequest('Rating harus dipilih antara 1 sampai 5 bintang');
  }
  const comment = String(input.comment ?? '').trim().slice(0, 1000);
  return prisma.programReview.create({
    data: {
      programId: program.id,
      rating,
      comment: comment || null,
      reviewerName: 'Anonim',
    },
  });
}

export async function listAllReviews({ programId } = {}) {
  const prisma = await getPrisma();
  return prisma.programReview.findMany({
    where: programId ? { programId: Number(programId) } : {},
    include: { program: { select: { title: true, slug: true } } },
    orderBy: { createdAt: 'desc' },
  });
}
