// packages/file-utils/src/info/fileExists.ts

import { isValidString } from '@core/index';

import { checkAccess } from './checkAccess';

/**
 * Checks if a file exists at the given path.
 * @param path The path to check.
 * @returns A Promise resolving to a boolean indicating whether the file exists.
 */
export async function existsAsync(path: unknown): Promise<boolean> {
  if (!isValidString(path)) {
    throw new TypeError('Path must be a string.');
  }

  return await checkAccess(path);
}
