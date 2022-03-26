import {cell} from '../src/utils/cell'

import {SimulationState} from '../src/@types/simulation/SimulationState'
import {step} from '../src/core/simulation'

describe('cell growth', () => {
  it('should grow the cell over time', () => {
    let state: SimulationState = {cells: [cell('A')]}
    expect(state.cells[0].volume).toBe(1.57)

    // 0.1 minute per tick
    // 1 tick = 6 seconds
    // 20 minutes = 200 tick
    for (let i = 0; i < 200; i++) state = step(state)

    expect(state.cells[0].volume.toFixed(2)).toBe('3.14')
  })
})
