import {nanoid} from 'nanoid'

import {Cell} from '../../src/core/@types'
import {simulationDefaults} from '../../src/core/constants/simulation'

export const createCell = (): Cell => ({
  id: nanoid(),
  volume: simulationDefaults.ecoli.volume,

  x: 0,
  y: 0,
})
