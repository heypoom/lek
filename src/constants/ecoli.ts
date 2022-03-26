import {EColiConfig} from '../@types/EColiConfig'

export const ecoliDefaults: EColiConfig = {
  growthRate: 0.0346574,
  volume: 1.57,

  division: {
    mean: 3.14,
    variance: 0.005,
  },

  diameter: 1,
  scale: 10,
}
