// Dev runner / probe for the Sopinsya API.
// Starts `node --watch src/server.js` in apps/api exactly like
// `npm run dev --workspace apps/api`, then waits until the Express app
// answers, and finally probes /api/v1/health, /, /login, and unknown routes.
// Usage: node scripts/serve-api.js [port]   (default 4000)
import http from 'node:http';
import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const pkgPath = path.resolve(root, 'package.json');
const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf8'));

function spawnDev(projectRoot) {
  return new Promise((resolve, reject) => {
    const env = { ...process.env, NODE_ENV: 'development' };
    const child = spawn(
      process.execPath,
      [path.resolve(projectRoot, 'src', 'server.js')],
      { cwd: projectRoot, env, stdio: ['ignore', 'inherit', 'inherit'] }
    );
    child.on('error', reject);
    child.on('exit', (code, signal) => {
      if (code !== 0 && signal !== 'SIGTERM') {
        reject(new Error(`dev exited with code ${code} signal ${signal}`));
      } else {
        resolve(child);
      }
    });
  });
}

function request(url, label, timeoutMs = 6000) {
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

async function waitReady(port, timeoutMs = 12000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const probe = http.createServer((_req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('probe ok');
      probe.close(() => {
        resolve(true);
      });
    });
    probe.listen(port, '127.0.0.1', () => {
      probe.close(() => {
        reject(new Error(`port ${port} already serving`));
      });
    });
    probe.on('error', (err) => {
      if (Date.now() - start >= timeoutMs) {
        reject(new Error(`port ${port} not listening after ${timeoutMs}ms`));
      } else {
        setTimeout(() => resolve(false), 150);
      }
    });
  });
}

async function main() {
  const port = Number(process.argv[2] ?? process.env.API_PORT ?? 4000);
  if (port < 1 || port > 65535) {
    throw new Error(`invalid API port: ${port}`);
  }

  console.log(`[serve-api] cwd=${root}`);
  console.log(`[serve-api] workspace=${pkg.name}@${pkg.version} (type=${pkg.type})`);
  console.log(`[serve-api] script=${pkg.scripts?.dev ?? 'dev'}`);
  console.log(`[serve-api] port=${port}`);
  console.log('[serve-api] launching: node --watch src/server.js');

  const dev = await spawnDev(root);
  const ready = await waitReady(port);
  if (!ready) {
    throw new Error(`dev server did not listen on 127.0.0.1:${port}`);
  }
  console.log(`[serve-api] listening on http://127.0.0.1:${port}`);

  const probe = http.createServer();
  probe.once('request', async (_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('probe ok');
    try {
      const health = await request(`http://127.0.0.1:${port}/api/v1/health`, 'health');
      console.log(`[probe] health: ${health.status} ${health.body.slice(0, 200)}`);
      const homepage = await request(`http://127.0.0.1:${port}/`, 'homepage');
      console.log(`[probe] homepage: ${homepage.status} ${homepage.body.slice(0, 160)}`);
      const login = await request(`http://127.0.0.1:${port}/login`, 'login page');
      console.log(`[probe] login: ${login.status} ${login.body.slice(0, 120)}`);
      const unknown = await request(`http://127.0.0.1:${port}/api/v1/nonexistent`, 'unknown api');
      console.log(`[probe] unknown api: ${unknown.status} ${unknown.body.slice(0, 120)}`);
      probe.close();
      dev.kill('SIGTERM');
      process.exit(0);
    } catch (err) {
      console.error('[probe] request error:', err.message);
      probe.close();
      dev.kill('SIGTERM');
      process.exit(1);
    }
  });
  probe.listen(port, '127.0.0.1');
}

main().catch((err) => {
  console.error('[serve-api] fatal:', err.message);
  process.exit(1);
});
