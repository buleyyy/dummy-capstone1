// Probe the running Sopinsya API (Express) for startup, rendering, routing,
// and async errors. Usage: node scripts/probe-api.mjs [port]   (default 4000)
import http from 'node:http';

const port = Number(process.argv[2] ?? process.env.API_PORT ?? 4000);
const base = `http://127.0.0.1:${port}`;
const results = [];
let failed = false;

const paths = [
  ['/', 'homepage / EJS render'],
  ['/login', 'login EJS render'],
  ['/api/v1/health', 'health check'],
  ['/api/v1/nonexistent', 'unknown /api route'],
  ['/assets/styles.css', 'Vite CSS asset (if bundled)'],
  ['/assets/main.js', 'Vite JS asset (if bundled)'],
  ['/nonexistent', 'unknown static route'],
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function request(pathname, label) {
  return new Promise((resolve, reject) => {
    const url = new URL(base + pathname);
    const req = http.get(url, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const body = Buffer.concat(chunks).toString('utf8');
        resolve({ status: res.statusCode, body, label });
      });
    });
    req.on('error', (err) => reject(err));
    req.setTimeout(5000, () => req.destroy(new Error('request timeout')));
  });
}

async function main() {
  console.log(`Probing http://127.0.0.1:${port} ...`);
  for (const [path, label] of paths) {
    try {
      const res = await request(path, label);
      results.push(`${label}: ${res.status} ${res.body.slice(0, 160)}`);
      console.log(`${label}: ${res.status} ${res.body.slice(0, 160)}`);
      if (res.status < 200 || res.status >= 400) failed = true;
    } catch (err) {
      failed = true;
      results.push(`${label}: ERROR ${err.message}`);
      console.error(`${label}: ERROR ${err.message}`);
    }
  }

  console.log('\n--- SUMMARY ---');
  for (const r of results) console.log(r);
  if (failed) {
    console.error('PROBE FAILED: one or more requests returned an error status.');
    process.exitCode = 1;
  } else {
    console.log('PROBE OK: all probes succeeded.');
  }
}

main().catch((err) => {
  console.error('Probe crashed:', err);
  process.exitCode = 1;
});
