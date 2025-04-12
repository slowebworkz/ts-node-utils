// vite/plugins/swc/endsWith.ts

import type { MinTwoCharString } from 'types-library'

export function isTS<T extends string = MinTwoCharString>(id: T): boolean {
  return id.endsWith('.ts') || id.endsWith('.tsx')
}

export function isJSX<T extends string = MinTwoCharString>(id: T): boolean {
  return id.endsWith('x')
}
