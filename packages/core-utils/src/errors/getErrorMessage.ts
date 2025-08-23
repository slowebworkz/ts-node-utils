// packages/core-utils/src/errors/getErrorMessage.ts

import { isValidString } from '../utils/index'

/**
 * Extracts a readable message from an unknown error input.
 *
 * @param err - The error input, which can be an Error object, a string, or any other value.
 * @returns A human-readable error message string.
 */
export function getErrorMessage(err: unknown): string {
  if (err instanceof Error && isValidString(err?.message)) {
    return err.message
  } else if (isValidString(err)) {
    return err
  }
  return 'Unknown error'
}
