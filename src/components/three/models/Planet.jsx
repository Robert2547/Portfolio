import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";

const Planet = ({ position }) => {
  const planetRef = useRef();
  const ringsRef = useRef();
  const atmosphereRef = useRef();

  // Load planet textures
  const [marsTexture, marsNormalMap, marsRoughnessMap] = useLoader(
    TextureLoader,
    [
      "/textures/mars/mars_texture.jpg",
      "/textures/mars/mars_normal.jpg",
      "/textures/mars/mars_roughness.jpg",
    ]
  );

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // Rotate planet
    if (planetRef.current) {
      planetRef.current.rotation.y = elapsedTime * 0.1;
    }

    // Rotate rings
    if (ringsRef.current) {
      ringsRef.current.rotation.z = elapsedTime * 0.05;
    }

    // Pulse atmosphere
    if (atmosphereRef.current) {
      atmosphereRef.current.scale.set(
        1 + Math.sin(elapsedTime) * 0.01,
        1 + Math.sin(elapsedTime) * 0.01,
        1 + Math.sin(elapsedTime) * 0.01
      );
    }
  });

  return (
    <group position={position}>
      {/* Main Planet */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial
          map={marsTexture}
          normalMap={marsNormalMap}
          roughnessMap={marsRoughnessMap}
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef} scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial
          color="#ff4e50"
          transparent
          opacity={0.1}
          side={2}
        />
      </mesh>

      
    </group>
  );
};

export default Planet;
