"use client"
import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import ProductModel from "./ProductModel";
import { Suspense } from "react";

export default function ProductCanvas() {
  return (
    <div className="fixed inset-0 z-2 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <ProductModel />
          </Float>
          <ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={8} blur={3} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}