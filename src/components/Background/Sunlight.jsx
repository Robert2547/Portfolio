import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Sunlight = () => {
  const sunRef = useRef();
  const raysRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Animate sun glow
    if (sunRef.current) {
      sunRef.current.scale.x = 1 + Math.sin(time) * 0.1;
      sunRef.current.scale.y = 1 + Math.sin(time) * 0.1;
    }

    // Animate rays
    if (raysRef.current) {
      raysRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group position={[5, 5, -10]}>
      {/* Sun sphere */}
      <mesh ref={sunRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      {/* Sun rays */}
      <mesh ref={raysRef}>
        <planeGeometry args={[10, 10]} />
        <shaderMaterial
          transparent
          uniforms={{
            uTime: { value: 0 },
          }}
          vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec2 vUv;
            void main() {
              vec2 center = vec2(0.5);
              float dist = distance(vUv, center);
              float alpha = smoothstep(0.2, 0.5, dist) * 0.5;
              gl_FragColor = vec4(1.0, 0.8, 0.3, 1.0 - alpha);
            }
          `}
        />
      </mesh>
    </group>
  );
};

export default Sunlight;