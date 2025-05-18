import * as fs from 'fs/promises'
import path from 'path'

export const cacheDir = path.resolve('./.cache')

export const loadJsonCached = async (name: string, url: string, timeoutSeconds: number): Promise<any> => {
  const fileName = path.resolve(cacheDir, `${name}.json`)
  const lastUpdated = await fs.stat(fileName).catch(() => null).then(stat => stat?.mtime)
  if (lastUpdated && Date.now() - lastUpdated.getTime() < timeoutSeconds * 1000) {
    return JSON.parse(await fs.readFile(fileName, 'utf8'))
  }
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`${response.url}: ${response.status} ${response.statusText}`);
  }
  const json = await response.json()
  await fs.mkdir(cacheDir, {recursive: true})
  await fs.writeFile(fileName, JSON.stringify(json))
  return json
}
