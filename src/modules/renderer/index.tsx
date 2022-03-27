import {Mesh} from 'three'
import React, {useRef, useState} from 'react'
import {Canvas, MeshProps, useFrame} from '@react-three/fiber'

import {SimulationOptions, SimulationState} from '../../core/@types'
import {heightOf} from '../../core/utils/ecoli'

interface RendererProps {
  state: SimulationState
  options: SimulationOptions
}

interface CellProps extends MeshProps {
  height: number
}

function Box(props: CellProps) {
  const {height, ...meshProps} = props

  const mesh = useRef<Mesh>()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    if (!mesh.current) return

    // mesh.current.rotation.x += 0.01
  })

  return (
    <mesh
      {...meshProps}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <cylinderGeometry args={[0.1, 0.1, height, 32]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export const Renderer = (props: RendererProps) => {
  const {state, options} = props

  console.log(state.rng.float(0, 2))

  return (
    <Canvas style={{width: '100%', height: '500px'}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {state.cells.map((cell) => (
        <Box
          key={cell.id}
          position={[cell.x, cell.y, 0]}
          height={heightOf(cell.volume, options)}
        />
      ))}
    </Canvas>
  )
}
