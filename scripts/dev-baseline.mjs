// Dev baseline: starts the Sopinsya Express API and probes its routes.
// Usage: node scripts/dev-baseline.mjs [port]   (default 4000)
import http from 'node:http';
import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const pkgPath = path.resolve(root, 'package.json');
const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf8'));
const port = Number(process.argv[2] ?? process.env.API_PORT ?? 4000);

function request(url, label) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = http.get(parsed, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8'), label }));
    });
    req.on('error', reject);
    req.setTimeout(5000, () => req.destroy(new Error(`request timeout for ${label}`)));
  });
}

async function main() {
  console.log(`[dev-baseline] cwd=${root}`);
  console.log(`[dev-baseline] workspace=${pkg.name}@${pkg.version} (type=${pkg.type})`);
  console.log(`[dev-baseline] port=${port}`);

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
      probe.close();
    });
  });

  if (!ready) {
    console.error('[dev-baseline] server did not listen on 127.0.0.1:', port);
    console.log('--- server output ---');
    console.log(out.join(''));
    server.kill('SIGTERM');
    process.exit(1);
  }

  const base = `http://127.0.0.1:${port}`;
  for (const [url, label] of [
    [base, 'homepage'],
    [base + '/login', 'login'],
    [base + '/api/v1/health', 'health'],
  ]) {
    try {
      const res = await request(url, label);
      console.log(`[dev-baseline] ${label}: ${res.status} ${res.body.slice(0, 120)}`);
    } catch (err) {
      console.error(`[dev-baseline] ${label}: ERROR ${err.message}`);
    }
  }

  server.kill('SIGTERM');
  process.exit(0);
}

main().catch((err) => {
  console.error('[dev-baseline] fatal:', err.message);
  process.exit(1);
});
