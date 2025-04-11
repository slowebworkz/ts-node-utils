// vite/plugins/swc-transform.ts

import { transform } from '@swc/core';

import { decorators, sourceMaps, target } from './swc/constants';
import { isJSX, isTS } from './swc/endsWith';

import type { Plugin, TransformResult } from 'vite'

async function swcCoreTransform(
  code: string,
  id: string,
): Promise<TransformResult | null> {
  if (!/\.(j|t)sx?$/.test(id)) return null

  const syntax = `${isTS(id) ? 'type' : 'ecma'}script` as const

  const parser = {
    syntax,
    tsx: isTS(id) && isJSX(id),
    jsx: !isTS(id) && isJSX(id),
    decorators,
  } as const

  const jsc = {
    parser,
    target,
  } as const

  const swcOptions: NonNullable<Parameters<typeof transform>[1]> = {
    filename: id,
    sourceMaps,
    jsc,
  } as const

  const result = await transform(code, swcOptions)

  return {
    code: result.code as TransformResult['code'],
    map: result.map as unknown as TransformResult['map'],
  } as TransformResult
}

export function swcTransformPlugin(): Plugin {
  const name = 'vite:swc-transform' as const
  const enforce = 'pre' as const

  return {
    name,
    enforce,

    transform: swcCoreTransform,
  }
}
