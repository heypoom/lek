import {simulationDefaults} from '../constants/simulation'

import {Cell} from '../@types/Cell'
import {SimulationState} from '../@types/simulation/SimulationState'
import {createCell} from '../utils/cell'
import {nanoid} from 'nanoid'

export function step(
  state: SimulationState,
  config = simulationDefaults
): SimulationState {
  let cells: Cell[] = []

  for (const cell of state.cells) {
    const volumeLimit = config.ecoli.volume * 2

    if (cell.volume > volumeLimit) {
      // TODO: calculate variance in cell division
      const volumeA = cell.volume / 2
      const volumeB = cell.volume / 2

      cells.push({...cell, volume: volumeA})
      cells.push({id: nanoid(), volume: volumeB})

      continue
    }

    // TODO: add randomness factor into minute per tick
    const volume =
      cell.volume + config.ecoli.growthRate * config.minutePerTick * cell.volume

    cells.push({...cell, volume})
  }

  return {
    cells,
  }
}
