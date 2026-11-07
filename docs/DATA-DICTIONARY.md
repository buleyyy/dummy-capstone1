# DATA DICTIONARY — Sopinsya (draft, 20 Okt 2026)

Pasangan dokumen: [ERD.md](ERD.md). Konvensi: `id` BIGINT AI PK; `created_at`/`updated_at` TIMESTAMP (waktu server, UTC); ENUM dicatat sesuai MySQL — nilai sah dicantumkan. ⏳ = menunggu konfirmasi (kode C/E di [PROJECT-AUDIT.md](PROJECT-AUDIT.md) §2).

## 1. internal_user — akun area internal (F-06, F-18, N-01)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| name | VARCHAR(120) | no | | |
| email | VARCHAR(190) | no | UNIQUE | login |
| password_hash | VARCHAR(255) | no | | bcrypt/argon2 — **tidak pernah** disimpan polos |
| role | ENUM('ADMIN','AUDITOR') | no | | sesuai RD 2 N-01 |
| is_active | BOOLEAN | no | default true | penonaktifan akun |
| created_at / updated_at | TIMESTAMP | no | | |

## 2. session — sesi login server-side (N-01: session + cookie aman)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | CHAR(64) | no | PK | token acak; cookie menyimpan token mentah, DB menyimpan hash |
| user_id | BIGINT | no | FK → internal_user | ON DELETE CASCADE |
| expires_at | TIMESTAMP | no | | masa berlaku sesi |
| created_at | TIMESTAMP | no | | |

## 3. category — kategori program (F-02; "room" ⏳ C-03)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| name | VARCHAR(120) | no | | |
| slug | VARCHAR(140) | no | UNIQUE | |
| sort_order | INT | no | default 0 | urutan tampil |

## 4. program — program pelatihan (F-02, F-03)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| category_id | BIGINT | yes | FK → category | null = tanpa kategori |
| slug | VARCHAR(160) | no | UNIQUE | |
| title | VARCHAR(200) | no | | |
| cover_url | VARCHAR(500) | yes | | gambar cover (F-02) |
| description | TEXT | yes | | deskripsi program |
| meeting_url | VARCHAR(500) | yes | | tautan Zoom/Meet (N-04) |
| is_published | BOOLEAN | no | default false | kontrol CMS (F-05) |
| created_at / updated_at | TIMESTAMP | no | | |

## 5. registration — pendaftaran peserta (F-04; tanpa login ⏳ C-05)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| program_id | BIGINT | no | FK → program | |
| full_name | VARCHAR(120) | no | | |
| email | VARCHAR(190) | no | | |
| phone | VARCHAR(30) | yes | | |
| company | VARCHAR(160) | yes | | instansi/perusahaan |
| notes | TEXT | yes | | |
| created_at | TIMESTAMP | no | | |

> Tidak ada kolom status pendaftaran: RD 2 tidak menentukan alur seleksi. Jika klien menghendaki alur (diterima/ditolak), tambah setelah konfirmasi.

## 6. material — materi pembelajaran (F-07; storage ⏳ E-6)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| program_id | BIGINT | no | FK → program | |
| type | ENUM('MODUL','STUDI_KASUS','VIDEO','DOKUMEN') | no | | jenis materi (F-03/F-07) |
| title | VARCHAR(200) | no | | |
| url | VARCHAR(500) | yes | | tautan eksternal (mis. YouTube — N-04) |
| file_path | VARCHAR(500) | yes | | upload file ⏳ menunggu E-6 |
| sort_order | INT | no | default 0 | |
| is_published | BOOLEAN | no | default true | |
| created_at / updated_at | TIMESTAMP | no | | |

> CHECK: `url IS NOT NULL OR file_path IS NOT NULL` — setiap materi punya minimal satu sumber.

## 7. sop_document — Pustaka SOP (F-08)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| code | VARCHAR(40) | no | UNIQUE | kode dokumen SOP |
| title | VARCHAR(200) | no | | |
| version | VARCHAR(30) | no | default '1.0' | |
| url | VARCHAR(500) | no | | tautan/lokasi dokumen |
| is_published | BOOLEAN | no | default false | "jika dipublikasikan" (F-08) |
| created_at / updated_at | TIMESTAMP | no | | |

## 8. program_sop — relasi program ↔ SOP (F-08)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| program_id | BIGINT | no | PK, FK → program | |
| sop_id | BIGINT | no | PK, FK → sop_document | |

## 9. evaluation — pre-test / post-test / kuis (F-09; aturan ⏳ E-4)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| program_id | BIGINT | no | FK → program | |
| type | ENUM('PRE_TEST','POST_TEST','QUIZ') | no | | |
| title | VARCHAR(200) | no | | |
| instructions | TEXT | yes | | |
| is_published | BOOLEAN | no | default false | |
| created_at / updated_at | TIMESTAMP | no | | |

## 10. question — soal (F-09; detail ⏳ E-4)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| evaluation_id | BIGINT | no | FK → evaluation | |
| sort_order | INT | no | | |
| text | TEXT | no | | |
| options | JSON | yes | | daftar opsi (pilihan ganda) ⏳ E-4 |
| correct_answer | VARCHAR(500) | yes | | kunci jawaban ⏳ E-4 |
| score | INT | no | default 1 | bobot soal ⏳ E-4 |

## 11. attempt — pengerjaan evaluasi (F-10; identitas ⏳ E-5)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| evaluation_id | BIGINT | no | FK → evaluation | |
| registration_id | BIGINT | yes | FK → registration | pengerja terdaftar |
| taker_name | VARCHAR(120) | yes | | identitas mandiri (tanpa akun) |
| taker_email | VARCHAR(190) | yes | | |
| started_at | TIMESTAMP | no | default now | |
| submitted_at | TIMESTAMP | yes | | null = belum selesai |
| score | INT | yes | | hasil pengolahan nilai (F-10) |

## 12. attempt_answer — jawaban per soal (F-10)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| attempt_id | BIGINT | no | FK → attempt, **UNIQUE(attempt_id, question_id)** | idempotensi submit |
| question_id | BIGINT | no | FK → question | |
| answer | VARCHAR(500) | yes | | jawaban peserta |
| is_correct | BOOLEAN | yes | | dihitung server terhadap `correct_answer` |

## 13. program_review — rating & ulasan (F-11)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| program_id | BIGINT | no | FK → program | |
| reviewer_name | VARCHAR(120) | no | | tanpa akun (C-05) |
| rating | TINYINT | no | CHECK 1–5 | |
| comment | TEXT | yes | | |
| created_at | TIMESTAMP | no | | |

## 14. checklist_category — kategori master checklist (F-12)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| name | VARCHAR(120) | no | | |
| sort_order | INT | no | default 0 | |

## 15. checklist_question — pertanyaan pemeriksaan (F-12)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| category_id | BIGINT | no | FK → checklist_category | |
| code | VARCHAR(40) | no | UNIQUE | kode butir |
| text | TEXT | no | | pertanyaan pemeriksaan |
| is_active | BOOLEAN | no | default true | butir nonaktif tak dipakai sesi baru |
| created_at / updated_at | TIMESTAMP | no | | |

## 16. audit_session — sesi audit ⏳ (C-02)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| code | VARCHAR(40) | no | UNIQUE | kode sesi |
| title | VARCHAR(200) | no | | objek pemeriksaan |
| auditor_id | BIGINT | no | FK → internal_user | pelaksana |
| status | ENUM('ACTIVE','CLOSED') | no | default ACTIVE | aturan meeting ⏳ C-02 |
| started_at | TIMESTAMP | no | default now | |
| closed_at | TIMESTAMP | yes | | terisi saat CLOSED |
| closed_by | BIGINT | yes | FK → internal_user | |
| created_at / updated_at | TIMESTAMP | no | | |

## 17. session_question — snapshot checklist dalam sesi ⏳ (C-02)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| session_id | BIGINT | no | FK → audit_session, UNIQUE(session_id, checklist_question_id) | |
| checklist_question_id | BIGINT | no | FK → checklist_question | jejak butir asal |
| code | VARCHAR(40) | no | | salinan kode saat sesi dibuat |
| text | TEXT | no | | salinan teks — **beku selama sesi berjalan** |
| sort_order | INT | no | | |

## 18. session_answer — jawaban YA/TIDAK ⏳ (C-02)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| session_question_id | BIGINT | no | **UNIQUE**, FK → session_question | 1 jawaban per butir; jawab ulang = update (idempotensi) |
| answer | ENUM('YA','TIDAK') | no | | keputusan meeting ⏳ C-02 |
| answered_by | BIGINT | no | FK → internal_user | |
| answered_at | TIMESTAMP | no | default now | |

## 19. finding — Register Temuan (F-15)

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| id | BIGINT AI | no | PK | |
| code | VARCHAR(40) | no | UNIQUE | identitas unik temuan (mis. FND-0001) |
| session_id | BIGINT | no | FK → audit_session | |
| session_answer_id | BIGINT | yes | FK → session_answer | 1 jawaban → n temuan ⏳ C-02 |
| category | ENUM('MAJOR','MINOR','OBSERVASI') | no | | persis RD 2 §3.2 F-15 |
| description | TEXT | no | | uraian temuan |
| status | ENUM('OPEN','CLOSED') | no | default OPEN | ⏳ C-08 nilai final & aturan buka-tutup |
| request_id | CHAR(36) | yes | UNIQUE | idempotensi kirim ulang (meeting) |
| created_by | BIGINT | no | FK → internal_user | |
| created_at / updated_at | TIMESTAMP | no | | |

## 20. setting — konfigurasi sistem (F-18) — DEFER

| Kolom | Tipe | Null | Constraint | Keterangan |
|---|---|---|---|---|
| key | VARCHAR(80) | no | PK | |
| value | TEXT | no | | |
| updated_at | TIMESTAMP | no | | |

> Dibuat hanya jika modul Pengaturan Sistem (F-18) diimplementasikan; jangan diisi dengan rahasia (password/secret → environment).
