import { format, parse } from 'node:path';

import { logError } from '@slowebworkz/core-utils';

import type { MinTwoCharString } from 'types-library'

export function toCommonJs<T extends string = MinTwoCharString>(
  filename: T,
): string {
  try {
    const parsed = parse(filename)

    if (parsed.ext === '.js') {
      return format({ ...parsed, base: undefined, ext: '.cjs' })
    }
  } catch (err) {
    logError(err)
  }

  return filename
}
