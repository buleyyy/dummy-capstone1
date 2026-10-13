const katalogContoh = [
  { judul: 'ISO 9001 — Sistem Manajemen Mutu', jenis: 'Pelatihan BNSP / Non-BNSP' },
  { judul: 'ISO 14001 — Sistem Manajemen Lingkungan', jenis: 'Pelatihan BNSP / Non-BNSP' },
  { judul: 'ISO 45001 — Sistem Manajemen K3', jenis: 'Pelatihan BNSP / Non-BNSP' },
];

export default function HomePage() {
  return (
    <>
      <h1>Sopinsya — Pelatihan &amp; Konsultasi DMP</h1>
      <p className="muted">
        Portal pelatihan BNSP dan Non-BNSP: informasi pelatihan, pendaftaran, materi,
        pre-test/post-test, dan rekap nilai dalam satu website.
      </p>

      <section className="card">
        <h2>Katalog Pelatihan</h2>
        <p className="muted">
          Daftar di bawah ini contoh tampilan. Data sebenarnya menyusul dari modul
          katalog (F-01) pada Fase 3.
        </p>
        <ul>
          {katalogContoh.map((k) => (
            <li key={k.judul}>
              <strong>{k.judul}</strong> <span className="muted">— {k.jenis}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Konsultasi</h2>
        <p className="muted">
          Informasi kontak dan tautan WhatsApp akan tampil di sini (modul kontak, F-12).
        </p>
      </section>
    </>
  );
}
