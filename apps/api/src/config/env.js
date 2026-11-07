import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

// Muat .env di root repo (dipakai saat dijalankan dari apps/api) lalu .env lokal.
dotenv.config({ path: path.resolve(packageRoot, '../../.env') });
dotenv.config({ path: path.resolve(packageRoot, '.env') });

// Berkas SQLite relatif selalu diresolusi terhadap folder apps/api,
// agar server tetap menemukan database meski dijalankan dari root repo.
function resolveSqliteUrl(url) {
  if (!url.startsWith('file:')) return url;
  const filePath = url.slice('file:'.length);
  if (path.isAbsolute(filePath)) return url;
  return `file:${path.resolve(packageRoot, filePath)}`;
}

// MySQL adalah database produksi sesuai SRS (B-02/K-02). Saat server MySQL
// tidak tersedia di mesin pengembangan, DATABASE_URL boleh menunjuk berkas
// SQLite (file:./prisma/dev.db) — skema SQLite diturunkan dari schema.prisma.
const rawUrl =
  process.env.DATABASE_URL ??
  `mysql://${process.env.DB_USER ?? 'root'}:${process.env.DB_PASSWORD ?? ''}@${process.env.DB_HOST ?? 'localhost'}:${process.env.DB_PORT ?? 3306}/${process.env.DB_NAME ?? 'sopinsya'}`;

// libSQL remote (mis. Turso) memakai klien SQLite yang sama dengan pengembangan
// lokal, tetapi diakses lewat HTTP sehingga aman untuk fungsi serverless Vercel.
const remoteLibsql = /^(libsql|https?):\/\//i.test(rawUrl);
const dbDriver = rawUrl.startsWith('file:') ? 'sqlite' : remoteLibsql ? 'libsql' : 'mysql';

const env = {
  port: Number(process.env.API_PORT ?? 4002),
  webOrigin: process.env.WEB_ORIGIN ?? 'http://localhost:4000',
  sessionCookie: process.env.SESSION_COOKIE ?? 'sopinsya_session',
  sessionTtlHours: Number(process.env.SESSION_TTL_HOURS ?? 8),
  databaseUrl: resolveSqliteUrl(rawUrl),
  dbDriver,
  libsqlAuthToken: process.env.TURSO_AUTH_TOKEN ?? process.env.LIBSQL_AUTH_TOKEN ?? '',
  db: {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? 'sopinsya',
  },
};

export default env;
