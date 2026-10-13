const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1';

/**
 * Klien API standar untuk seluruh halaman/komponen.
 * credentials: 'include' agar cookie sesi (httpOnly) ikut dikirim —
 * mekanisme sesi sendiri menyusul pada Fase 2 (keputusan E-5).
 */
export async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(options.headers ?? {}) },
    ...options,
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const message = body?.error?.message ?? `Permintaan gagal (HTTP ${res.status})`;
    throw new Error(message);
  }
  return body?.data;
}
