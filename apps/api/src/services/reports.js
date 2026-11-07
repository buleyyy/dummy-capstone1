import { getPrisma } from '../config/db.js';
import { getSettings } from './settings.js';
import { listFindings, findingStats } from './findings.js';

// ---------- Rekap hasil evaluasi peserta (KF-16, UC-11) ----------

export async function evaluationRecap({ programId, type, from, to } = {}) {
  const prisma = await getPrisma();
  const where = { submittedAt: { not: null } };
  if (programId) where.evaluation = { programId: Number(programId) };
  if (type) {
    where.evaluation = { ...(where.evaluation ?? {}), type: String(type).toUpperCase() };
  }
  if (from || to) {
    where.submittedAt = { not: null };
    if (from) where.submittedAt.gte = new Date(`${from}T00:00:00`);
    if (to) where.submittedAt.lte = new Date(`${to}T23:59:59`);
  }
  const attempts = await prisma.attempt.findMany({
    where,
    include: {
      evaluation: { include: { program: { select: { id: true, title: true } } } },
      answers: true,
    },
    orderBy: { submittedAt: 'desc' },
  });
  return attempts.map((attempt) => ({
    ...attempt,
    percent:
      attempt.maxScore && attempt.maxScore > 0
        ? Math.round(((attempt.score ?? 0) / attempt.maxScore) * 100)
        : 0,
  }));
}

export function recapToCsv(rows) {
  const header = [
    'Nama',
    'Email',
    'Telepon',
    'Jabatan',
    'Program',
    'Jenis Tes',
    'Nilai',
    'Nilai Maksimal',
    'Persentase',
    'Waktu Kirim',
  ];
  const escape = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const lines = [header.map(escape).join(',')];
  for (const row of rows) {
    lines.push(
      [
        row.takerName,
        row.takerEmail,
        row.takerPhone,
        row.takerTitle,
        row.evaluation?.program?.title,
        row.evaluation?.type,
        row.score,
        row.maxScore,
        row.percent,
        row.submittedAt ? new Date(row.submittedAt).toISOString() : '',
      ]
        .map(escape)
        .join(','),
    );
  }
  return `\uFEFF${lines.join('\r\n')}`;
}

// ---------- Dashboard admin ----------

export async function adminDashboard() {
  const prisma = await getPrisma();
  const [programs, published, attempts, reviews, questions, latestAttempts, topPrograms] =
    await Promise.all([
      prisma.program.count(),
      prisma.program.count({ where: { isPublished: true } }),
      prisma.attempt.count({ where: { submittedAt: { not: null } } }),
      prisma.programReview.aggregate({ _avg: { rating: true }, _count: true }),
      prisma.question.count(),
      prisma.attempt.findMany({
        where: { submittedAt: { not: null } },
        include: { evaluation: { include: { program: { select: { title: true } } } } },
        orderBy: { submittedAt: 'desc' },
        take: 6,
      }),
      prisma.program.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          isPublished: true,
          _count: { select: { materials: true, evaluations: true, reviews: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
    ]);
  return {
    programs,
    published,
    attempts,
    questions,
    reviews: reviews._count,
    averageRating: Number(reviews._avg.rating ?? 0),
    latestAttempts,
    topPrograms,
  };
}

// ---------- Laporan audit (KF-27, KF-28, UC-17) ----------

export async function auditReport(filters = {}) {
  const [settings, findings, stats] = await Promise.all([
    getSettings(),
    listFindings(filters),
    findingStats(filters),
  ]);
  return {
    settings,
    findings,
    stats,
    period: {
      from: filters.from || null,
      to: filters.to || null,
    },
    generatedAt: new Date(),
  };
}
