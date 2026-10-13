# Sopinsya — Aplikasi Pelatihan Berbasis Web

Capstone PPSI Kelompok 01. Sistem informasi pelatihan dan konsultasi DMP untuk Sopinsya Konsultasi SMAP (klien: Ahmad Fadillah, PT Synergy Solusi Utama).

## Stack (keputusan tim)

| Komponen | Teknologi |
|---|---|
| Frontend | Next.js (App Router) — `apps/web` |
| Backend | Node.js + Express — `apps/api` |
| Database | MySQL |

Berdasarkan Requirement Document (RD1 v0.3.1) dan Dokumen Perencanaan (RD2). Laravel tidak digunakan; Gantt Chart adalah artefak perencanaan proyek, bukan fitur produk.

## Struktur

```
dummy-capstone1/
├── package.json          # npm workspaces
├── .env.example          # template environment
└── apps/
    ├── web/              # Next.js (App Router)
    └── api/              # Express
        └── src/
            ├── server.js     # entrypoint HTTP
            ├── app.js        # express app + routing
            ├── config/       # env + koneksi MySQL (pool)
            ├── middleware/   # auth, rbac, validate, errorHandler
            ├── modules/      # 1 modul = router (M1–M10)
            └── utils/
```

## Menjalankan

```bash
npm install                    # di root, menginstal semua workspace
cp .env.example .env           # lalu isi nilai MySQL

npm run dev:api                 # Express di http://localhost:4000
npm run dev:web                 # Next.js di http://localhost:3000
```

Health check API: `GET http://localhost:4000/api/health`

## Modul backend (rencana, sesuai RD F-01…F-12)

| Kode | Modul | Folder |
|---|---|---|
| M1 | Auth & Akun | `modules/auth`, `modules/users` |
| M2 | Katalog Pelatihan | `modules/trainings` |
| M3 | Jadwal | `modules/schedules` |
| M4 | Pendaftaran & Data Peserta | `modules/registrations` |
| M5 | Materi & Referensi | `modules/materials` |
| M6 | Evaluasi (pre/post-test, kuis) | `modules/tests` |
| M7 | Pengolahan Nilai | `modules/grading` |
| M8 | Rekap & Laporan | `modules/reports` |
| M9 | Masa Akses & Isolasi Data | middleware `access` |
| M10 | Kontak & Konsultasi | `modules/contact` |

Saat ini semua modul (kecuali auth) masih berupa placeholder router — implementasi mengikuti sprint yang disepakati.

## Keputusan yang masih terbuka

- **E-4** Aturan penilaian (tipe soal, bobot, passing grade, batas waktu/percobaan) — sebelum modul evaluasi diisi.
- **E-5** Alur pembuatan akun peserta (self-register vs dibuat admin) — sebelum modul auth diisi.
- **E-6** Penyimpanan materi (upload file vs URL saja) — sebelum modul materi diisi.
- **E-7** Format laporan/rekap — sebelum modul rekap diisi.
- Pendukung: pilihan ORM/driver, strategi hosting, konvensi API.

Jangan mengisi area ini berdasarkan asumsi; konfirmasi ke klien/tim dulu.

## Scope (tidak termasuk)

Pembayaran online, sertifikat resmi, video conference sendiri, pembuatan konten & bank soal (disediakan klien), Gantt Chart produk.
