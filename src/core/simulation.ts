import {simulationDefaults} from '../constants/simulation'

import {SimulationState} from '../@types/simulation/SimulationState'

export function step(
  state: SimulationState,
  config = simulationDefaults
): SimulationState {
  return {
    cells: state.cells.map((cell) => {
      // TODO: add randomness factor into minute per tick
      const volume =
        cell.volume +
        config.ecoli.growthRate * config.minutePerTick * cell.volume

      return {
        ...cell,
        volume,
      }
    }),
  }
}
