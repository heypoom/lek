import {merge} from 'lodash'
import {PartialDeep} from 'type-fest'

import {Random} from './random'

import {simulationDefaults} from '../constants/simulation'

import {SimulationState} from '../@types/simulation/SimulationState'
import {SimulationOptions} from '../@types/simulation/SimulationOptions'

const DEFAULT_SEED = 'hackerhouse'

type Options = PartialDeep<SimulationOptions> & {
  state?: Partial<SimulationState>
}

export const createSimulation = (options: Options = {}) => {
  const rand = new Random(options.seed ?? DEFAULT_SEED)

  const state: SimulationState = {cells: [], rand, ...options.state}
  const config: SimulationOptions = merge(simulationDefaults, options)

  return {state, config}
}
