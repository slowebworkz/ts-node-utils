import entryPoints from '../src/getEntryPoints';
import { $ } from 'bun';

const packageBuilds = entryPoints
  .filter(path => path.startsWith('packages/'))
  .map(path => path.split('/')[1]) // get package name
  .map(pkg => $`bun run build --cwd packages/${pkg}`);

await Promise.all(packageBuilds);
