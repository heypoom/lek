import {step} from '../src/core/simulation'
import {createCell} from '../src/utils/cell'

import {createSimulation} from '../src/utils/state'

describe('cell growth', () => {
  it('should grow the cell over time', () => {
    let {state, options} = createSimulation()
    state.cells.push(createCell())

    // Check the default volumn of the cell.
    expect(state.cells[0].volume).toBe(1.57)

    // Proceed 114 ticks.
    for (let i = 0; i < 114; i++) state = step(state, options)

    // Check if the cell is not yet divided.
    expect(state.cells.length).toBe(1)

    // Check if the volume before division is almost at the division threshold
    const volumeBeforeDivision = state.cells[0].volume
    expect(volumeBeforeDivision.toFixed(3)).toBe('3.148')

    // Advance an iteration to trigger cell division.
    // Expect the cells to split up.
    state = step(state, options)
    expect(state.cells.length).toBe(2)

    // Check parent cell's volumn
    const parent = state.cells[0].volume
    expect(parent.toFixed(3)).toBe('1.593')

    // Check daughter cell's volumn
    const daughter = state.cells[1].volume
    expect(daughter.toFixed(3)).toBe('1.555')

    // Parent and daughter volumn should add up to the volumn before the cell division.
    expect(parent + daughter).toBe(volumeBeforeDivision)
  })
})
