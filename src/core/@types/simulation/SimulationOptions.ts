import {EColiConfig} from '../EColiConfig'

export interface SimulationOptions {
  // Configures the RNG seed.
  seed: string

  // Configures the e-coli's behaviour
  ecoli: EColiConfig

  // Minute per tick (delta time)
  minutePerTick: number
}
