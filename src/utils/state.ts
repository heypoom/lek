import {merge} from 'lodash'
import {PartialDeep} from 'type-fest'

import {Random} from './random'

import {simulationDefaults} from '../constants/simulation'

import {SimulationOptions, SimulationState, SimulationContext} from '../@types'

const DEFAULT_SEED = 'hackerhouse'

type Options = PartialDeep<SimulationOptions> & {
  state?: Partial<SimulationState>
}

export const createSimulation = (config: Options = {}): SimulationContext => {
  const rng = new Random(config.seed ?? DEFAULT_SEED)

  return {
    state: {cells: [], rng, ...config.state},
    options: merge(simulationDefaults, config),
  }
}
