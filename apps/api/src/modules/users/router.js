import express from 'express';
import { requireRole } from '../../middleware/auth.js';
import { createUser, listUsers, setUserActive, updateUser } from '../../services/users.js';
import { badRequest, ok, wrap } from '../../utils/http.js';

const router = express.Router();

router.use(requireRole('ADMIN'));

// GET /api/v1/users — KF-33, UC-12
router.get(
  '/',
  wrap(async (_req, res) => ok(res, await listUsers())),
);

// POST /api/v1/users
router.post(
  '/',
  wrap(async (req, res) => {
    const user = await createUser(req.body ?? {});
    ok(res, user, 201);
  }),
);

// PATCH /api/v1/users/:id
router.patch(
  '/:id',
  wrap(async (req, res) => {
    const user = await updateUser(req.params.id, req.body ?? {});
    ok(res, user);
  }),
);

// POST /api/v1/users/:id/status  { isActive: boolean }
router.post(
  '/:id/status',
  wrap(async (req, res) => {
    if (typeof req.body?.isActive !== 'boolean') throw badRequest('isActive wajib boolean');
    const user = await setUserActive(req.params.id, req.body.isActive);
    ok(res, user);
  }),
);

export default router;
