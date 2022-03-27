import {ecoliDefaults} from './ecoli'

import {SimulationOptions} from '../@types/simulation/SimulationOptions'

export const simulationDefaults: SimulationOptions = {
  ecoli: ecoliDefaults,
  minutePerTick: 0.02,
}
