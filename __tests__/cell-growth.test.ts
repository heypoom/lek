import {step} from '../src/core/simulation'
import {createCell} from '../src/utils/cell'

import {simulationDefaults} from '../src/constants/simulation'

import {SimulationState} from '../src/@types/simulation/SimulationState'
import {SimulationConfig} from '../src/@types/simulation/SimulationConfig'

describe('cell growth', () => {
  it('should grow the cell over time', () => {
    const config: SimulationConfig = {...simulationDefaults, seed: 'testing'}

    let state: SimulationState = {cells: [createCell('A')]}
    expect(state.cells[0].volume).toBe(1.57)

    // 20 minutes takes 200 tick, as 1 tick takes 6 seconds
    // (at default of 0.1 minute per tick)
    for (let i = 0; i < 200; i++) state = step(state, config)

    expect(state.cells[0].volume.toFixed(2)).toBe('3.14')

    // Proceed an additional 6 iterations (to account for variance)
    // n = 5, fluctuation ~= 0.045
    for (let i = 0; i < 6; i++) state = step(state, config) //?

    expect(state.cells.length).toBe(2)
    expect(state.cells[0].volume.toFixed(2)).toBe('1.60')
    expect(state.cells[1].volume.toFixed(2)).toBe('1.59')
  })
})
