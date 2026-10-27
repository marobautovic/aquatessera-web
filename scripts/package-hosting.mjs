import { mkdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

mkdirSync('release', { recursive: true });
const target = resolve('release/aquatessera-web.zip');
rmSync(target, { force: true });
execFileSync('zip', ['-r', target, '.'], { cwd: 'dist', stdio: 'inherit' });
console.log(`Hosting package: ${target}`);
