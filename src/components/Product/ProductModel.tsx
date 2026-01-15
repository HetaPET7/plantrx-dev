"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function ProductModel() {
  const { scene } = useGLTF("/product.glb");
  const modelRef = useRef<THREE.Group>(null);
  
  // Track scroll and section bounds
  const scrollRef = useRef({ scrollY: 0, containerTop: 0, containerHeight: 0 });

  useEffect(() => {
    const updateBounds = () => { 
      const container = document.getElementById("product-details-container");
      if (container) {
        // We get the absolute distance from the top of the document
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
    updateBounds(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  useFrame((state, delta) => {
    if (!modelRef.current) return;

    const { scrollY, containerTop, containerHeight } = scrollRef.current;
    
    // 1. DETERMINE TARGET X
    let targetX = 0; 

    // Check if we are inside the ProductDetails section
    // We add a small offset (window.innerHeight/2) so the movement starts as the section enters
    const triggerPoint = containerTop - window.innerHeight / 2;
    
    if (scrollY > triggerPoint && scrollY < containerTop + containerHeight) {
      // Calculate progress specifically within the ProductDetails container (0 to 1)
      const localProgress = (scrollY - containerTop) / containerHeight;
      
      // Divide into 4 equal segments (0.25 each because you have 4 sections)
      if (localProgress < 0.2) {
        targetX = 1.8;  // Part 1: Flavour (Model Right)
      } else if (localProgress < 0.50) {
        targetX = -1.8; // Part 2: Amount (Model Left)
      } else if (localProgress < 0.75) {
        targetX = 1.8;  // Part 3: Weight (Model Right)
      } else {
        targetX = -1.8; // Part 4: Ingredients (Model Left)
      }
    } else {
      targetX = 0; // Center for Hero and Footer
    }

    // 2. APPLY POSITION X (Zigzag)
    // Damping 4 makes the transition smooth but snappy
    modelRef.current.position.x = THREE.MathUtils.damp(
      modelRef.current.position.x,
      targetX,
      4, 
      delta
    );

    // 3. POSITION Y (General Rise)
    // Based on total page scroll
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const globalProgress = Math.max(0, Math.min(1, scrollY / totalHeight));
    const currentTargetY = THREE.MathUtils.lerp(-0.8, 0, globalProgress);
    
    modelRef.current.position.y = THREE.MathUtils.damp(
      modelRef.current.position.y,
      currentTargetY,
      6,
      delta
    );

    // 4. FIXED ROTATION
    modelRef.current.rotation.x = 2;
    modelRef.current.rotation.y = 2;
    modelRef.current.rotation.z = 3.4;
  });

  return <primitive ref={modelRef} object={scene} scale={1.2} />;
}