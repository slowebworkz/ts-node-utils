// ./vite.config.ts

import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const name = "utils" as const;

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name
    },
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: [
        {
          name,
          format: 'iife',
          assetFileNames: '[name].[ext]', // This will place assets in the root of the dist directory
          entryFileNames: '[name].js', // This will place entry files in the root of the dist directory
          chunkFileNames: '[name].js', // This will place chunk files in the root of the dist directory
        }
      ],
    },
  },
  esbuild: {
    tsconfigRaw: {} // empty disables type checking
  },
});