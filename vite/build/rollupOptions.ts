// vite/build/rollupOptions.ts

// import { toCommonJs } from '../../packages/file-utils';
import { assetFileNames, chunkFileNames, entryFileNames, name } from './constants';

import type { BuildEnvironmentOptions } from 'vite';
import type { ExternalOption } from 'rollup';

/* const iife = {
  name,
  format: 'iife',
  assetFileNames,
  entryFileNames: toCommonJs(entryFileNames),
  chunkFileNames: toCommonJs(chunkFileNames)
} as const; */

const esm = {
  name,
  format: 'esm',
  assetFileNames,
  entryFileNames,
  chunkFileNames
} as const;

const external: ExternalOption = ['node:path', 'fs', 'os'] as const;

const rollupOptions: BuildEnvironmentOptions['rollupOptions'] = {
  output: [esm],
  external, // don't bundle built-ins
};

export default rollupOptions;