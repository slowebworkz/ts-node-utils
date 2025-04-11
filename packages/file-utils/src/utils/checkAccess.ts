// packages/file-utils/src/utils/checkAccess.ts

import { access } from 'node:fs/promises';

import { logError } from '@slowebworkz/core-utils';

/**
 * Attempts to access the file at the given path.
 * @param path The path to check.
 * @returns A boolean indicating whether the file exists.
 */
async function checkAccess(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch (err) {
    logError(err);
    return false;
  }
}

export default checkAccess