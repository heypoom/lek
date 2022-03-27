import {rate} from '../src/utils/rate'
import {createSimulation} from '../src/utils/state'

function bench(k: number) {
  const ctx = createSimulation()
  let a = 0
  let b = 0

  for (let i = 0; i < 1000; i++) rate(k, ctx) ? a++ : b++

  return [a, b]
}

describe('rate function', () => {
  it.each([
    [1, [27, 973]],
    [0.8, [20, 980]],
    [0.2, [3, 997]],
    [0.1, [1, 999]],
  ])('should compute rate(k)', (k, expected) => {
    const [a, b] = bench(k)

    expect(a < b).toBe(true)
    expect([a, b]).toStrictEqual(expected)
  })
})
