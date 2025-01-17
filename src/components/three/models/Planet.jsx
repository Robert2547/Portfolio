import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Planet = ({ position }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });

  // Create materials for better visual appearance
  const planetMaterial = new THREE.MeshStandardMaterial({
    color: "#4f46e5",
    metalness: 0.2,
    roughness: 0.8,
    emissive: "#000000",
    emissiveIntensity: 0.2,
  });

  return (
    <group>
      {/* Atmosphere glow */}
      <mesh position={position} scale={[3.2, 3.2, 3.2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#4f46e5" transparent opacity={0.1} />
      </mesh>

      {/* Main planet */}
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[3, 64, 64]} />
        <primitive object={planetMaterial} attach="material" />
      </mesh>

      {/* Additional glow layer */}
      <mesh position={position} scale={[3.1, 3.1, 3.1]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#6e6aff" transparent opacity={0.05} />
      </mesh>
    </group>
  );
};

export default Planet;
