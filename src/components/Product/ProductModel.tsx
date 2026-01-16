"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function ProductModel() {
  const { scene } = useGLTF("/product.glb");
  const modelRef = useRef<THREE.Group>(null);
  
  const scrollRef = useRef({ scrollY: 0, containerTop: 0, containerHeight: 0 });

  useEffect(() => {
    const updateBounds = () => { 
      const container = document.getElementById("product-details-container");
      if (container) {
        const rect = container.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollRef.current.containerTop = rect.top + scrollTop;
        scrollRef.current.containerHeight = rect.height;
      }
    };

    const handleScroll = () => {
      scrollRef.current.scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateBounds);
    updateBounds();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  useFrame((state, delta) => {
    if (!modelRef.current) return;

    const { scrollY, containerTop, containerHeight } = scrollRef.current;
    
    let targetX = 0; 

    const triggerPoint = containerTop - window.innerHeight / 2;
    
    if (scrollY > triggerPoint && scrollY < containerTop + containerHeight) {
      const localProgress = (scrollY - containerTop) / containerHeight;
      
      if (localProgress < 0.2) {
        targetX = 1.8;  
      } else if (localProgress < 0.50) {
        targetX = -1.8; 
      } else if (localProgress < 0.75) {
        targetX = 1.8;  
      } else {
        targetX = -1.8; 
      }
    } else {
      targetX = 0; 
    }

    modelRef.current.position.x = THREE.MathUtils.damp(
      modelRef.current.position.x,
      targetX,
      4, 
      delta
    );

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const globalProgress = Math.max(0, Math.min(1, scrollY / totalHeight));
    const currentTargetY = THREE.MathUtils.lerp(-0.8, 0, globalProgress);
    
    modelRef.current.position.y = THREE.MathUtils.damp(
      modelRef.current.position.y,
      currentTargetY,
      6,
      delta
    );

    modelRef.current.rotation.x = 2;
    modelRef.current.rotation.y = 2;
    modelRef.current.rotation.z = 3.4;
  });

  return <primitive ref={modelRef} object={scene} scale={1.2} />;
}