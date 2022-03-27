import {ecoliDefaults} from './ecoli'

import {SimulationOptions} from '../@types/simulation/SimulationOptions'

export const DEFAULT_SEED = 'hackerhouse'

export const simulationDefaults: SimulationOptions = {
  ecoli: ecoliDefaults,
  minutePerTick: 0.02,
  seed: DEFAULT_SEED,
}
