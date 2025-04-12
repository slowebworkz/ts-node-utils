// vite/build.ts

import type { ESBuildOptions } from 'vite'

const tsconfigRaw: ESBuildOptions['tsconfigRaw'] = {} // empty disables type checking

export const esbuild: ESBuildOptions = {
  tsconfigRaw,
}
