import { badRequest } from '../utils/http.js';

/**
 * Validasi permintaan dengan zod.
 * Pakai: router.post('/x', validate({ body: someZodSchema }), handler)
 * Bagian yang tidak dispesifikasi (body/params/query) dilewati.
 */
export function validate(schemas = {}) {
  return (req, _res, next) => {
    const details = {};
    for (const part of ['body', 'params', 'query']) {
      const schema = schemas[part];
      if (!schema) continue;
      const result = schema.safeParse(req[part]);
      if (!result.success) {
        details[part] = result.error.issues.map((i) => ({
          path: i.path.join('.'),
          message: i.message,
        }));
      } else {
        req[part] = result.data;
      }
    }
    if (Object.keys(details).length > 0) {
      return next(badRequest('Validasi gagal', details));
    }
    next();
  };
}
