import {SimulationContext} from '../@types'

export const rate = (k: number, ctx: SimulationContext) => {
  const A = k * ctx.options.minutePerTick
  const B = ctx.state.rand.int(0, 100000) / 100000

  return A > B
}
