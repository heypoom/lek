import {atom} from 'jotai'
import {clone} from 'lodash'
import {nanoid} from 'nanoid'

import {createSimulation, step} from '../core'

const defaults = createSimulation()

export const simulationStateAtom = atom(defaults.state)
export const simulationOptionsAtom = atom(defaults.options)

export const simulationContextAtom = atom((get) => ({
  state: get(simulationStateAtom),
  options: get(simulationOptionsAtom),
}))

export const stepSimulationAtom = atom(
  null,
  (get, set, iteration: number = 1) => {
    let state = clone(get(simulationStateAtom))
    const options = get(simulationOptionsAtom)

    for (let i = 0; i < iteration; i++) state = step(state, options)

    set(simulationStateAtom, state)
  }
)

export const addCellAtom = atom(null, (get, set, update) => {
  const state = get(simulationStateAtom)
  const options = get(simulationOptionsAtom)

  const cell = {
    id: nanoid(),
    volume: options.ecoli.volume,

    x: 0,
    y: 0,
  }

  set(simulationStateAtom, {
    ...state,
    cells: [...state.cells, cell],
  })
})
