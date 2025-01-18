import React, { useRef } from "react";
import { motion } from "framer-motion";

// Add more varied asteroid shapes
const asteroidImages = [
  `${process.env.PUBLIC_URL}/textures/asteroids/asteroid1.png`,
  `${process.env.PUBLIC_URL}/textures/asteroids/asteroid3.png`,
  `${process.env.PUBLIC_URL}/textures/asteroids/asteroid4.png`,
];

const FloatingAsteroids = () => {
  const containerRef = useRef(null);

  // Generate random asteroid data with more varied properties
  const asteroids = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    image: asteroidImages[Math.floor(Math.random() * asteroidImages.length)],
    size: Math.random() * 2 + 20,
    left: Math.random() * 100,
    initialRotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 2,
    duration: Math.random() * 20 + 25,
    delay: Math.random() * -20,
    xMovement: Math.random() * 100 - 50,
    scale: 0.8 + Math.random() * 0.1, // Random scale variation
    skew: Math.random() * 10 - 5, // Random skew for shape variation
  }));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {asteroids.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          className="absolute"
          style={{
            width: asteroid.size,
            height: asteroid.size,
            left: `${asteroid.left}%`,
            filter: "contrast(1.2) brightness(0.8)",
            transform: `scale(${asteroid.scale}) skew(${asteroid.skew}deg)`,
          }}
          initial={{
            y: "110vh",
            x: 0,
            rotate: asteroid.initialRotation,
          }}
          animate={{
            y: "-20vh",
            x: asteroid.xMovement,
            rotate: asteroid.initialRotation + 360 * asteroid.rotationSpeed,
          }}
          transition={{
            y: {
              duration: asteroid.duration,
              repeat: Infinity,
              ease: "linear",
              delay: asteroid.delay,
            },
            x: {
              duration: asteroid.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: asteroid.delay,
            },
            rotate: {
              duration: asteroid.duration,
              repeat: Infinity,
              ease: "linear",
              delay: asteroid.delay,
            },
          }}
        >
          <div
            className="w-full h-full rounded-[40%_60%_70%_30%_/_30%_30%_70%_70%] overflow-hidden shadow-lg"
            style={{
              background: `url(${asteroid.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingAsteroids;
