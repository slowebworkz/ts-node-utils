// packages/core-utils/src/utils/isValidString.ts

/**
 * Checks if the provided str is a valid string with non-zero length after trimming.
 * @param str The string to check.
 * @returns A boolean indicating whether the string is valid (non-empty and not just whitespace).
 */
export function isValidString(str: unknown): str is string {
  return typeof str === 'string' && str.trim().length > 0;
}
