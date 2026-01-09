'use client';

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Float, Center } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/product.glb')

  return (
    <primitive
      object={scene}
      scale={1.1}
      rotation={[-0.5, 1, -0.5]}
    />
  )
}

export default function ModelViewer() {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} intensity={0.6} />
        <directionalLight position={[-3, 2, -3]} intensity={0.4} />

        <Suspense fallback={null}>
          <Center>
            <Float
              speed={1.2}
              rotationIntensity={0.15}
              floatIntensity={0.3}
            >
              <Model />
            </Float>
          </Center>
        </Suspense>

        <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            rotateSpeed={0.6}
            />

      </Canvas>
    </div>
  )
}

useGLTF.preload('/product.glb')
