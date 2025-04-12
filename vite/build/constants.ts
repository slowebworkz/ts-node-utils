// vite/build/constants.ts

export const name = 'utils' as const;

export const target = 'node18' as const;

export const ssr = true as const;

export const outDir = 'dist' as const;

export const emptyOutDir = true as const;

export const minify = false as const;

export const preserveModules = false as const;

export const inlineDynamicImports = true as const;

// This will place assets in the root of the dist directory
export const assetFileNames = '[name].[ext]' as const;
// This will place entry files in the root of the dist directory
export const entryFileNames = '[name].cjs' as const;
// This will place chunk files in the root of the dist directory 
export const chunkFileNames = '[name].cjs' as const;