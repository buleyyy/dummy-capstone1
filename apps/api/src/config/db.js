import env from './env.js';

/**
 * Satu Prisma Client untuk dua driver:
 *  - mysql  → @prisma/adapter-mariadb (produksi, sesuai SRS)
 *  - sqlite/libsql → @prisma/adapter-libsql (berkas lokal atau database
 *    remote seperti Turso untuk deploy serverless)
 *
 * Service memakai `const prisma = await getPrisma()` dengan Prisma Client API
 * yang sama, sehingga perpindahan database hanya soal DATABASE_URL.
 */
let clientPromise;

async function createClient() {
  if (env.dbDriver !== 'mysql') {
    const [{ PrismaClient }, { PrismaLibSql }] = await Promise.all([
      import('../../generated/sqlite-client/default.js'),
      import('@prisma/adapter-libsql'),
    ]);
    const config = { url: env.databaseUrl };
    if (env.libsqlAuthToken) config.authToken = env.libsqlAuthToken;
    return new PrismaClient({ adapter: new PrismaLibSql(config) });
  }

  const [{ PrismaClient }, { PrismaMariaDb }] = await Promise.all([
    import('@prisma/client'),
    import('@prisma/adapter-mariadb'),
  ]);
  return new PrismaClient({ adapter: new PrismaMariaDb(env.databaseUrl) });
}

export async function getPrisma() {
  clientPromise ??= createClient();
  return clientPromise;
}

export async function pingDb() {
  try {
    const prisma = await getPrisma();
    const rows = await prisma.$queryRawUnsafe('SELECT 1 AS ok');
    return Array.isArray(rows) && rows.length > 0;
  } catch {
    return false;
  }
}

export async function disconnectDb() {
  if (!clientPromise) return;
  const prisma = await clientPromise;
  await prisma.$disconnect();
  clientPromise = undefined;
}
