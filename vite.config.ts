// vite.config.ts

import { defineConfig } from 'vite'

import { build, esbuild } from './packages/vite/index'

export default defineConfig({
  plugins: [
    /* swcTransformPlugin() */
  ],
  build,
  esbuild,
})
