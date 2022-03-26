import {createCell} from '../src/utils/cell'

import {SimulationState} from '../src/@types/simulation/SimulationState'
import {step} from '../src/core/simulation'

describe('cell growth', () => {
  it('should grow the cell over time', () => {
    let state: SimulationState = {cells: [createCell('A')]}
    expect(state.cells[0].volume).toBe(1.57)

    // 20 minutes takes 200 tick, as 1 tick takes 6 seconds
    // (at default of 0.1 minute per tick)
    for (let i = 0; i < 200; i++) state = step(state)

    expect(state.cells[0].volume.toFixed(2)).toBe('3.14')

    state = step(state)
    state = step(state)

    expect(state.cells.length).toBe(2)
    expect(state.cells[0].volume.toFixed(2)).toBe('1.57')
    expect(state.cells[1].volume.toFixed(2)).toBe('1.57')
  })
})
