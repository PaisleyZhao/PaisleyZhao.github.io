import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = await readFile(path.join(root, 'index.html'), 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(await readFile(path.join(root, 'copy.js'), 'utf8'), context, { timeout: 1000 });
const title = context.window.COPY?.en?.['meta.title'];
if (!title || /[<>]/.test(title)) throw new Error('A plain English page title is required.');

function replaceOnce(html, pattern, replacement) {
  if ([...html.matchAll(pattern)].length !== 1) throw new Error(`Expected one template marker: ${pattern}`);
  return html.replace(pattern, replacement);
}

let english = replaceOnce(source, /<html\s+lang="[^"]+">/g, '<html lang="en" data-lang="en">');
english = replaceOnce(english, /<head>/g, '<head>\n<base href="../">');
english = replaceOnce(english, /<title>[^<]*<\/title>/g, () => `<title>${title.replaceAll('&', '&amp;')}</title>`);
english = replaceOnce(english, /<script src="copy\.js"><\/script>/g,
  '<script>window.FORCE_LANG=\'en\';</script>\n<script src="copy.js"></script>');

const output = path.join(root, 'en', 'index.html');
if (process.argv.includes('--check')) {
  if (await readFile(output, 'utf8') !== english) throw new Error('English entry is out of sync. Run scripts/build-en.sh.');
  console.log('English entry matches the main template.');
} else {
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, english);
  console.log('Generated English entry from the main template.');
}
