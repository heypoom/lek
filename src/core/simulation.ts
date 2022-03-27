import {nanoid} from 'nanoid'

import {Cell, SimulationState} from '../@types'

import {simulationDefaults} from '../constants/simulation'

export function step(
  state: SimulationState,
  options = simulationDefaults
): SimulationState {
  const {rng} = state

  let cells: Cell[] = []

  for (const cell of state.cells) {
    const fluctuation =
      Math.floor(rng.random() * 10) * 0.01 - options.ecoli.division.variance

    const cellDivisionThreshold = options.ecoli.division.mean + fluctuation

    if (cell.volume > cellDivisionThreshold) {
      // Reduce the cell volumn by how much. Range: 0 - 0.55.
      const reductionRatio = 0.5 + 0.1 * (rng.random() - 0.5)

      // Distribute the cell volume across parent and daughter
      const parentVolumn = reductionRatio * cell.volume
      const daughterVolumn = (1 - reductionRatio) * cell.volume

      // Parent's Cell (me)
      cells.push({...cell, volume: parentVolumn})

      // Daughter's Cell
      cells.push({id: nanoid(), volume: daughterVolumn})

      continue
    }

    // Minute per tick with a small randomness factor.
    const dt = rng.exponential(1 / options.minutePerTick)

    // Grow the cell to be larger in volume, according to the growth rate.
    const volume = cell.volume + options.ecoli.growthRate * dt * cell.volume

    cells.push({...cell, volume})
  }

  return {cells, rng: rng}
}
