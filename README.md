# Sopinsya — Aplikasi Pelatihan Berbasis Web

Capstone PPSI Kelompok 01. Website pelatihan dan audit internal Sopinsya Educenter (klien: Ahmad Fadillah).

Sumber requirement utama: **Requirement Document 2 (RD 2) v1.1 — 13 Okt 2026**. Analisis requirement, konflik, dan klasifikasi kode ada di [`docs/PROJECT-AUDIT.md`](docs/PROJECT-AUDIT.md); rancangan data di [`docs/ERD.md`](docs/ERD.md) dan [`docs/DATA-DICTIONARY.md`](docs/DATA-DICTIONARY.md).

## Stack (keputusan arsitektur terbaru)

| Komponen | Teknologi |
|---|---|
| Backend & halaman | Node.js + Express, view **EJS** (`apps/api`) |
| Aset frontend | **Vite + Tailwind CSS** (build ke `apps/api/public`) (`apps/web`) |
| Database | **MySQL** |
| ORM | **Prisma 7** (driver adapter `@prisma/adapter-mariadb`) |
| Autentikasi internal | Sesi server-side + cookie aman + hash password + RBAC (Tahap B) |

> Catatan: RD 2 §3.3 masih menulis TypeScript + Next.js. Keputusan arsitektur terbaru menggunakan stack di atas; konflik tercatat di `docs/PROJECT-AUDIT.md` §5 (C-01) dan perlu disinkronkan pada dokumen SRS/SDD.

## Struktur

```
dummy-capstone1/
├── package.json              # npm workspaces
├── .env.example              # template environment
├── docs/                     # audit, ERD, data dictionary, progress
└── apps/
    ├── api/                  # Express + EJS + Prisma
    │   ├── prisma/           # schema, migrations, seed
    │   ├── public/           # aset hasil build Vite (di-gitignore)
    │   ├── src/
    │   │   ├── server.js     # entrypoint
    │   │   ├── app.js        # view engine, routing halaman + /api/v1
    │   │   ├── config/       # env + Prisma client
    │   │   ├── middleware/   # auth, rbac, validate, errorHandler
    │   │   └── modules/      # router API per modul (F-01…F-18)
    │   └── views/            # template EJS (halaman)
    └── web/                  # proyek build Vite + Tailwind (bukan framework SPA)
        ├── src/styles.css    # Tailwind + CSS kustom
        └── src/main.js       # JS halaman
```

## Menjalankan

```bash
npm install                      # di root
cp .env.example .env             # isi nilai MySQL (DATABASE_URL)

npm run build --workspace apps/web   # bangun aset sekali
npm run dev --workspace apps/api     # Express di http://localhost:4000
# atau keduanya (mode dev):
npm run dev:api
npm run dev:web                   # vite build --watch
```

- Halaman: `http://localhost:4000/` (beranda), `/login` (area internal).
- Health check: `GET http://localhost:4000/api/health` (field `db` menunjukkan status koneksi MySQL).
- Database: `npm run db:generate|db:migrate:dev|db:deploy|db:seed --workspace apps/api` (dari `apps/api`, file `prisma.config.ts` harus terbaca).

## Deploy ke Vercel

Aplikasi di-deploy sebagai fungsi serverless (`api/index.js` + `vercel.json`) yang
meneruskan semua request ke Express. Database wajib remote — MySQL hosted atau
libSQL/Turso — karena SQLite `file:` tidak persisten di Vercel. Langkah lengkap:
[`docs/DEPLOY-VERCEL.md`](docs/DEPLOY-VERCEL.md).

## Modul API (rencana, mengikuti kode F-01…F-18 di RD 2)

| Kode RD 2 | Modul | Folder |
|---|---|---|
| F-04/F-06/F-18 | Auth & akun internal (Admin, Auditor) | `modules/auth`, `modules/users` |
| F-02/F-03 | Katalog & detail program | `modules/trainings` |
| F-04 | Pendaftaran peserta | `modules/registrations` |
| F-07 | Materi & pembelajaran | `modules/materials` |
| F-08 | Pustaka SOP | `modules/sops` (menyusul) |
| F-09/F-10 | Evaluasi & pengolahan nilai | `modules/tests`, `modules/grading` |
| F-11 | Rating & ulasan | `modules/reviews` (menyusul) |
| F-12…F-16 | Master checklist, checklist audit, dashboard, register temuan, laporan PDF | `modules/audit` (menyusul) |
| F-17 | Kontak & konsultasi | `modules/contact` |

Saat ini endpoint operasional baru health check + halaman EJS; endpoint modul menyusul per tahap (lihat `docs/PROGRESS.md`).

## Keputusan yang masih terbuka (CONFIRM)

- **C-01** Sinkronisasi dokumen RD 2 terhadap stack target (EJS/Vite/Prisma).
- **C-02** Aturan sesi audit (ACTIVE/CLOSED, checklist beku, YA/TIDAK, idempotensi, penutupan & pembukaan kembali temuan).
- **E-4** Aturan penilaian (tipe soal, bobot, passing grade, batas waktu/percobaan).
- **E-5 (C-05)** Alur akun peserta (default sementara: peserta publik tanpa login, mengikuti RD 2).
- **E-6** Penyimpanan materi (upload file vs URL saja).
- **E-7** Format laporan/rekap dan laporan audit PDF.
- **C-08** Retensi data & aturan status temuan.
- **Blocker teknis**: MySQL development di mesin ini belum tersedia — pengujian DB menunggu penyediaan MySQL.

## Scope (tidak termasuk)

Pembayaran online, sertifikat otomatis, video conference sendiri (X-01/X-02 di RD 2).
