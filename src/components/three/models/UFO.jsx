// src/components/three/models/UFO.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus, Cylinder, SpotLight } from "@react-three/drei";

const UFO = () => {
  const ufoRef = useRef();
  const glowRef = useRef();
  const lightRingRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (ufoRef.current) {
      // Orbital movement
      ufoRef.current.position.x = Math.sin(t * 0.3) * 10;
      ufoRef.current.position.z = Math.cos(t * 0.3) * 10;
      ufoRef.current.position.y = Math.sin(t * 0.5) * 2; // Hovering effect

      // UFO rotation
      ufoRef.current.rotation.y = -t * 0.3;
      ufoRef.current.rotation.z = Math.sin(t * 0.5) * 0.1;
    }

    // Animate glow
    if (glowRef.current) {
      glowRef.current.intensity = 1 + Math.sin(t * 5) * 0.3;
    }

    // Rotate light ring
    if (lightRingRef.current) {
      lightRingRef.current.rotation.y = t * 2;
    }
  });

  return (
    <group ref={ufoRef}>
      {/* Main body - saucer shape */}
      <group>
        {/* Top dome */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry
            args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]}
          />
          <meshPhysicalMaterial
            color="white"
            metalness={0.8}
            roughness={0.2}
            clearcoat={0.5}
          />
        </mesh>

        {/* Main disc */}
        <Torus args={[0.8, 0.3, 32, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial
            color="light blue"
            metalness={0.8}
            roughness={0.2}
            clearcoat={0.5}
          />
        </Torus>

        {/* Bottom glow ring */}
        <group ref={lightRingRef}>
          {Array.from({ length: 8 }).map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.cos((i / 8) * Math.PI * 2) * 0.6,
                -0.2,
                Math.sin((i / 8) * Math.PI * 2) * 0.6,
              ]}
            >
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshBasicMaterial color="#64ffda" />
            </mesh>
          ))}
        </group>

        {/* Center bottom light */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
          <meshBasicMaterial color="#64ffda" opacity={0.8} transparent />
        </mesh>

       
      </group>

      {/* Light beam */}
      <SpotLight
        ref={glowRef}
        position={[0, 0, 0]}
        angle={0.3}
        penumbra={0.5}
        intensity={1}
        color="#64ffda"
        distance={10}
      />
    </group>
  );
};

export default UFO;
