import {nanoid} from 'nanoid'

import {intRNG, rng} from '../utils/random'
import {simulationDefaults} from '../constants/simulation'

import {Cell} from '../@types/Cell'
import {SimulationState} from '../@types/simulation/SimulationState'

export function step(
  state: SimulationState,
  config = simulationDefaults
): SimulationState {
  let cells: Cell[] = []

  const rand = rng(config.seed)
  const randomInt = () => Math.floor(rand() * 10)

  for (const cell of state.cells) {
    const fluctuation = randomInt() * 0.01 - config.ecoli.division.variance
    const cellDivisionThreshold = config.ecoli.division.mean + fluctuation

    if (cell.volume > cellDivisionThreshold) {
      // Reduce the cell volumn by how much. Range: 0 - 0.55.
      const reductionRatio = 0.5 + 0.1 * (rand() - 0.5)

      // Distribute the cell volume across parent and daughter
      const parentVolumn = reductionRatio * cell.volume
      const daughterVolumn = (1 - reductionRatio) * cell.volume

      // Parent's Cell (me)
      cells.push({...cell, volume: parentVolumn})

      // Daughter's Cell
      cells.push({id: nanoid(), volume: daughterVolumn})

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
