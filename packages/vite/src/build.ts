// vite/build.ts
import { resolve } from 'node:path'

import { emptyOutDir, minify, name, outDir, target } from './build/constants'
import rollupOptions from './build/rollupOptions'
import terserOptions from './build/terserOptions'

import type { BuildEnvironmentOptions } from 'vite'

const lib: BuildEnvironmentOptions['lib'] = {
  entry: resolve(__dirname, '..', 'index.ts'),
  name,
}

export const build: BuildEnvironmentOptions = {
  lib,
  target,
  outDir,
  emptyOutDir,
  terserOptions,
  rollupOptions,
  minify,
}
