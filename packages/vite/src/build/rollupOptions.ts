// vite/build/rollupOptions.ts

import { assetFileNames, chunkFileNames, entryFileNames, name } from './constants';

import type { BuildEnvironmentOptions } from 'vite';

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

const rollupOptions: BuildEnvironmentOptions['rollupOptions'] = {
  output: [esm]
};

export default rollupOptions;