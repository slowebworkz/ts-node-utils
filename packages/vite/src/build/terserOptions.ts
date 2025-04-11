// vite/build/terserOptions.ts

import type { BuildEnvironmentOptions } from 'vite'

const compress = {
  drop_console: false
} as const;

const mangle = {
  // Prevent mangling of function names
  reserved: ['logError'], // Add function names you want to protect here
};

const output = {
  // Control the output structure
  beautify: true, // Beautify the output for readability
} as const;

const terserOptions: NonNullable<BuildEnvironmentOptions['terserOptions']> = {
  compress,
  mangle,
  output
};

export default terserOptions;