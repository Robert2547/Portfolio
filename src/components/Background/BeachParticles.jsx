import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BeachParticles = ({ isDay }) => {
  const points = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = Math.random() * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push({ x, y, z, velocity: Math.random() * 0.02 + 0.02 });
    }
    return temp;
  }, []);

  useFrame(() => {
    const positions = points.current.geometry.attributes.position.array;

    for (let i = 0; i < particles.length; i++) {
      const i3 = i * 3;
      positions[i3 + 1] -= particles[i].velocity;

      if (positions[i3 + 1] < -2) {
        positions[i3 + 1] = 10;
      }
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <float32BufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={Float32Array.from(particles.flatMap((p) => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        transparent
        opacity={0.6}
        color={isDay ? "#FFFFFF" : "#87CEEB"}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default BeachParticles;
