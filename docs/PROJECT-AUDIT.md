# PROJECT AUDIT — Sopinsya (Capstone PPSI Kelompok 1)

Tanggal audit: 20 Oktober 2026
Sumber requirement utama: **Requirement Document 2 (RD 2), Versi 1.1, 13 Oktober 2026** — "Dokumen Perencanaan Proyek Aplikasi Pelatihan Berbasis Web (SOPINSYA)".
Klien: Ahmad Fadillah. Metodologi: Scrum, 3 sprint.

Status dokumen ini: **audit aktual berbasis kode dan dokumen yang ada**. Prioritas (P0/P1/P2) adalah **usulan teknis tim, bukan tertulis di RD 2**. Kolom "Status kepastian" membedakan requirement pasti (eksplisit di RD 2) vs asumsi vs butuh konfirmasi.

---

## 1. Ringkasan Eksekutif

- Repository berisi **scaffold awal**, bukan aplikasi berfungsi: API Express punya **0 endpoint operasional** (hanya health check), frontend Next.js berisi 2 halaman dengan **data statis contoh**, tidak ada database schema, migrasi, seed, test, maupun lockfile.
- Baseline Git **aman**: branch `main`, 3 commit, working tree bersih (hanya `.freebuff/` untracked). Perubahan dapat dipulihkan kapan pun.
- **Konflik stack besar** antara RD 2 (§3.3: TypeScript + Next.js) dan keputusan arsitektur target terbaru (Express + EJS + Tailwind + Vite + Prisma). Konflik ini tercatat di §5, tidak diselesaikan diam-diam.
- RD 2 **tidak menyebut** konsep "sesi audit ACTIVE/CLOSED", "jawaban YA/TIDAK", maupun "room/kategori materi" dengan istilah tersebut — istilah-istilah itu berasal dari catatan keputusan meeting, bukan dari RD 2. Dicatat sebagai CONFIRM (§4).
- Kondisi mesin开发: **tidak ditemukan MySQL server/CLI maupun Docker** di mesin ini (dicek: port 3306 tidak listen, `mysql` CLI tidak ada, tidak ada Docker, tidak ada instalasi MySQL/XAMPP/MariaDB di lokasi umum). Ini menghambat pengujian koneksi DB sampai tersedia.

---

## 2. Matriks Requirement (berdasarkan RD 2)

Kolom "Prioritas usulan" = rekomendasi teknis (P0 = inti alur audit & pelatihan yang tanpanya aplikasi tidak berfungsi; P1 = penting; P2 = pelengkap).

| ID | Requirement | Sumber dalam RD 2 | Prioritas usulan | Status kepastian | Catatan |
|---|---|---|---|---|---|
| F-01 | Halaman publik: profil & informasi umum Sopinsya Educenter | §3.2 baris "Halaman Publik" | P1 | Pasti (RD 2) | Pengguna: User, Admin, Auditor |
| F-02 | Informasi & katalog program: daftar program, kategori, gambar cover, deskripsi, pencarian | §2.2 tabel To-Be "Pencarian program"; §3.2 | P0 | Pasti (RD 2) | Terhubung CMS Konten |
| F-03 | Detail program: info program, materi, evaluasi, studi kasus, SOP, video referensi | §3.2 | P0 | Pasti (RD 2) | |
| F-04 | Pendaftaran peserta: formulir pendaftaran program, data pendaftar tersimpan terpusat | §2.2 tabel "Pendaftaran peserta"; §3.2 | P1 | Pasti (RD 2) | Form tanpa login; status akun peserta → CONFIRM E-5 |
| F-05 | CMS Konten: kelola informasi program, materi, video referensi, konten website | §2.2; §3.2; §3.3 "Pengelolaan konten" | P1 | Pasti (RD 2) | Pengguna Admin |
| F-06 | Manajemen Peserta dan Hak Akses: data peserta, akun internal, pembatasan akses berdasarkan role | §3.2; §3.3 "Autentikasi dan hak akses" | P1 | Pasti (RD 2) | Akun internal = Admin & Auditor; akun peserta → CONFIRM E-5 |
| F-07 | Modul Pembelajaran: materi, modul, studi kasus, video referensi | §3.2; §2.2 | P0 | Pasti (RD 2) | Pengguna: User, Admin |
| F-08 | Pustaka SOP: simpan, kelola, sediakan dokumen SOP; Admin memilih SOP relevan untuk program | §2.2 tabel; §3.2; §3.3 | P1 | Pasti (RD 2) | User akses "jika dipublikasikan" |
| F-09 | Evaluasi: pre-test, post-test, kuis | §2.2; §3.2 | P0 | Pasti (RD 2) | Aturan soal/bobot → CONFIRM E-4 |
| F-10 | Pengolahan Nilai & Rekap: hitung nilai otomatis berdasar kunci jawaban, simpan hasil, rekap nilai | §2.2; §3.2 | P0 | Pasti (RD 2) | Passing grade/bobot → CONFIRM E-4 |
| F-11 | Rating dan Ulasan program oleh User | §2.2 tabel; §3.2 | P2 | Pasti (RD 2) | |
| F-12 | Master Checklist Audit: kelola template checklist, kategori, pertanyaan pemeriksaan | §3.2 | P0 | Pasti (RD 2) | Pengguna Admin (konteks modul) |
| F-13 | Checklist Audit: Auditor melakukan pemeriksaan & mencatat hasil berdasar checklist | §3.2 | P0 | Pasti (RD 2) | Inti alur audit |
| F-14 | Dashboard Audit: ringkasan status pemeriksaan, statistik, temuan | §3.2 | P1 | Pasti (RD 2) | |
| F-15 | Register Temuan: catat & klasifikasi temuan **Major/Minor/Observasi**, pantau statusnya | §3.2 | P0 | Pasti (RD 2) | Model "sesi" tidak disebut RD 2 → CONFIRM |
| F-16 | Laporan Audit dalam format PDF (hasil pemeriksaan + register temuan) | §2.2; §3.2; §3.3 | P1 | Pasti (RD 2) | |
| F-17 | Kontak dan Konsultasi: info kontak + tautan WhatsApp | §3.2 | P2 | Pasti (RD 2) | Tautan saja, tanpa chat engine |
| F-18 | Pengaturan Sistem: akun internal, role, hak akses, konfigurasi sistem | §3.2 | P1 | Pasti (RD 2) | |
| N-01 | Tiga role: **User, Admin, Auditor**; login hanya Admin & Auditor; User akses publik tanpa login; validasi hak akses di sisi server | §3.3 "Autentikasi dan hak akses"; §4.1; §4.3 | P0 | Pasti (RD 2) | **Konflik** dengan kode lama (admin/trainer/peserta) → lihat §5 |
| N-02 | Basis data MySQL terpusat untuk seluruh modul | §3.3 "Basis data" | P0 | Pasti (RD 2) | |
| N-03 | Website responsif (desktop, laptop, tablet, ponsel) | §2.2; §3.3 | P1 | Pasti (RD 2) | |
| N-04 | Integrasi layanan eksternal: Zoom/Google Meet (tautan pertemuan), YouTube (video referensi), WhatsApp | §2.2; §3.3 | P2 | Pasti (RD 2) | Tautan/iframe saja, tanpa membangun video conference |
| N-05 | Hosting, domain, biaya, spesifikasi server: **belum ditentukan** | §3.3 "Server uji dan produksi"; §4.2 | P2 | Belum pasti | Butuh keputusan klien |
| N-06 | Pengujian: modul, integrasi, hak akses, evaluasi, audit; UAT dengan klien | §5 WBS 7.1–7.3 | P1 | Pasti (RD 2) | Kriteria penerimaan detail → tercantum di SRS (WBS 4.3, belum ada) |
| X-01 | Pembayaran online & sertifikat otomatis | §1.1; §2.2; §3 | — | Pasti: **LUAR lingkup** | Jangan diimplementasikan |
| X-02 | Layanan konferensi video sendiri | §2.2 | — | Pasti: **LUAR lingkup** | |
| X-03 | Pembuatan konten & bank soal disediakan klien | README (RD1) | — | Konteks | Admin input konten via CMS, bukan generate AI |

### Fitur ambigu / butuh konfirmasi (dari RD 2 & repo)

| ID | Topik | Sumber | Dampak |
|---|---|---|---|
| C-01 | Stack: RD 2 §3.3 menulis **TypeScript + Next.js**; keputusan arsitektur target terbaru menulis **Express + EJS + Tailwind + Vite + Prisma (tanpa Next.js/React/TS)** | RD 2 §3.3 vs instruksi proyek | Menentukan seluruh frontend & build. Saat ini dieksekusi mengikuti **arsitektur target** (keputusan tim terbaru), dokumen RD 2 perlu disinkronkan pada iterasi SRS/SDD berikutnya |
| C-02 | "Sesi audit" dengan status **ACTIVE/CLOSED**, checklist beku selama sesi berjalan, jawaban checklist **YA/TIDAK** | Catatan keputusan meeting; **tidak disebut di RD 2** | Menentukan model data audit. RD 2 hanya menyebut "Checklist Audit" dan "pantau status temuan" |
| C-03 | "Materi pelatihan disusun dalam bentuk **room/kategori**" | Catatan meeting; RD 2 menyebut **kategori program** di katalog (§3.2) | Perlu konfirmasi istilah & hierarki |
| C-04 | E-4: aturan penilaian (tipe soal, bobot, passing grade, batas waktu/percobaan) | README, keputusan terbuka | Menghambat modul F-09/F-10 secara detail |
| C-05 | E-5: alur akun peserta (self-register vs dibuat admin; perlu login peserta atau tidak) | README; RD 2 tidak mewajibkan login peserta | Menghambat modul auth peserta; **default sementara: peserta tanpa login (mengikuti RD 2)** |
| C-06 | E-6: penyimpanan materi (upload file vs URL saja) | README; RD 2 §3.3 "Penyimpanan dokumen dan media" menyebut keduanya | Menentukan infrastruktur storage |
| C-07 | E-07/E-7: format laporan/rekap & format PDF laporan audit | README; RD 2 hanya menyebut "format PDF" | Desain laporan |
| C-08 | Aturan penutupan sesi, pembukaan kembali temuan, retensi data | Catatan meeting; tidak ada di RD 2 | Logika status transisi |
| C-09 | Kriteria penerimaan/UAT spesifik | RD 2 §7.3 hanya menyebut "berita acara UAT" | Belum bisa disusun test case penerimaan final |

---

## 3. Kondisi Repository Aktual

### 3.1 Umum

| Aspek | Kondisi |
|---|---|
| Struktur | npm workspaces monorepo: `apps/api` (Express), `apps/web` (Next.js) |
| Git | Branch `main`, 3 commit, working tree bersih (hanya `.freebuff/` untracked). **Baseline aman.** |
| Lockfile | **Tidak ada** `package-lock.json` |
| Node | engines `>=20`; mesin: Node v24.15.0, npm 11.12.1 |
| node_modules | Belum terpasang saat audit awal (install dijalankan terpisah) |
| Test | **Tidak ada** file test dan tidak ada skrip `test` di package mana pun |
| docs/ | **Tidak ada** sebelum audit ini |
| .env | Tidak ada (hanya `.env.example`); tidak ada rahasia yang dibaca/ditampilkan |
| MySQL | **Tidak tersedia di mesin**: port 3306 tidak listen, CLI `mysql` tidak ada, Docker tidak ada, tidak ditemukan instalasi MySQL/XAMPP/MariaDB di lokasi umum |

### 3.2 apps/api (Express)

| File | Isi | Verifikasi |
|---|---|---|
| `src/server.js` | entrypoint HTTP, listen `API_PORT` | OK |
| `src/app.js` | Express + CORS + JSON + health check `/api/health` + mount 10 router di `/api/v1` + 404 & error handler | OK |
| `src/config/env.js` | baca env (API_PORT, WEB_ORIGIN, DB_*) + default | OK |
| `src/config/db.js` | pool `mysql2`, `pingDb()` | OK (belum pernah terkoneksi — tidak ada DB) |
| `src/middleware/errorHandler.js` | 404 + penangan `ApiError` + 500 fallback | OK |
| `src/middleware/validate.js` | validasi zod body/params/query → 400 dengan detail | OK, tapi **belum dipakai endpoint mana pun** |
| `src/middleware/auth.js` | `attachUser` (noop), `requireAuth` | Placeholder — belum ada mekanisme sesi |
| `src/middleware/rbac.js` | `requireRole('admin'\|'trainer'\|'peserta')` | **Tidak sesuai RD 2** (role harus Admin/Auditor/User) |
| `src/modules/*/router.js` (10 modul) | Komentar deskriptif, **nol route** | Placeholder semua (auth, users, trainings, schedules, registrations, materials, tests, grading, reports, contact) |
| `src/utils/http.js` | `ok()`, `ApiError`, helper error | OK — format respons konsisten |

**Endpoint yang dapat dijalankan:** hanya `GET /api/health` (merespons `db: unavailable` tanpa MySQL) dan 404 bawaan untuk semua `/api/v1/*`.
**Modul RD 2 yang belum ada sama sekali di backend:** Pustaka SOP, CMS, Master Checklist Audit, Checklist Audit, Dashboard Audit, Register Temuan, Laporan PDF, Rating & Ulasan (9 dari 18 fungsi).

### 3.3 apps/web (Next.js)

| File | Isi | Verifikasi |
|---|---|---|
| `app/page.js` | halaman beranda dengan **array data statis contoh** (ISO 9001/14001/45001) | Tampil, bukan data nyata |
| `app/login/page.js` | form login → `POST /auth/login` | **Endpoint tidak ada** → gagal saat dipakai |
| `lib/api.js` | fetch wrapper ke `NEXT_PUBLIC_API_URL` | OK |
| Framework | Next.js 15 App Router, React 19, **JavaScript** (bukan TypeScript) | Berbeda dari target stack |

---

## 4. Klasifikasi: KEEP / REFACTOR / REBUILD / DEFER / CONFIRM

| Komponen | Keputusan | Alasan |
|---|---|---|
| Format respons API (`utils/http.js`), error handler, validator zod, env config, pool mysql2 | **KEEP** | Sesuai target (Express, error konsisten, validasi server-side) |
| Health check `/api/health` | **KEEP** | Sudah berfungsi sesuai rancangan |
| Struktur modul-per-router `apps/api/src/modules/*` | **KEEP** (kerangka) | Pemisahan routing wajar; modul audit baru (SOP, checklist, temuan, dashboard, laporan) akan ditambahkan dengan pola sama |
| Middleware auth/rbac | **REFACTOR` | Ganti role ke `ADMIN/AUDITOR` sesuai N-01; isi mekanisme sesi server-side + cookie aman + hash password |
| Modul lama M1–M10 (trainings, registrations, tests, grading, reports, dll.) | **REFACTOR** | Kerangka & naming berguna; isi endpoint mengikuti ERD baru & prioritas alur audit |
| `apps/web` (Next.js + React) | **REBUILD** | Di luar arsitektur target (EJS + Tailwind + Vite). Halaman hanya contoh statis. Diganti; riwayat lama tetap di Git |
| Login peserta publik | **DEFER** (bukan penghapusan) | RD 2: User akses publik tanpa login; keputusan E-5 masih terbuka. Bukan fitur yang dihapus — memang belum diwajibkan |
| CMS, Dashboard audit, laporan PDF, rating/ulasan, rekap | **TIDAK dihapus** | Semua tertulis di RD 2 (F-05, F-14, F-16, F-11, F-10) — urutan implementasi mengikuti prioritas, bukan penghapusan |
| Pembayaran & sertifikat | **DEFER permanen** | X-01: eksplisit di luar lingkup RD 2 |
| Frontend framework (EJS vs Next.js) | **CONFIRM (C-01)** | Konflik RD 2 vs keputusan arsitektur target; dieksekusi sesuai arsitektur target, dokumen perlu disinkronkan |
| Model sesi audit ACTIVE/CLOSED, YA/TIDAK, snapshot checklist | **CONFIRM (C-02)** | Tidak ada di RD 2; dari catatan meeting. Desain ERD menyediakan model ini dan ditandai menunggu konfirmasi |
| Room/kategori materi (C-03), E-4..E-7, retensi data (C-08), kriteria UAT (C-09) | **CONFIRM** | Menghambat modul terkait, tidak menghambat fondasi |
| Instalasi MySQL / ketersediaan DB development | **CONFIRM (blocker teknis)** | Tidak ada MySQL di mesin; pengujian DB belum bisa dijalankan |

---

## 5. Konflik yang Dicatat (tidak dipilih diam-diam)

1. **Stack (C-01):** RD 2 §3.3 & WBS 6.1 menyebut **TypeScript + Next.js**; instruksi arsitektur target proyek menentukan **Express + EJS + Tailwind + Vite + Prisma, tanpa Next.js/React/TS**. RD 2 sendiri mencatat keputusan teknis "layak bersyarat; perlu pengujian". **Pelaksanaan saat ini mengikuti arsitektur target** (keputusan tim terbaru yang dieksplisitkan dalam instruksi proyek). Tindak lanjut: sinkronkan RD 2/SRS/SDD agar dokumen tidak tertinggal.
2. **Role:** RD 2 = `User, Admin, Auditor`. Kode lama (`rbac.js`, halaman login, README) = `admin, trainer, peserta` (warisan RD 1). **Mengikuti RD 2**; kode lama direfactor.
3. **Istilah audit:** RD 2 memakai "Checklist Audit / Register Temuan / status temuan (Major/Minor/Observasi)"; catatan meeting memakai "sesi audit ACTIVE/CLOSED, jawaban YA/TIDAK, checklist beku saat sesi berjalan, satu jawaban → banyak temuan, idempotensi". RD 2 **tidak menyangkal** ketentuan meeting, tetapi juga tidak menyebutnya → **ERD disusun mendukung ketentuan meeting dan ditandai menunggu konfirmasi klien** (C-02, C-08).
4. **"Room/kategori materi":** catatan meeting memakai istilah *room*; RD 2 memakai *kategori program* pada katalog (§3.2) dan tidak menyebut *room* → dipetakan sementara ke `category` + `program`, ditandai C-03.
5. **Fitur registrasi/quiz/pre-test/post-test:** RD 2 jelas mencakupnya (F-04, F-09, F-10) → **tetap dalam lingkup**; tidak dihapus. Status login peserta tetap terbuka (C-05).
6. **README vs RD 2:** README menyebut "RD1 v0.3.1" dan modul M1–M10 (tanpa modul audit) → README perlu diperbarui setelah fondasi baru berjalan (REFACTOR dokumen).

---

## 6. Arsitektur Aktual vs Target

| Aspek | Aktual (repo) | Target (keputusan terbaru) | Kesesuaian |
|---|---|---|---|
| Backend | Node.js + Express (ESM) | Node.js + Express | ✅ Sesuai |
| Frontend | Next.js 15 (React, JS) | EJS + Tailwind + JS + Vite | ❌ REBUILD |
| Database | MySQL (rencana), **belum ada schema** | MySQL | ⚠️ Belum terealisasi + DB mesin tidak tersedia |
| ORM/Driver | `mysql2` pool manual | Prisma | ❌ Perlu migrasi ke Prisma |
| Autentikasi | Belum ada (placeholder) | Session server-side + cookie aman + hash password + RBAC role | ❌ Belum ada |
| Validasi | Middleware zod (siap, tak terpakai) | Validasi input di server | ⚠️ Siap dipakai |
| Error API | Konsisten (`{success, error}`) | Konsisten | ✅ Sesuai |
| Pemisahan routing/controller/service | Router langsung (belum ada service layer) | Routing / controller / service / DB proporsional | ⚠️ Perlu disusun saat isi modul |

### Rekomendasi rebuild terkontrol

1. **Baseline sudah aman** (Git bersih, 3 commit) → perubahan dapat dibuat tanpa menghapus riwayat.
2. `apps/api` → **dipertahankan & diperluas**: menjadi satu aplikasi Express yang melayani **view EJS + aset Vite/Tailwind + API `/api/v1`** (arsitektur sederhana, mudah dikerjakan tim, tanpa server terpisah yang tidak perlu).
3. `apps/web` (Next.js) → **dihandover/diganti** setelah halaman EJS pertama berjalan; kode lama tetap tersedia di Git (commit `83bb34c`).
4. Tambahkan **Prisma** sebagai ORM (schema dari ERD §7 dokumen ini), migration SQL dihasilkan lebih dulu; **eksekusi migrasi hanya setelah database development tersedia dan diverifikasi**.
5. Urutan implementasi: **Fondasi → Auth/role internal → alur audit inti (F-12/F-13/F-15 + sesi) → materi/SOP → evaluasi/nilai → dashboard/laporan → pelengkap publik.** Urutan ini adalah **rekomendasi teknis**, bukan perubahan requirement.

---

## 7. Status Pengujian Saat Audit

| Uji | Hasil |
|---|---|
| `npm install` (workspaces) | Dijalankan terpisah; lihat PROGRESS.md |
| Startup API | Dijalankan setelah install; lihat PROGRESS.md |
| `GET /api/health` | Dijalankan setelah install; lihat PROGRESS.md |
| Koneksi MySQL | **BELUM BISA** — tidak ada server MySQL di mesin (blocker) |
| Endpoint CRUD | BELUM ADA endpoint |
| Build frontend | BELUM — frontend target belum dibuat |

---

## 8. Keputusan yang Dibutuhkan (spesifik)

1. **MySQL development** (blocker teknis): tersedia di mana / bagaimana cara penyediaannya di mesin ini? (inst lokal, XAMPP, atau MySQL remote) — tanpa ini, pengujian DB tidak bisa dijalankan.
2. **C-01**: konfirmasi sinkronisasi dokumen RD 2 terhadap stack target (EJS/Vite/Prisma) — pelaksanaan mengikuti stack target sampai ada instruksi lain.
3. **C-02**: konfirmasi aturan sesi audit (ACTIVE/CLOSED, checklist beku, YA/TIDAK, idempotensi, penutupan sesi & pembukaan kembali temuan).
4. **C-05 (E-5)**: konfirmasi peserta publik **tanpa login** (mengikuti RD 2) sampai ada keputusan lain.
