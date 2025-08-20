// packages/core-utils/src/errors/logError.ts

import { getErrorMessage } from 'core-utils/src/errors/getErrorMessage'

const { console } = globalThis

/**
 * Logs a standardized error message to the console.
 *
 * @param err - The error to log.
 */
export function logError(err: unknown, prefix: string = `❌`): void {
  const message = getErrorMessage(err)
  console.warn(`${prefix} ${message}`)
}
