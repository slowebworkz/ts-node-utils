import { readFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'

const validTargets = [
  'es3',
  'es5',
  'es6',
  'es2015',
  'es2016',
  'es2017',
  'es2018',
  'es2019',
  'es2020',
  'es2021',
  'es2022',
  'esnext',
  'node',
  'node16',
  'node18',
] as const

type TsTarget = (typeof validTargets)[number]
const validTargetsSet = new Set<TsTarget>(validTargets)

type TsConfig = {
  compilerOptions?: {
    target?: TsTarget
    [key: string]: unknown
  }
  [key: string]: unknown
}

// Keeping only one implementation of readJsonFileAsync
export async function readJsonFileAsync<T>(
  filePath: string,
  encoding: BufferEncoding = 'utf-8',
): Promise<T> {
  const content = await readFile(filePath, encoding)
  return parseJson(content, filePath) as T
}

export function readJsonFileSync<T>(
  filePath: string,
  encoding: BufferEncoding = 'utf-8',
): T {
  const content = readFileSync(filePath, encoding)
  return parseJson(content, filePath) as T
}

async function readTsConfig<T = TsConfig>(configPath: string): Promise<T> {
  return readJsonFileAsync<T>(configPath, 'utf-8')
}
function readTsConfigSync<T = TsConfig>(configPath: string): T {
  return readJsonFileSync<T>(configPath, 'utf-8')
}

function extractTarget(tsconfig: TsConfig): TsTarget {
  const target = tsconfig.compilerOptions?.target
  return target && validTargetsSet.has(target) ? target : 'node18'
}

function parseJson(content: string, filePath: string): unknown {
  try {
    return JSON.parse(content)
  } catch (err) {
    throw new Error(
      `Failed to parse JSON at ${filePath}: ${(err as Error).message}`,
    )
  }
}

export async function getTsConfigTarget(configPath: string): Promise<TsTarget> {
  const tsconfig = await readTsConfig<Partial<TsConfig>>(configPath)
  return extractTarget(tsconfig)
}

export function getTsConfigTargetSync(configPath: string): TsTarget {
  const tsconfig = readTsConfigSync<Partial<TsConfig>>(configPath)
  return extractTarget(tsconfig)
}
