import {ecoliDefaults} from './ecoli'

import {SimulationConfig} from '../@types/simulation/SimulationConfig'

export const simulationDefaults: SimulationConfig = {
  ecoli: ecoliDefaults,
  minutePerTick: 0.1,
}
