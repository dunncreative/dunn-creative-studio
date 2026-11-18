#!/usr/bin/env node
// Downloads every remote image referenced in src/content/work/*.md into public/work/<slug>/.
// It rewrites nothing: the entries keep their remote URLs until someone switches them by hand
// (or in a follow-up PR) to /work/<slug>/<file>.
//
// Usage: node scripts/fetch-work-images.mjs [--dry-run]
import { readdir, readFile, mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const contentDir = path.join(root, 'src/content/work');
const outDir = path.join(root, 'public/work');
const dryRun = process.argv.includes('--dry-run');

const urlRe = /https:\/\/images\.squarespace-cdn\.com\/[^\s"')]+/g;

function fileNameFor(url) {
  const u = new URL(url);
  const base = decodeURIComponent(u.pathname.split('/').pop() || 'image');
  return base.replace(/[^A-Za-z0-9._-]+/g, '-');
}

const files = (await readdir(contentDir)).filter((f) => f.endsWith('.md'));
let ok = 0, skipped = 0, failed = 0;
for (const f of files) {
  const slug = f.replace(/\.md$/, '');
  const text = await readFile(path.join(contentDir, f), 'utf8');
  const urls = [...new Set(text.match(urlRe) ?? [])];
  if (!urls.length) continue;
  const dir = path.join(outDir, slug);
  if (!dryRun) await mkdir(dir, { recursive: true });
  for (const url of urls) {
    const dest = path.join(dir, fileNameFor(url));
    const rel = path.relative(root, dest);
    try { await access(dest); console.log(`skip  ${rel} (exists)`); skipped++; continue; } catch {}
    if (dryRun) { console.log(`would ${url} -> ${rel}`); continue; }
    try {
      // Ask for the original format (Squarespace serves WebP to browsers that accept it).
      const res = await fetch(url, { headers: { Accept: 'image/png,image/jpeg,image/*;q=0.8' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      await writeFile(dest, Buffer.from(await res.arrayBuffer()));
      console.log(`saved ${rel}`);
      ok++;
    } catch (err) {
      console.error(`FAIL  ${url}: ${err.message}`);
      failed++;
    }
  }
}
console.log(`\n${ok} saved · ${skipped} already there · ${failed} failed`);
if (failed) process.exitCode = 1;
