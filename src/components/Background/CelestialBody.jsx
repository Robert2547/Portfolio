import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CelestialBody = ({ isDay }) => {
  const bodyRef = useRef();
  const raysRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (bodyRef.current) {
      bodyRef.current.position.y = 5 + Math.sin(time * 0.5) * 0.2;
      bodyRef.current.scale.x = 1 + Math.sin(time) * (isDay ? 0.1 : 0.05);
      bodyRef.current.scale.y = 1 + Math.sin(time) * (isDay ? 0.1 : 0.05);
    }

    if (raysRef.current) {
      raysRef.current.rotation.z += isDay ? 0.001 : 0.0005;
      raysRef.current.material.uniforms.uTime.value = time;
    }
  });

  return (
    <group position={[5, 5, -10]}>
      {/* Main celestial body */}
      <mesh ref={bodyRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={isDay ? "#FDB813" : "#FFFFFF"}
          emissive={isDay ? "#FFA500" : "#AAAAAA"}
          emissiveIntensity={isDay ? 1 : 0.5}
        />
      </mesh>

      {/* Rays/Glow effect */}
      <mesh ref={raysRef} renderOrder={-1}>
        <planeGeometry args={[10, 10]} />
        <shaderMaterial
          transparent={true}
          depthWrite={false}
          uniforms={{
            uTime: { value: 0 },
            uIsDay: { value: isDay ? 1 : 0 },
          }}
          vertexShader={`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform float uTime;
            uniform float uIsDay;
            varying vec2 vUv;
            
            void main() {
              vec2 center = vec2(0.5);
              float dist = distance(vUv, center);
              float alpha = smoothstep(0.2, 0.5, dist) * 0.5;
              
              vec3 dayColor = vec3(1.0, 0.8, 0.3);
              vec3 nightColor = vec3(0.9, 0.9, 1.0);
              vec3 finalColor = mix(nightColor, dayColor, uIsDay);
              
              gl_FragColor = vec4(finalColor, (1.0 - alpha) * mix(0.3, 0.7, uIsDay));
            }
          `}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default CelestialBody;
