# Deploy Sopinsya ke Vercel

Di Vercel aplikasi berjalan sebagai **satu fungsi serverless Node.js**: `api/index.js`
meneruskan setiap request ke aplikasi Express yang sama dengan di lokal (EJS + `/api/v1`).

| Berkas | Fungsi |
|---|---|
| `api/index.js` | Entry fungsi serverless (default export Express app) |
| `vercel.json` | Build (Vite + `prisma generate`), `includeFiles` untuk `views/`, `public/`, `generated/`, dan rewrites semua path ke fungsi |
| `.env.example` | Daftar variabel environment yang perlu diisi di Vercel |

Build di Vercel menjalankan `npm run db:generate --workspace apps/api && npm run build:web`,
jadi Prisma Client dan aset `apps/api/public` (yang di-gitignore) selalu dibuat ulang.

## 1. Siapkan database remote

Fungsi serverless tidak punya penyimpanan permanen, jadi **SQLite lokal
(`DATABASE_URL=file:./prisma/dev.db`) tidak bisa dipakai di Vercel**. Pilih salah satu:

### Opsi A — MySQL hosted (sesuai SRS)

```bash
cd apps/api
DATABASE_URL="mysql://user:password@host:3306/sopinsya" npx prisma db push
DATABASE_URL="mysql://user:password@host:3306/sopinsya" npm run db:seed
```

Tambahkan parameter TLS/SSL yang diwajibkan penyedia pada URL. Skema yang dipakai
adalah `prisma/schema.prisma` (MySQL), sama seperti target produksi.

### Opsi B — libSQL/Turso (serverless, ada free tier)

1. Buat database di Turso, catat URL `libsql://...` dan auth token-nya.
2. Terapkan skema SQLite yang sudah ada:

   ```bash
   npm run db:sqlite:sql --workspace apps/api > schema.sql
   turso db shell <nama-database> < schema.sql
   ```

   (atau tempel isi `schema.sql` ke SQL console di dashboard Turso)
3. Isi data awal:

   ```bash
   cd apps/api
   DATABASE_URL="libsql://..." TURSO_AUTH_TOKEN="..." npm run db:seed
   ```

`db:seed` mengosongkan seluruh tabel terlebih dahulu, jadi jalankan sekali pada
database baru.

## 2. Impor project di Vercel

- **Framework Preset**: `Other` (jangan pilih Vite/Next.js — root bukan proyek Vite).
- **Root Directory**: root repo (biarkan kosong).
- **Build Command**: biarkan mengikuti `vercel.json`, jangan di-override.
- **Environment Variables** (Production dan Preview):
  | Variabel | Wajib | Keterangan |
  |---|---|---|
  | `DATABASE_URL` | ya | URL MySQL hosted atau `libsql://...` |
  | `TURSO_AUTH_TOKEN` | opsi B | Token libSQL/Turso (alias: `LIBSQL_AUTH_TOKEN`) |
  | `WEB_ORIGIN` | ya | URL produksi, mis. `https://sopinsya.vercel.app` (dipakai CORS) |
  | `SESSION_COOKIE` | tidak | Nama cookie sesi (default `sopinsya_session`) |
  | `SESSION_TTL_HOURS` | tidak | Umur sesi dalam jam (default `8`) |

`NODE_ENV=production` diisi Vercel secara otomatis (cookie sesi otomatis `Secure`).
`API_PORT` tidak dipakai di Vercel. Preview deployment punya domain berbeda; request
same-origin tetap diizinkan, jadi `WEB_ORIGIN` cukup untuk domain produksi.

Atau lewat CLI:

```bash
npx vercel link
npx vercel env add DATABASE_URL production
npx vercel --prod
```

## 3. Verifikasi setelah deploy

```bash
curl https://<domain>/api/v1/health
```

Harus `status: "ok"` dengan `db: "ok"` dan `driver: "mysql"` atau `"libsql"`.
Lalu buka `/`, `/login`, dan uji login memakai akun hasil seed dalam
`prisma/seed.js`.

## Batasan yang perlu diketahui

- **Filesystem read-only**: unggahan file ke disk tidak persisten. Materi/SOP harus
  memakai URL (kolom `url` / `file_path` berisi tautan), atau storage eksternal.
- Setiap invokasi fungsi membuka koneksi database baru; bila penyedia menyediakan
  connection pooler, gunakan endpoint pooler-nya.
- Region diset `sin1` (Singapura) agar dekat pengguna di Indonesia; ubah di
  `vercel.json` → `regions` bila perlu.
- Log runtime: dashboard Vercel → Deployments → pilih deployment → Functions/Logs.
- Pengembangan lokal tidak berubah: `DATABASE_URL=file:...` tetap memakai SQLite lokal.
