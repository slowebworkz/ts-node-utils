// packages/core-utils/src/errors/getErrorMessage.ts

/**
 * Extracts a readable message from an unknown error input.
 *
 * @param err - The error input, which can be an Error object, a string, or any other value.
 * @returns A human-readable error message string.
 */
export function getErrorMessage(err: unknown): string {
  if (err instanceof Error && err?.message) {
    return err.message;
  } else if (typeof err === 'string') {
    return err;
  }
  return 'Unknown error';
}
