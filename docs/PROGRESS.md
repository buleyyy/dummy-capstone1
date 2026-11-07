# PROGRESS — Sopinsya

Dokumen kontinuitas kerja. Format laporan mengikuti SOP: tahap aktif, persentase terverifikasi, perubahan, pengujian + hasil aktual, kendala, keputusan, langkah berikutnya.

---

## Sesi 20 Okt 2026 — Analisis RD 2, Audit, Fondasi (Tahap A)

### Posisi saat ini

- **Audit & analisis: SELESAI** ([PROJECT-AUDIT.md](PROJECT-AUDIT.md), [ERD.md](ERD.md), [DATA-DICTIONARY.md](DATA-DICTIONARY.md)).
- **Implementasi: Tahap A (fondasi) selesai diverifikasi** — kecuali pengujian DB yang terblokir ketersediaan MySQL.
- Persentase terverifikasi (bukan perkiraan):
  - Analisis/audit: **100%**
  - Implementasi Tahap A: **~90%** (sisa: verifikasi Prisma terhadap MySQL sungguhan)
  - Testing Tahap A: **~60%** (sudah: startup, halaman EJS, aset, health, 404; belum: koneksi DB, migrasi, seed — terblokir MySQL)
  - Keseluruhan project (estimasi kasar terhadap F-01…F-18): **~10%** — fondasi jalan; belum ada endpoint modul.

### File yang dibuat/diubah

Baru:
- `docs/PROJECT-AUDIT.md`, `docs/ERD.md`, `docs/DATA-DICTIONARY.md`, `docs/PROGRESS.md`
- `apps/api/prisma/schema.prisma`, `apps/api/prisma/migrations/0001_init/migration.sql` (324 baris, dihasilkan offline via `prisma migrate diff`)
- `apps/api/prisma.config.ts` (Prisma 7), `apps/api/prisma/seed.js`
- `apps/api/views/` (header/footer partial, home.ejs, login.ejs)
- `apps/web/vite.config.js`, `apps/web/src/styles.css`, `apps/web/src/main.js`

Diubah:
- `apps/api/src/app.js` — view engine EJS, `express.static`, route `/` dan `/login`
- `apps/api/src/config/db.js` — mysql2 diganti PrismaClient + `@prisma/adapter-mariadb`
- `apps/api/src/config/env.js` — tambah `databaseUrl`
- `apps/api/src/middleware/rbac.js` — role `ADMIN|AUDITOR` (sesuai RD 2 N-01; sebelumnya `admin|trainer|peserta` warisan RD 1)
- `apps/api/package.json` — deps: +`@prisma/client`, `@prisma/adapter-mariadb`, `ejs`; −`mysql2`; dev: +`prisma`; skrip db:*
- `apps/web/package.json` — Next.js/React dilepas; Vite + Tailwind v4
- `.env.example` (+`DATABASE_URL`), `.gitignore` (+`apps/api/public/`), `README.md`

Dihapus (riwayat tetap di Git, commit `83bb34c`):
- `apps/web/app/`, `apps/web/lib/`, `next.config.mjs`, `jsconfig.json` (scaffold Next.js — REBUILD ke EJS+Vite sesuai audit)

### Keputusan teknis yang diambil (dokumentasi, bukan requirement)

1. Frontend = EJS yang dirender Express + aset Vite/Tailwind (bukan SPA) — mengikuti arsitektur target; konflik dengan RD 2 §3.3 dicatat sebagai C-01.
2. Prisma **7.10.1** (stable "prev"): `url` dihapus dari schema; koneksi via `prisma.config.ts` (CLI) dan driver adapter `@prisma/adapter-mariadb` (runtime). Prisma 8 masih RC — tidak dipakai.
3. Hash password seed memakai `node:crypto` scrypt (`salt:hex`) tanpa dependency tambahan; verifikasi login (Tahap B) harus memakai pola sama.
4. Migrasi belum dieksekusi ke database mana pun (belum ada DB) — SQL tersedia di `prisma/migrations/0001_init/migration.sql`.

### Pengujian yang dijalankan & hasil aktual

| Uji | Perintah | Hasil |
|---|---|---|
| Install dependencies | `npm install` | ✅ 107+ paket, `package-lock.json` terbentuk |
| Startup API | `node apps/api/src/server.js` | ✅ berjalan di :4000 |
| Health check | `GET /api/health` | ✅ `{"status":"ok","db":"unavailable"}` — `unavailable` karena MySQL memang belum ada (jujur) |
| Halaman EJS | `GET /`, `GET /login` | ✅ 200, HTML lengkap, title benar |
| Aset Vite/Tailwind | `GET /assets/styles.css`, `/assets/main.js` | ✅ 200 + content-type benar |
| 404 handler | `GET /api/v1/trainings` | ✅ `NOT_FOUND` JSON |
| Prisma validate/generate | `npx prisma validate\|generate` | ✅ schema valid, client v7.10.1 tergenerasi |
| SQL migrasi offline | `npx prisma migrate diff --from-empty --to-schema ... --script` | ✅ 324 baris |
| Koneksi DB / migrasi / seed | — | ❌ **BELUM BISA** — tidak ada server MySQL di mesin |

### Kendala aktual

1. **MySQL tidak tersedia di mesin ini** (tidak ada layanan, CLI, XAMPP, maupun Docker). Menjadi blocker pengujian DB, migrasi, seed, dan seluruh modul berbasis data.
2. Prisma 8 = RC; dipakai 7.10.1 (stable). Saat naik versi, cek ulang `prisma.config.ts` dan adapter.

### Keputusan yang dibutuhkan (dari klien/tim)

1. Penyediaan MySQL development (instal lokal/XAMPP/remote) — **blocker**.
2. C-02: konfirmasi aturan sesi audit (ACTIVE/CLOSED, checklist beku, YA/TIDAK, idempotensi, status temuan, retensi).
3. C-05/E-5: peserta publik tanpa login (default sementara mengikuti RD 2) — konfirmasi.
4. E-4: aturan penilaian evaluasi. E-6: upload file vs URL untuk materi. E-7: format laporan/PDF.

### Langkah berikutnya (Tahap B — Akses & Sesi Audit)

1. Setelah MySQL tersedia: `npm run db:migrate:dev --workspace apps/api` lalu `npm run db:seed --workspace apps/api`; verifikasi `db: "ok"` pada health check.
2. Auth internal: `POST /api/v1/auth/login|logout`, `GET /me` — sesi cookie httpOnly, hash scrypt sesuai seed, RBAC `ADMIN|AUDITOR`, uji 401/403.
3. CRUD dasar master checklist (F-12) + pembuatan sesi audit dengan snapshot checklist (menunggu konfirmasi C-02 untuk aturan transisi statusnya).

---

## Template laporan sesi berikutnya

```
## Sesi <tanggal> — <tahap>
- Posisi: ...
- Persentase: audit %, implementasi %, testing %
- Perubahan file: ...
- Pengujian + hasil aktual: ...
- Kendala: ...
- Keputusan yang dibutuhkan: ...
- Langkah berikutnya: ...
```
