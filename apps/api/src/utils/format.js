// Helper format tampilan (Bahasa Indonesia).

const MONTHS = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export function formatDate(value, { withTime = false } = {}) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  const text = `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  if (!withTime) return text;
  const time = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  return `${text}, ${time}`;
}

export function formatShortDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
}

export function formatDateTimeInput(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export const MATERIAL_LABELS = {
  SILABUS: 'Silabus',
  MATERI: 'Materi',
  STUDI_KASUS: 'Studi Kasus',
  VIDEO: 'Video Referensi',
  QUIZ: 'Quiz Game',
  SOP: 'Pustaka SOP',
  DOKUMEN: 'Dokumen',
};

export const EVALUATION_LABELS = {
  PRE_TEST: 'Pre-test',
  POST_TEST: 'Post-test',
  QUIZ: 'Kuis',
};

export const CATEGORY_LABELS = {
  MAJOR: 'Major',
  MINOR: 'Minor',
  OBSERVASI: 'Observasi',
};

export const FINDING_STATUS_LABELS = {
  OPEN: 'Open',
  CLOSED: 'Closed',
};

export const CATEGORY_BADGE = {
  MAJOR: 'b-bad',
  MINOR: 'b-warn',
  OBSERVASI: 'b-info',
};

export const STATUS_BADGE = {
  OPEN: 'b-warn',
  CLOSED: 'b-ok',
};
