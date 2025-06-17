// scripts/dev.mjs
import { exec } from 'child_process';
import { platform } from 'os';

const url = 'http://localhost:3001';

let openCmd = '';
if (platform() === 'darwin') openCmd = `open -a "Google Chrome" ${url}`;
else if (platform() === 'win32') openCmd = `start chrome ${url}`;
else openCmd = `xdg-open ${url}`;

exec('next dev -p 3001', { shell: true });
setTimeout(() => exec(openCmd, { shell: true }), 2000);
