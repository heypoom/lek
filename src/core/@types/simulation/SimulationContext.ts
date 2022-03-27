import {SimulationState} from './SimulationState'
import {SimulationOptions} from './SimulationOptions'

export interface SimulationContext {
  state: SimulationState
  options: SimulationOptions
}
