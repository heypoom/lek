import {Random} from './random'

import {SimulationState} from '../@types/simulation/SimulationState'

interface Options extends Partial<SimulationState> {
  seed: string
}

export const createSimulation = (options: Options): SimulationState => {
  const {seed, ...state} = options

  return {
    cells: [],
    rand: new Random(seed),
    ...state,
  }
}
