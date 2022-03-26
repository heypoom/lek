import {Cell} from '../Cell'
import {Random} from '../../utils/random'

export interface SimulationState {
  cells: Cell[]
  rand: Random
}
