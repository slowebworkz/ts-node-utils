// packages/file-utils/src/info/checkAccess.ts

import { access } from 'node:fs/promises';

import { isValidString, logError } from '@core/index';

/**
 * Attempts to access the file at the given path.
 * @param path The path to check.
 * @returns A boolean indicating whether the file exists.
 */
export async function checkAccess(path: string): Promise<boolean> {
  try {
    if (isValidString(path)) {
      await access(path);
      return true;
    }
  } catch(err) {
    logError(err);
  }

  return false;
}