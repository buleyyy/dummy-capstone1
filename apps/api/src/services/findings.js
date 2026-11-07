import { getPrisma } from '../config/db.js';
import { badRequest, notFound } from '../utils/http.js';

export const FINDING_CATEGORIES = ['MAJOR', 'MINOR', 'OBSERVASI'];
export const FINDING_STATUSES = ['OPEN', 'CLOSED'];
export const FINDING_SOURCES = ['Internal', 'Pemantauan', 'Keluhan', 'Lainnya'];

function normalize(input, { partial = false } = {}) {
  const data = {};
  const has = (key) =>
    Object.prototype.hasOwnProperty.call(input, key) && input[key] !== undefined;

  if (!partial || has('clause')) {
    const clause = String(input.clause ?? '').trim();
    if (!clause) throw badRequest('Referensi klausul wajib diisi');
    data.clause = clause;
  }

  if (!partial || has('description')) {
    const description = String(input.description ?? '').trim();
    if (!description) throw badRequest('Uraian temuan wajib diisi');
    data.description = description;
  }

  if (!partial || has('category')) {
    const category = String(input.category ?? '').toUpperCase();
    if (!FINDING_CATEGORIES.includes(category)) {
      throw badRequest('Kategori temuan harus Major, Minor, atau Observasi');
    }
    data.category = category;
  }

  if (has('status')) {
    const status = String(input.status).toUpperCase();
    if (!FINDING_STATUSES.includes(status)) throw badRequest('Status temuan tidak dikenal');
    data.status = status;
  } else if (!partial) {
    data.status = 'OPEN';
  }

  if (has('source')) {
    data.source = FINDING_SOURCES.includes(String(input.source)) ? String(input.source) : 'Internal';
  } else if (!partial) {
    data.source = 'Internal';
  }

  for (const key of [
    'rootCause',
    'correction',
    'correctiveAction',
    'verificationResult',
    'evidenceUrl',
  ]) {
    if (!partial || has(key)) {
      data[key] = String(input[key] ?? '').trim() || null;
    }
  }

  if (!partial || has('targetDate')) {
    if (!input.targetDate) {
      data.targetDate = null;
    } else {
      const parsed = new Date(input.targetDate);
      if (Number.isNaN(parsed.getTime())) throw badRequest('Tanggal target koreksi tidak valid');
      data.targetDate = parsed;
    }
  }

  return data;
}

function buildWhere({ q, category, status, source, from, to } = {}) {
  const where = {};
  if (category && FINDING_CATEGORIES.includes(String(category).toUpperCase())) {
    where.category = String(category).toUpperCase();
  }
  if (status && FINDING_STATUSES.includes(String(status).toUpperCase())) {
    where.status = String(status).toUpperCase();
  }
  if (source && FINDING_SOURCES.includes(String(source))) where.source = String(source);
  if (q) {
    where.OR = [
      { clause: { contains: String(q) } },
      { description: { contains: String(q) } },
      { code: { contains: String(q) } },
    ];
  }
  if (from || to) {
    where.reportedAt = {};
    if (from) where.reportedAt.gte = new Date(`${from}T00:00:00`);
    if (to) where.reportedAt.lte = new Date(`${to}T23:59:59`);
  }
  return where;
}

export async function listFindings(filters = {}) {
  const prisma = await getPrisma();
  return prisma.finding.findMany({
    where: buildWhere(filters),
    include: { auditor: { select: { id: true, name: true, role: true } } },
    orderBy: { reportedAt: 'desc' },
  });
}

export async function getFinding(id) {
  const prisma = await getPrisma();
  const finding = await prisma.finding.findUnique({
    where: { id: Number(id) },
    include: { auditor: { select: { id: true, name: true, role: true } } },
  });
  if (!finding) throw notFound('Temuan tidak ditemukan');
  return finding;
}

export async function findingStats(filters = {}) {
  const prisma = await getPrisma();
  const where = buildWhere(filters);
  const [total, major, minor, observasi, open, closed, latest] = await Promise.all([
    prisma.finding.count({ where }),
    prisma.finding.count({ where: { ...where, category: 'MAJOR' } }),
    prisma.finding.count({ where: { ...where, category: 'MINOR' } }),
    prisma.finding.count({ where: { ...where, category: 'OBSERVASI' } }),
    prisma.finding.count({ where: { ...where, status: 'OPEN' } }),
    prisma.finding.count({ where: { ...where, status: 'CLOSED' } }),
    prisma.finding.findMany({
      where,
      include: { auditor: { select: { name: true } } },
      orderBy: { reportedAt: 'desc' },
      take: 5,
    }),
  ]);
  return {
    total,
    byCategory: { MAJOR: major, MINOR: minor, OBSERVASI: observasi },
    byStatus: { OPEN: open, CLOSED: closed },
    progress: total > 0 ? Math.round((closed / total) * 100) : 0,
    latest,
  };
}

async function nextCode() {
  const prisma = await getPrisma();
  const now = new Date();
  const prefix = `FND-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}`;
  const count = await prisma.finding.count({ where: { code: { startsWith: prefix } } });
  return `${prefix}-${String(count + 1).padStart(3, '0')}`;
}

export async function createFinding(auditor, input) {
  const prisma = await getPrisma();
  const requestId = String(input.requestId ?? '').trim() || null;
  if (requestId) {
    const existing = await prisma.finding.findUnique({ where: { requestId } });
    if (existing) return existing;
  }
  const data = normalize(input);
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      return await prisma.finding.create({
        data: {
          ...data,
          code: await nextCode(),
          auditorId: auditor.id,
          requestId,
        },
      });
    } catch (err) {
      if (err?.code !== 'P2002') throw err;
    }
  }
  throw badRequest('Gagal membuat nomor temuan, coba lagi');
}

export async function updateFinding(id, input) {
  const prisma = await getPrisma();
  const current = await prisma.finding.findUnique({ where: { id: Number(id) } });
  if (!current) throw notFound('Temuan tidak ditemukan');
  const data = normalize(input, { partial: true });
  if (data.status === 'CLOSED' && current.status !== 'CLOSED') data.verifiedAt = new Date();
  if (data.status === 'OPEN') data.verifiedAt = null;
  return prisma.finding.update({ where: { id: Number(id) }, data });
}
