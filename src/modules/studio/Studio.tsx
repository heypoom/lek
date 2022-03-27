import 'twin.macro'
import {Renderer} from '../renderer'
import {useSimulation} from '../simulation'

export const Studio = () => {
  const {state, options, step, add} = useSimulation()

  const {cells = []} = state

  return (
    <div tw="max-w-4xl mx-auto">
      <div tw="min-h-screen flex flex-col justify-center space-y-3">
        <Renderer {...{state, options}} />

        <div tw="flex space-x-1">
          {cells.map((cell) => (
            <div
              style={{width: 10, height: cell.volume * 15}}
              tw="bg-purple-500"
            />
          ))}
        </div>

        <button onClick={() => step(1)}>Step Once</button>
        <button onClick={() => step(10)}>Step 10</button>
        <button onClick={() => step(50)}>Step 50</button>
        <button onClick={() => step(100)}>Step 100</button>

        <button onClick={add}>Add Cell</button>

        <code tw="text-xs whitespace-pre">
          {JSON.stringify(state, null, 2)}
        </code>

        {/* <code tw="text-xs whitespace-pre">
          {JSON.stringify(options, null, 2)}
        </code> */}
      </div>
    </div>
  )
}
