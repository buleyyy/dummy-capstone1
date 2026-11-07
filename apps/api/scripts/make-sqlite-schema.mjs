// Menurunkan schema SQLite dari schema MySQL kanonis.
// Dipakai untuk pengembangan lokal tanpa server MySQL (SRS tetap menetapkan MySQL).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, '../prisma/schema.prisma');
const out = path.join(here, '../prisma/schema.sqlite.prisma');

const ENUMS = [
  'Role',
  'MaterialType',
  'EvaluationType',
  'SessionStatus',
  'AnswerValue',
  'FindingCategory',
  'FindingStatus',
];

let schema = fs.readFileSync(src, 'utf8');

// SQLite tidak mendukung enum Prisma: hapus blok enum, ganti tipe kolomnya String.
const enumValues = new Map();
for (const name of ENUMS) {
  const re = new RegExp(`enum ${name} \\{[^}]*\\}`);
  const block = schema.match(re);
  if (block) {
    enumValues.set(
      name,
      block[0]
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('enum ') && line !== '}'),
    );
  }
  schema = schema.replace(re, '');
  schema = schema.replace(new RegExp(`\\b${name}\\b`, 'g'), 'String');
}

// Nilai default enum harus berupa string pada kolom String.
for (const values of enumValues.values()) {
  for (const value of values) {
    const bare = value.replace(/\/\/.*$/, '').trim();
    if (!bare) continue;
    schema = schema.replace(
      new RegExp(`@default\\(${bare}\\)`, 'g'),
      `@default("${bare}")`,
    );
  }
}

schema = schema.replace('provider = "mysql"', 'provider = "sqlite"');
schema = schema.replace(/@db\.[A-Za-z]+(\([^)]*\))?/g, '');
schema = schema.replace(/Json\?/g, 'String?');
schema = schema.replace(/\n{3,}/g, '\n\n');
schema = schema.replace(
  'generator client {',
  'generator client {\n  output = "../generated/sqlite-client"',
);

fs.writeFileSync(
  out,
  `// AUTO-GENERATED dari prisma/schema.prisma oleh scripts/make-sqlite-schema.mjs.\n// Jangan edit manual. Hanya untuk pengembangan lokal tanpa MySQL.\n\n${schema}`,
);

console.log(`SQLite schema ditulis: ${path.relative(process.cwd(), out)}`);
if (enumValues.size) {
  for (const [name, values] of enumValues) {
    console.log(`  enum ${name}: ${values.join(', ')}`);
  }
}
