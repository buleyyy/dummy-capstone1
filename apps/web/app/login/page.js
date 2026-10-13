'use client';

import { useState } from 'react';
import { apiFetch } from '@/lib/api';

/**
 * Halaman masuk untuk tiga peran: admin, trainer, peserta.
 * Peran ditentukan oleh akun (server), bukan dipilih di form —
 * sesuai RD1 F-04. Alur pembuatan akun masih menunggu keputusan E-5,
 * jadi endpoint auth sendiri diisi pada Fase 2.
 */
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      // Arah setelah masuk (per peran) ditentukan pada Fase 2.
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <h1>Masuk</h1>
      <p className="muted">
        Gunakan akun yang diberikan admin. Tersedia untuk peran admin, trainer, dan peserta.
      </p>
      <form className="login" onSubmit={onSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </label>
        <label>
          Kata sandi
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </label>
        <button type="submit" disabled={busy}>
          {busy ? 'Memproses…' : 'Masuk'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
}
