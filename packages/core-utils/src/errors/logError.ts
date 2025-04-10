// packages/core-utils/src/errors/logError.ts

const { console } = globalThis;

import { getErrorMessage } from './getErrorMessage';

/**
 * Logs a standardized error message to the console.
 *
 * @param err - The error to log.
 */
export function logError(err: unknown, prefix: string = `❌`): void {
  const message = getErrorMessage(err);
  console.warn(`${prefix} ${message}`);
}
