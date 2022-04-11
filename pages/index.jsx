import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { SpinningMesh } from '../components/box'

import { softShadows, OrbitControls } from '@react-three/drei'

import { Navbar } from '../components/navbar/navbar'
import { P } from '../components/navbar/style'

softShadows()

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <>
        <Navbar />
        <Canvas
          shadows
          // colorManagement
          camera={{ position: [-5, 2, 10], fov: 60 }}
          style={{ height: "100vh" }}>
          {/** LIGHTS **/}
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />

          {/** PLANE **/}
          <group>
            <mesh rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -3, 0]}
              receiveShadow
            >
              <planeBufferGeometry attach='geometry' args={[100, 100]} />
              <shadowMaterial attach='material' opacity={0.3} />
              {/**
              <meshStandardMaterial attach='material' color={"yellow"} />
               */}
            </mesh>

            {/** MESHES **/}
            <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" speed={2} />
            <SpinningMesh position={[-2, 1, -5]} color="pink" speed={6} />
            <SpinningMesh position={[5, 1, -2]} color="pink" speed={6} />
          </group>

          <OrbitControls /> {/** Lets us zoom and rotate **/}
        </Canvas>
      </>
      <P>rotate and zoom. Click items to scale them!</P>
    </>
  )
}
