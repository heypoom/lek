function createSeeder(seed: string): () => number {
  for (var i = 0, h = 1779033703 ^ seed.length; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }

  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)

    return (h ^= h >>> 16) >>> 0
  }
}

export class Random {
  state: number
  seeder: () => number

  constructor(seed: string) {
    this.seeder = createSeeder(seed)
    this.state = this.seeder()
  }

  random() {
    this.state += 0x6d2b79f5

    let t = this.state

    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  int = (min: number, max: number) => Math.floor(this.random() * max) + min

  float = (min: number, max: number) =>
    (max - min) * 0.0001 * (this.random() % 10000) + min

  exponential = (lambda: number) => -Math.log(this.float(0.0001, 1)) / lambda
}
