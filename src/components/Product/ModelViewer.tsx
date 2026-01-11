'use client'

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { MotionValue } from 'framer-motion'

function Model({ rotationY }: { rotationY: MotionValue<number> }) {
  const { scene } = useGLTF('/product.glb')
  const ref = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (!ref.current) return

    // ONE controlled rotation
    ref.current.rotation.y = rotationY.get()
    ref.current.rotation.x = -0.5
    ref.current.rotation.z = -0.5
  })

  return (
    <group ref={ref} scale={1.1}>
      <primitive object={scene} />
    </group>
  )
}

export default function ModelViewer({
  rotationY,
}: {
  rotationY: MotionValue<number>
}) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 3, 3]} intensity={0.6} />
      <directionalLight position={[-3, 2, -3]} intensity={0.4} />

      <Suspense fallback={null}>
        <Center>
          <Model rotationY={rotationY} />
        </Center>
      </Suspense>

      {/* Enabled AFTER animation naturally */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

useGLTF.preload('/product.glb')
