import {EColiConfig} from '../EColiConfig'

export interface SimulationConfig {
  ecoli: EColiConfig

  // Minute per tick (delta time)
  minutePerTick: number

  // Seed to feed into the random-number generator (RNG)
  seed: string
}
