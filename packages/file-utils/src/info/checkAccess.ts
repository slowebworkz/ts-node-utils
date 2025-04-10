// packages/file-utils/src/info/checkAccess.ts

import { access } from 'node:fs/promises';

import { isValidString } from '../../../core-utils/index';

/**
 * Attempts to access the file at the given path.
 * @param path The path to check.
 * @returns A boolean indicating whether the file exists.
 */
async function checkAccess(path: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    if (!isValidString(path)) {
      reject(false);
    }

    access(path).then(() => resolve(true)).catch(() => reject(false))
  });
}

export { checkAccess };