import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import Planet from "./models/Planet";
import CustomStars from "./models/Stars";

const SpaceScene = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#0f0c29"]} />
        <fog attach="fog" args={["#0f0c29", 15, 25]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* Ambient light for overall scene brightness */}
        <ambientLight intensity={0.4} />

        {/* Main directional light */}
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

        {/* Accent lights for atmosphere */}
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#4f46e5"
        />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#64ffda" />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade={true}
        />

        <Planet position={[0, 0, 0]} />
        <CustomStars />
      </Canvas>
    </div>
  );
};

export default SpaceScene;
