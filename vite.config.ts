// ./vite.config.ts

import { defineConfig } from 'vite';

import build from './vite/build';
import esbuild from './vite/esbuild';

export default defineConfig({
  plugins: [],
  build,
  esbuild,
});