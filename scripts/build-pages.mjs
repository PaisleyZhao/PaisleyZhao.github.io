import { execFileSync } from 'node:child_process';
import { cp, mkdir, writeFile, readFile, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destination = process.argv[2];
if (!destination) throw new Error('Provide an empty output directory.');
const output = path.resolve(root, destination);
try {
  await lstat(output);
  throw new Error('Output directory already exists; provide a new empty path.');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

execFileSync(process.execPath, [path.join(root, 'scripts', 'build-en.mjs')], { cwd: root, stdio: 'inherit' });
execFileSync(process.execPath, [path.join(root, 'scripts', 'build-en.mjs'), '--check'], { cwd: root, stdio: 'inherit' });

// Only tracked website files enter the public artifact.
const files = execFileSync('git', ['ls-files', '-z'], { cwd: root }).toString().split('\0').filter(Boolean);
const publicFiles = files.filter(file =>
  /^(assets|covers|moments|news)\//.test(file) ||
  /^[^/]+\.(html|js|css|ico)$/.test(file) ||
  ['CNAME', '.nojekyll', 'robots.txt', 'sitemap.xml'].includes(file));
await mkdir(output, { recursive: true });
for (const file of publicFiles) {
  const source = path.join(root, file);
  if (!(await lstat(source)).isFile()) throw new Error(`Expected a regular public file: ${file}`);
  const target = path.join(output, file);
  await mkdir(path.dirname(target), { recursive: true });
  await cp(source, target);
}
await mkdir(path.join(output, 'en'), { recursive: true });
await cp(path.join(root, 'en', 'index.html'), path.join(output, 'en', 'index.html'));
// New content gets a new URL, so both entries avoid stale browser script caches.
const versions = {};
for (const name of ['copy.js', 'data.js']) {
  versions[name] = createHash('sha256').update(await readFile(path.join(output, name))).digest('hex').slice(0,12);
}
for (const file of ['index.html', 'en/index.html']) {
  const target = path.join(output, file);
  let html = await readFile(target, 'utf8');
  for (const [name, version] of Object.entries(versions)) {
    const marker = `src="${name}"`;
    if (html.split(marker).length !== 2) throw new Error(`Expected one ${name} reference in ${file}`);
    html = html.replace(marker, `src="${name}?v=${version}"`);
  }
  await writeFile(target, html);
}
await writeFile(path.join(output, '.nojekyll'), '');
console.log(`Prepared ${publicFiles.length + 1} website files. Both entries share copy.js and data.js.`);
