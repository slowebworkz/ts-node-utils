// vite/build/rollupOptions.ts

import type { BuildEnvironmentOptions } from 'vite'

import { name } from './constants';

const assetFileNames = '[name].[ext]' as const; // This will place assets in the root of the dist directory
const entryFileNames = '[name].cjs' as const; // This will place entry files in the root of the dist directory
const chunkFileNames = '[name].cjs' as const; // This will place chunk files in the root of the dist directory

const iife = {
  name,
  format: 'iife',
  assetFileNames,
  entryFileNames,
  chunkFileNames
} as const;

const esm = {
  ...iife,
  entryFileNames: entryFileNames.replace(/\.cjs/, '.js'),
  chunkFileNames: chunkFileNames.replace(/\.cjs/, '.js'),
  format: 'esm',
} as const;

const rollupOptions: BuildEnvironmentOptions['rollupOptions'] = {
  output: [esm, iife]
};

export default rollupOptions;