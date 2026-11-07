import express from 'express';
import { requireRole } from '../../middleware/auth.js';
import { getSettings, saveSettings, whatsappLink } from '../../services/settings.js';
import { ok, wrap } from '../../utils/http.js';

const router = express.Router();

// GET /api/v1/settings/public — kontak & info publik (KF-29)
router.get(
  '/public',
  wrap(async (_req, res) => {
    const settings = await getSettings();
    ok(res, {
      siteName: settings.siteName,
      tagline: settings.tagline,
      about: settings.about,
      whatsapp: settings.whatsapp,
      whatsappLink: whatsappLink(settings.whatsapp),
      email: settings.email,
      address: settings.address,
      operatingHours: settings.operatingHours,
    });
  }),
);

// GET /api/v1/settings — seluruh pengaturan (ADMIN)
router.get(
  '/',
  requireRole('ADMIN'),
  wrap(async (_req, res) => ok(res, await getSettings())),
);

// PUT /api/v1/settings
router.put(
  '/',
  requireRole('ADMIN'),
  wrap(async (req, res) => ok(res, await saveSettings(req.body ?? {}))),
);

export default router;
