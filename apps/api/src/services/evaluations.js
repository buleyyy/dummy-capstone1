import crypto from 'node:crypto';
import { getPrisma } from '../config/db.js';
import { badRequest, conflict, notFound } from '../utils/http.js';

export const EVALUATION_TYPES = ['PRE_TEST', 'POST_TEST', 'QUIZ'];
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function shuffle(list) {
  const array = [...list];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function parseOptions(value) {
  if (Array.isArray(value)) return value.map((v) => String(v));
  try {
    const parsed = JSON.parse(value ?? '[]');
    return Array.isArray(parsed) ? parsed.map((v) => String(v)) : [];
  } catch {
    return [];
  }
}

export async function listEvaluations(programId) {
  const prisma = await getPrisma();
  return prisma.evaluation.findMany({
    where: { programId: Number(programId) },
    include: {
      questions: { orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }] },
      _count: { select: { attempts: true } },
    },
    orderBy: { type: 'asc' },
  });
}

export async function getEvaluation(id) {
  const prisma = await getPrisma();
  const evaluation = await prisma.evaluation.findUnique({
    where: { id: Number(id) },
    include: {
      program: true,
      questions: { orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }] },
    },
  });
  if (!evaluation) throw notFound('Evaluasi tidak ditemukan');
  return evaluation;
}

export async function ensureEvaluation(programId, type) {
  const prisma = await getPrisma();
  const normalized = String(type).toUpperCase();
  if (!EVALUATION_TYPES.includes(normalized)) throw badRequest('Jenis evaluasi tidak dikenal');
  const existing = await prisma.evaluation.findUnique({
    where: { programId_type: { programId: Number(programId), type: normalized } },
  });
  if (existing) return existing;
  const labels = { PRE_TEST: 'Pre-test', POST_TEST: 'Post-test', QUIZ: 'Kuis' };
  return prisma.evaluation.create({
    data: {
      programId: Number(programId),
      type: normalized,
      title: labels[normalized],
      instructions: 'Jawab seluruh pertanyaan dengan memilih satu opsi yang paling tepat.',
    },
  });
}

export async function updateEvaluation(id, input) {
  const prisma = await getPrisma();
  return prisma.evaluation.update({
    where: { id: Number(id) },
    data: {
      title: String(input.title ?? '').trim() || 'Evaluasi',
      instructions: String(input.instructions ?? '').trim() || null,
      isPublished:
        input.isPublished === true || input.isPublished === 'on' || input.isPublished === 'true',
      shuffle: input.shuffle === undefined ? true : input.shuffle === true || input.shuffle === 'on',
    },
  });
}

function normalizeQuestion(input) {
  const text = String(input.text ?? '').trim();
  if (!text) throw badRequest('Pertanyaan wajib diisi');
  const options = (Array.isArray(input.options) ? input.options : [])
    .map((option) => String(option ?? '').trim())
    .filter(Boolean);
  if (options.length < 2) throw badRequest('Minimal dua opsi jawaban');
  const answer = String(input.correctAnswer ?? '').trim().toUpperCase();
  const index = LETTERS.indexOf(answer);
  if (index === -1 || index >= options.length) {
    throw badRequest('Kunci jawaban harus salah satu opsi (A, B, C, ...)');
  }
  return {
    text,
    options: JSON.stringify(options),
    correctAnswer: answer,
    score: Number(input.score ?? 1) || 1,
    sortOrder: Number(input.sortOrder ?? 0) || 0,
  };
}

export async function createQuestion(evaluationId, input) {
  const prisma = await getPrisma();
  return prisma.question.create({
    data: { ...normalizeQuestion(input), evaluationId: Number(evaluationId) },
  });
}

export async function updateQuestion(id, input) {
  const prisma = await getPrisma();
  return prisma.question.update({ where: { id: Number(id) }, data: normalizeQuestion(input) });
}

export async function deleteQuestion(id) {
  const prisma = await getPrisma();
  await prisma.question.delete({ where: { id: Number(id) } });
}

/**
 * Impor soal massal (KF-18). Format per baris, kolom dipisah "|" atau TAB:
 * pertanyaan | opsi A | opsi B | opsi C | opsi D | kunci
 * Baris kosong dan baris berawalan # diabaikan.
 */
export function parseQuestionImport(text) {
  const lines = String(text ?? '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'));
  const questions = [];
  const errors = [];
  lines.forEach((line, index) => {
    const cells = line.split(line.includes('\t') ? '\t' : '|').map((cell) => cell.trim());
    if (cells.length < 4) {
      errors.push(`Baris ${index + 1}: butuh pertanyaan, minimal 2 opsi, dan kunci jawaban`);
      return;
    }
    const answer = cells[cells.length - 1].toUpperCase();
    const options = cells.slice(1, -1);
    const letterIndex = LETTERS.indexOf(answer);
    if (letterIndex === -1 || letterIndex >= options.length) {
      errors.push(`Baris ${index + 1}: kunci "${cells[cells.length - 1]}" tidak sesuai opsi`);
      return;
    }
    questions.push({
      text: cells[0],
      options: JSON.stringify(options),
      correctAnswer: answer,
      score: 1,
      sortOrder: questions.length + 1,
    });
  });
  return { questions, errors };
}

export async function importQuestions(evaluationId, text, { replace = false } = {}) {
  const prisma = await getPrisma();
  const { questions, errors } = parseQuestionImport(text);
  if (!questions.length) {
    throw badRequest('Tidak ada soal valid pada berkas/teks impor', { errors });
  }
  if (replace) {
    await prisma.question.deleteMany({ where: { evaluationId: Number(evaluationId) } });
  }
  for (const question of questions) {
    await prisma.question.create({ data: { ...question, evaluationId: Number(evaluationId) } });
  }
  return { imported: questions.length, errors };
}

// ---------- Sisi peserta ----------

export async function getPublicEvaluation(slug, type) {
  const prisma = await getPrisma();
  const normalized = String(type ?? '').toUpperCase();
  if (!EVALUATION_TYPES.includes(normalized)) throw notFound('Jenis evaluasi tidak dikenal');
  const program = await prisma.program.findFirst({
    where: { slug, isPublished: true },
    include: { category: true },
  });
  if (!program) throw notFound('Program tidak ditemukan');
  const evaluation = await prisma.evaluation.findUnique({
    where: { programId_type: { programId: program.id, type: normalized } },
    include: { questions: { orderBy: [{ sortOrder: 'asc' }, { id: 'asc' }] } },
  });
  if (!evaluation || !evaluation.isPublished || evaluation.questions.length === 0) {
    throw notFound('Evaluasi belum tersedia');
  }
  const questions = (evaluation.shuffle ? shuffle(evaluation.questions) : evaluation.questions).map(
    (question) => ({
      id: question.id,
      text: question.text,
      options: parseOptions(question.options),
      score: question.score,
    }),
  );
  return {
    program: {
      id: program.id,
      slug: program.slug,
      title: program.title,
      trainerName: program.trainerName,
    },
    evaluation: {
      id: evaluation.id,
      type: evaluation.type,
      title: evaluation.title,
      instructions: evaluation.instructions,
    },
    questions,
  };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitAttempt(evaluationId, payload = {}) {
  const prisma = await getPrisma();
  const identity = {
    takerName: String(payload.name ?? '').trim(),
    takerEmail: String(payload.email ?? '').trim().toLowerCase(),
    takerPhone: String(payload.phone ?? '').trim(),
    takerTitle: String(payload.position ?? '').trim(),
  };
  const missing = [];
  if (!identity.takerName) missing.push('nama');
  if (!identity.takerEmail) missing.push('email');
  if (!identity.takerPhone) missing.push('nomor telepon');
  if (!identity.takerTitle) missing.push('jabatan');
  if (missing.length) {
    throw badRequest(`Identitas belum lengkap: ${missing.join(', ')}`);
  }
  if (!EMAIL_RE.test(identity.takerEmail)) throw badRequest('Format email tidak valid');

  const evaluation = await prisma.evaluation.findUnique({
    where: { id: Number(evaluationId) },
    include: { questions: true, program: true },
  });
  if (!evaluation || !evaluation.isPublished) throw notFound('Evaluasi tidak tersedia');
  if (evaluation.questions.length === 0) throw badRequest('Soal evaluasi belum tersedia');

  const duplicate = await prisma.attempt.findFirst({
    where: {
      evaluationId: evaluation.id,
      takerEmail: identity.takerEmail,
      submittedAt: { not: null },
    },
  });
  if (duplicate) throw conflict('Evaluasi ini sudah dikerjakan dengan email tersebut');

  const answers = payload.answers ?? {};
  const missingAnswers = evaluation.questions.filter((question) => !answers[question.id]);
  if (missingAnswers.length) {
    throw badRequest(
      `Masih ada ${missingAnswers.length} pertanyaan yang belum dijawab`,
      { unanswered: missingAnswers.map((question) => question.id) },
    );
  }

  let score = 0;
  let maxScore = 0;
  const rows = evaluation.questions.map((question) => {
    maxScore += question.score;
    const answer = String(answers[question.id]).trim().toUpperCase();
    const isCorrect = answer === question.correctAnswer;
    if (isCorrect) score += question.score;
    return { questionId: question.id, answer, isCorrect };
  });

  const attempt = await prisma.attempt.create({
    data: {
      evaluationId: evaluation.id,
      ...identity,
      score,
      maxScore,
      submittedAt: new Date(),
      answers: { create: rows },
    },
  });

  const percent = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  return {
    attemptId: attempt.id,
    score,
    maxScore,
    percent,
    // KF-15: nilai pre-test tidak ditampilkan langsung kepada peserta.
    scoreVisible: evaluation.type !== 'PRE_TEST',
  };
}
