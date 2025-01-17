import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ocean from "./Ocean";
import CelestialBody from "./CelestialBody";
import BeachParticles from "./BeachParticles";
import ShootingStars from "./ShootingStars";

const ThreeBackground = ({ isDay }) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        style={{
          background: isDay
            ? "linear-gradient(to bottom, var(--day-sky-top), var(--day-sky-bottom))"
            : "linear-gradient(to bottom, var(--night-sky-top), var(--night-sky-bottom))",
        }}
      >
        <ambientLight intensity={isDay ? 1 : 0.2} />
        <CelestialBody isDay={isDay} />
        <Ocean isDay={isDay} />
        <BeachParticles isDay={isDay} />
        {!isDay && <ShootingStars />}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
