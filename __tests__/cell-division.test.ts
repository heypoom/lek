import {step} from '../src/core/simulation'
import {createCell} from '../src/utils/cell'

import {createSimulation} from '../src/utils/state'

describe('cell division', () => {
  it.each([
    [1, [2, 8, 30, 93]],
    [2, [4, 16, 60, 185]],
  ])('should divide into multiple cells', (cellCount, expected) => {
    let {state, options} = createSimulation()
    for (let i = 0; i < cellCount; i++) state.cells.push(createCell())

    function iterate(iterations: number) {
      for (let i = 0; i < iterations; i++) state = step(state, options)
    }

    for (let i = 0; i < expected.length; i++) {
      iterate(200)
      expect(state.cells.length).toBe(expected[i])
    }
  })
})
