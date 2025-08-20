import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  target: 'node18',
  minify: !options.watch,
  noExternal: [],
  external: ['node:path', 'fs', 'os'],
  esbuildOptions(options, context) {},
}))
