import path from 'path'
import * as fs from 'fs/promises'
import extractZip from 'extract-zip'
const debug = require('debug')('train-location-and-visitors-server:loaders/gtfs')

export const extractGTFS = async () => {
  await fs.access('./gtfs')
  const files = await fs.readdir('./gtfs')
  if (files.length === 0) {
    throw new Error('No files in gtfs folder')
  }
  for (const file of files) {
    if (!file.endsWith('.zip')) {
      debug(`Skipping invalid gtfs file ${file}`)
      continue
    }
    const destDir = path.resolve(`./gtfs/${file.replace('.zip', '')}`)
    debug(`Extracting ${file} to ${destDir}`)
    await extractZip(`./gtfs/${file}`, { dir: destDir })
    debug(`Finished extracting ${file}`)
  }
}
