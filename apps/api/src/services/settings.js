import { getPrisma } from '../config/db.js';

export const DEFAULT_SETTINGS = {
  siteName: 'Sopinsya Educenter',
  tagline: 'Pelatihan, konsultasi, dan audit internal dalam satu platform.',
  about:
    'Sopinsya Educenter menyelenggarakan pelatihan standar ISO, konsultasi penerapan sistem manajemen, serta pendampingan audit internal. Seluruh materi, evaluasi, dan register temuan tersedia terpusat dalam platform ini.',
  whatsapp: '6281234567890',
  email: 'info@sopinsya.com',
  address: 'Jakarta, Indonesia',
  operatingHours: 'Senin–Jumat, 09.00–17.00 WIB',
  auditOrg: 'LABORATORIUM BBWS',
  auditDocNo: 'F.12-01',
  auditRevision: '00',
  auditIssueDate: '2026-09-02',
  auditLeadName: 'Tony Stark',
  auditLeadTitle: 'Lead Auditor',
  auditManagerName: 'Hank Pym',
  auditManagerTitle: 'Manajer Mutu',
};

export async function getSettings() {
  const prisma = await getPrisma();
  const rows = await prisma.setting.findMany();
  const values = { ...DEFAULT_SETTINGS };
  for (const row of rows) {
    if (row.key in values) values[row.key] = row.value;
  }
  return values;
}

export async function saveSettings(patch) {
  const prisma = await getPrisma();
  const entries = Object.entries(patch).filter(([key]) => key in DEFAULT_SETTINGS);
  for (const [key, value] of entries) {
    await prisma.setting.upsert({
      where: { key },
      create: { key, value: String(value ?? '') },
      update: { value: String(value ?? '') },
    });
  }
  return getSettings();
}

// Nomor WhatsApp → tautan wa.me yang aman.
export function whatsappLink(number, message = '') {
  const digits = String(number ?? '').replace(/[^\d]/g, '');
  if (!digits) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${text}`;
}
