import { format, parse } from 'node:path'

import { logError, getErrorMessage } from 'core-utils/src/errors'

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
    logError(`Error converting filename "${filename}": ${getErrorMessage(err)}`)
  }

  return filename
}
