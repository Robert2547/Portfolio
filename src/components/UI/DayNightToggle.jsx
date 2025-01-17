import React from "react";
import { motion } from "framer-motion";

const DayNightToggle = ({ isDay, toggleDayNight }) => {
  return (
    <motion.div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.button
        className="relative w-24 h-12 rounded-full p-1 cursor-pointer"
        style={{
          background: isDay
            ? "linear-gradient(to right, #87CEEB, #1E90FF)"
            : "linear-gradient(to right, #0A1A3F, #000033)",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        }}
        onClick={toggleDayNight}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute top-1 left-1 w-10 h-10 rounded-full flex items-center justify-center"
          animate={{
            x: isDay ? 0 : 48,
            backgroundColor: isDay ? "#FDB813" : "#FFFFFF",
            boxShadow: isDay
              ? "0 0 15px #FDB813"
              : "0 0 10px rgba(255,255,255,0.5)",
          }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          {isDay ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

const SunIcon = () => (
  <motion.div
    className="w-8 h-8 rounded-full bg-yellow-400"
    animate={{
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-2 bg-yellow-400"
        style={{
          left: "50%",
          top: "50%",
          transformOrigin: "0 0",
          transform: `rotate(${i * 45}deg) translateY(-12px)`,
        }}
        animate={{
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          delay: i * 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </motion.div>
);

const MoonIcon = () => (
  <motion.div
    className="relative w-8 h-8 rounded-full bg-gray-100"
    initial={false}
    animate={{ rotate: 360 }}
    transition={{ duration: 0.5 }}
  >
    {[
      { x: 2, y: 2, size: 2 },
      { x: 4, y: 4, size: 1.5 },
      { x: 3, y: 5, size: 1 },
    ].map((crater, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gray-300"
        style={{
          left: `${crater.x}px`,
          top: `${crater.y}px`,
          width: `${crater.size}px`,
          height: `${crater.size}px`,
        }}
      />
    ))}
  </motion.div>
);

export default DayNightToggle;
