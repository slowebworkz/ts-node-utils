// vite.config.ts

import { defineConfig } from 'vite'
import nodeResolve from 'vite-plugin-resolve'

import { build, esbuild } from './packages/vite/index'

export default defineConfig({
  plugins: [nodeResolve({})],
  build,
  esbuild,
  ssr: {
    noExternal: true, // or fine-tune this
    external: ['node:path'], // critical line
  },
})
