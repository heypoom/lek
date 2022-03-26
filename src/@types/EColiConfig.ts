export interface EColiConfig {
  /* Growth rate in reactions per minute */
  growthRate: number

  /** Initial volume in femtoliters */
  volume: number

  /** Randomness factor for cell division */
  division: {
    /** Mean should typically be double the volume (in femtoliters) */
    mean: number

    /** Variance should be between 0 - 1, will affect the fluctuation in cell division logic. */
    variance: number
  }

  /** Diameter in micrometers */
  diameter: number

  /** Pixels per micrometers */
  scale: number
}
