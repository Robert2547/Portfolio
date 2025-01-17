import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ShootingStars = () => {
  const [stars, setStars] = useState([]);
  const groupRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        const newStar = {
          position: new THREE.Vector3(
            Math.random() * 40 - 20,
            15,
            Math.random() * 10 - 20
          ),
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.5,
            -Math.random() * 0.3 - 0.1,
            (Math.random() - 0.5) * 0.2
          ),
          life: 1.0,
          id: Date.now(),
        };
        setStars((prev) => [...prev, newStar]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useFrame((state, delta) => {
    setStars((prev) =>
      prev
        .map((star) => ({
          ...star,
          position: star.position.add(star.velocity),
          life: star.life - delta,
        }))
        .filter((star) => star.life > 0)
    );
  });

  return (
    <group ref={groupRef}>
      {stars.map((star) => (
        <group key={star.id} position={star.position}>
          <mesh>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial
              color="#FFFFFF"
              transparent
              opacity={star.life}
            />
          </mesh>
          <Trail position={star.position} life={star.life} />
        </group>
      ))}
    </group>
  );
};

const Trail = ({ position, life }) => {
  return (
    <mesh position={position}>
      <planeGeometry args={[0.5, 0.1]} />
      <shaderMaterial
        transparent
        uniforms={{
          life: { value: life },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float life;
          varying vec2 vUv;
          void main() {
            float alpha = (1.0 - vUv.x) * life * 0.5;
            gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
          }
        `}
      />
    </mesh>
  );
};

export default ShootingStars;
