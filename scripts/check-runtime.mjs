// Dev runtime for the Sopinsya API (Express). Usage:
//   node scripts/check-runtime.mjs [port]   (default 4000)
// Attempts to start `node src/server.js` in apps/api and probe /
// /login and /api/v1/health. Exits non-zero if startup or any probe fails.
import http from 'node:http';
import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const pkgPath = path.resolve(root, 'package.json');
const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf8'));

function request(url, label, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = http.get(parsed, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8'), label }));
    });
    req.on('error', reject);
    req.setTimeout(timeoutMs, () => req.destroy(new Error(`request timeout for ${label}`)));
  });
}

async function main() {
  const port = Number(process.argv[2] ?? process.env.API_PORT ?? 4000);
  if (port < 1 || port > 65535) {
    throw new Error(`invalid API port: ${port}`);
  }

  console.log(`[runtime] cwd=${root}`);
  console.log(`[runtime] workspace=${pkg.name}@${pkg.version} (type=${pkg.type})`);
  console.log(`[runtime] script=${pkg.scripts?.dev ?? 'dev'}`);
  console.log(`[runtime] port=${port}`);

  const server = spawn(process.execPath, [path.resolve(root, 'apps/api/src/server.js')], {
    cwd: root,
    env: { ...process.env, NODE_ENV: 'development' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  const out = [];
  server.stdout.on('data', (chunk) => out.push(String(chunk)));
  server.stderr.on('data', (chunk) => out.push(String(chunk)));

  const ready = await new Promise((resolve) => {
    const timer = setTimeout(() => resolve(false), 12000);
    const onError = (err) => {
      clearTimeout(timer);
      reject(err);
    };
    server.once('error', onError);
    server.once('exit', (code, signal) => {
      clearTimeout(timer);
      reject(new Error(`server exited code=${code} signal=${signal}`));
    });
    const probe = http.createServer((_req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('ready');
      probe.close(() => resolve(true));
    });
    probe.listen(port, '127.0.0.1');
    probe.on('error', () => {
      // Target port already serving; keep probing the real server.
      probe.close();
    });
  });

  if (!ready) {
    console.error('[runtime] server did not listen on 127.0.0.1:', port);
    console.log('--- server output ---');
    console.log(out.join(''));
    server.kill('SIGTERM');
    process.exit(1);
  }

  const base = `http://127.0.0.1:${port}`;
  const probes = [
    [`${base}/api/v1/health`, 'health'],
    [`${base}/`, 'homepage'],
    [`${base}/login`, 'login'],
  ];

  for (const [url, label] of probes) {
    try {
      const res = await request(url, label);
      console.log(`[runtime] ${label}: ${res.status} ${res.body.slice(0, 140)}`);
    } catch (err) {
      console.error(`[runtime] ${label}: ERROR ${err.message}`);
    }
  }

  server.kill('SIGTERM');
  process.exit(0);
}

main().catch((err) => {
  console.error('[runtime] fatal:', err.message);
  process.exit(1);
});
