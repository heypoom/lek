import {useAtom} from 'jotai'
import {step} from '../../core'

import {
  addCellAtom,
  simulationOptionsAtom,
  simulationStateAtom,
  stepSimulationAtom,
} from '../../store/simulation'

export function useSimulation() {
  const [state] = useAtom(simulationStateAtom)
  const [options, setOption] = useAtom(simulationOptionsAtom)

  const [, step] = useAtom(stepSimulationAtom)
  const [, add] = useAtom(addCellAtom)

  return {state, options, step, add}
}
