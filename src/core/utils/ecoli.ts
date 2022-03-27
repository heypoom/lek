import {PI} from '../constants/numbers'

import {simulationDefaults} from '../constants/simulation'

/*
 * Gets the estimated height of the e-coli cylinder, based on the volume.
 * Resolve using the cylinder formula (V = Pi R^2 h)
 * L = V / (1/4 * PI * D**2)
 **/
export const heightOf = (volume: number, {ecoli} = simulationDefaults) =>
  volume / (0.25 * PI * ecoli.diameter ** 2)

export const volume = (length: number, {ecoli} = simulationDefaults) =>
  PI * ecoli.diameter ** 2 * length * 0.25
