import {nanoid} from 'nanoid'

import {Cell} from '../@types/Cell'

import {simulationDefaults} from '../constants/simulation'

export const createCell = (id = nanoid(), ctx = simulationDefaults): Cell => ({
  id,
  volume: ctx.ecoli.volume,
})
