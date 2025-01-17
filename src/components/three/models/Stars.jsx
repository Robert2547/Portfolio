import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CustomStars = () => {
  const starsRef = useRef();
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    color: "#ffffff",
    size: 0.1,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
  });

  // Create more stars for better effect
  const starVertices = [];
  for (let i = 0; i < 15000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = -Math.random() * 2000;
    starVertices.push(x, y, z);
  }

  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
  );

  useFrame((state) => {
    starsRef.current.rotation.z += 0.0001;

    // Add subtle pulsing effect
    const time = state.clock.getElapsedTime();
    starsRef.current.material.size = 0.1 + Math.sin(time) * 0.02;
  });

  return (
    <points ref={starsRef} geometry={starGeometry} material={starMaterial} />
  );
};

export default CustomStars;
