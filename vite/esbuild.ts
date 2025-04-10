// vite/build.ts

import type { ESBuildOptions } from 'vite'

const tsconfigRaw: ESBuildOptions['tsconfigRaw'] = {} // empty disables type checking

const esbuild: ESBuildOptions = {
  tsconfigRaw
}

export default esbuild
