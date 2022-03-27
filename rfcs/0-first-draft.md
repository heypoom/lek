# Sample API

```ts
import {createSimulation, createCell} from 'lek'

const { state, options } = createSimulation({chemostat: true, minutesPerTick: 0.1})
options.ecoli.division = {mean: 2, variance: 0.002}

const cell = createCell({
	x: 0,
	y: 0,

	tick(cell) {
		// Divide the cell if the volume exceeds.
		if (cell.volume > 3.14) cell.divide()
	})
})

state.cells.push(cell)
```

# Data Structure

```ts
Simulation({
  cells: {
    A: {
      x: 0,
      y: 0,

      tick(cell) {
        if (cell.rate === 1 && cell.volume > 3.14) cell.divide()
      },

      // Shorthand: when to divide?
      divide: (cell) => cell.rate === 1 && cell.volume > 3.14,
    },
  },
})
```

# Molecular Biology

```ts
// Set the GFP (Green Fluorescent Protein) to 1000
// Affects the color of the cell
cell.proteins.gfp = 1000
```

# Proposal: ECS Model (Entity-Component-System)

- Each micro-organism (e.g. an e-coli) is an Entity

  - They can have data on it (e.g. location, amount of proteins) which is a Component

- The interpreter to subdivide the cells, distribute proteins and run tick updates is a System

- Runtime should separate the tick update function in each micro-organism to run as separate systems targeting that micro-organism id (entity id), so we can parallelize the computation

# Global Systems

Sequence: tick update function -> cellular division -> protein distribution

- Tick Update

  - Each cell will have programmable behaviour. We can run this in parallel.
  - Decision: Skip or Divide
    - Explicit divide (or return true/false)

- Cellular Sub-division

  - Cells will be sub-divided on every tick

- Protein Distribution
  - Parent and Daughter should split the proteins

# Routine on each cell

System that operates on all Cell entity.

```
Cell grows at a constant rate
	Growth stops once it doubled in volume
  Then the cell divides itself,
	  producing 2 cells of approx. same size with small randomness factor
    one of them is parent, one of them is daughter
```
