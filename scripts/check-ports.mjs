// Check which process owns a TCP port locally. Usage: node scripts/check-ports.mjs [port]  (default 4000)
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const port = Number(process.argv[2] ?? process.env.API_PORT ?? 4000);

function sh(args) {
  return execFileSync('bash', ['-c', args.join(' ')], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
}

function parseNetstat(netstatOut) {
  const rows = [];
  for (const line of netstatOut.split('\n')) {
    const m = line.match(/^\s*TCP\s+([\d\.:]+\d+)\s+([\d\.:]+\d+)\s+(LISTEN|TIME_WAIT|ESTABLISHED|CLOSE_WAIT)\s*$/);
    if (!m) continue;
    const [, local, foreign, state] = m;
    rows.push({ local, foreign, state });
  }
  return rows;
}

function tryCommand(cmd, args, execTypes) {
  try {
    return execFileSync(cmd, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    if (execTypes.includes('stdout')) return err.stdout ?? '';
    if (execTypes.includes('stderr')) return err.stderr ?? '';
    return '';
  }
}

async function main() {
  const netstatOut = tryCommand('netstat', ['-an'], ['stdout']);
  const ssOut = tryCommand('ss', ['-ltnp'], ['stdout']);
  const lsofOut = tryCommand('lsof', ['-i', `:${port}`], ['stdout', 'stderr']);
  const fuserOut = tryCommand('fuser', [`${port}/tcp`], ['stdout', 'stderr']);

  console.log(`Port ${port} checks:`);
  console.log(`  netstat: ${netstatOut.trim() ? 'available' : 'not available'}`);
  console.log(`  ss: ${ssOut.trim() ? 'available' : 'not available'}`);
  console.log(`  lsof: ${lsofOut.trim() ? 'available' : 'not available'}`);
  console.log(`  fuser: ${fuserOut.trim() ? fuserOut.trim() : 'not available'}`);

  const rows = parseNetstat(netstatOut);
  const local = rows
    .filter((r) => r.local.endsWith(`:${port}`) || r.local === `[::]:${port}`)
    .map((r) => r.state)
    .join(', ');

  if (rows.some((r) => r.local.endsWith(`:${port}`) && r.state === 'LISTEN')) {
    console.log(`  Port ${port} is LISTENING in netstat.`);
  } else {
    console.log(`  Port ${port} is not LISTENING in netstat.`);
  }

  if (existsSync('/proc')) {
    console.log('\n  /proc scan:');
    try {
      const pids = await readdir('/proc');
      for (const pid of pids) {
        if (!/^\d+$/.test(pid)) continue;
        const cmdline = join('/proc', pid, 'cmdline');
        if (!existsSync(cmdline)) continue;
        const raw = await readFile(cmdline, 'utf8');
        const cmd = raw.replace(/\0/g, ' ').trim();
        if (cmd.includes('node') || cmd.includes('npm')) {
          console.log(`    pid ${pid}: ${cmd}`);
        }
      }
    } catch (err) {
      console.log(`    /proc scan failed: ${err.message}`);
    }
  }

  if (fuserOut.trim()) {
    console.log(`\n  fuser output: ${fuserOut.trim()}`);
  }
}

main().catch((err) => {
  console.error('Check failed:', err);
  process.exit(1);
});
