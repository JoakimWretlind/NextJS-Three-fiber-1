import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
// import { Box } from '@react-three/drei'
import { MeshWobbleMaterial } from '@react-three/drei'

// to help us ccale individual items
import { useSpring, a } from "@react-spring/three";

export const SpinningMesh = ({ position, args, color, speed }) => {
    const mesh = useRef(null)
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

    const [expand, setExpand] = useState(false)

    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    })

    return (
        <>
            <a.mesh // the a will turn it to an animated component (see the import from @react-spring/three)
                onClick={() => setExpand(!expand)}
                scale={props.scale}
                position={position}
                ref={mesh}
                castShadow
                receiveShadow
            >
                <boxBufferGeometry attach='geometry' args={args} />
                <MeshWobbleMaterial
                    color={color}
                    speed={speed} // how fast it will wobble
                    attach='material'
                    factor={0.6} // how much it will wobble
                />
                {/* <meshStandardMaterial attach='material' color={color} /> */}
            </a.mesh>
            {/* <mesh>
            <circleBufferGeometry attach='geometry' args={[1, 100]} />
            <meshStandardMaterial attach='material' />
          </mesh> */}
            {/* <Box >
            <meshStandardMaterial attach="material" />
          </Box> */}
        </>
    )
}
