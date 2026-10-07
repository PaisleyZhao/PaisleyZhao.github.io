import { execFileSync } from 'node:child_process';
import { cp, mkdir, writeFile, lstat } from 'node:fs/promises';
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
await writeFile(path.join(output, '.nojekyll'), '');
console.log(`Prepared ${publicFiles.length + 1} website files. Both entries share copy.js and data.js.`);
