import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Ocean = ({ isDay }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.material.uniforms.uTime.value = time;
  });

  const waterMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uIsDay: { value: isDay ? 1 : 0 },
    },
    vertexShader: `
      uniform float uTime;
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        vec3 pos = position;
        float elevation = sin(pos.x * 2.0 + uTime) * 
                         sin(pos.z * 2.0 + uTime) * 0.2;
        pos.y += elevation;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uIsDay;
      varying vec2 vUv;
      
      void main() {
        vec3 dayColor = vec3(0.0, 0.5, 1.0);
        vec3 nightColor = vec3(0.0, 0.1, 0.2);
        vec3 color = mix(nightColor, dayColor, uIsDay);
        gl_FragColor = vec4(color, 0.8);
      }
    `,
    transparent: true,
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <primitive object={waterMaterial} attach="material" />
    </mesh>
  );
};

export default Ocean;
