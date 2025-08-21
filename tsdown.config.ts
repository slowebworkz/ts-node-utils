import { defineConfig } from 'tsdown'
import entryPoints from './src/getEntryPoints';

export default defineConfig((options) => {
  return {
    entry: entryPoints,
    splitting: false,
    sourcemap: true,
    clean: true,
    format: ['esm', 'cjs'],
    target: 'node20',
    minify: !options?.watch,
    external: ['node:path', 'fs', 'os'],
    platform: 'neutral',
    dts: true,
  }
})
