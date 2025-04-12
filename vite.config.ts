// vite.config.ts

import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import nodeResolve from 'vite-plugin-resolve';

import { build, esbuild } from './vite/index';

export default defineConfig({
  plugins: [nodeResolve({}), eslint()],
  build,
  esbuild,
  ssr: {
    noExternal: true, // or fine-tune this
    external: ['node:path'], // critical line
  },
})
