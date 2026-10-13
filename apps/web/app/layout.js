import './globals.css';

export const metadata = {
  title: 'Sopinsya — Pelatihan & Konsultasi DMP',
  description: 'Website pelatihan dan konsultasi Sopinsya (Capstone PPSI Kelompok 01)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <header className="site-header">
          <a href="/" className="brand">Sopinsya</a>
          <nav>
            <a href="/login">Masuk</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
