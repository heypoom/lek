import {Cell} from '../Cell'

import {Random} from '../../utils/random'

export interface SimulationState {
  cells: Cell[]

  /** Stateful random number generator. */
  rng: Random
}
