import {nanoid} from 'nanoid'

import {Cell} from '../@types/Cell'

import {simulationDefaults} from '../constants/simulation'

export const cell = (id = nanoid(), ctx = simulationDefaults): Cell => ({
  id,
  volume: ctx.ecoli.volume,
})
