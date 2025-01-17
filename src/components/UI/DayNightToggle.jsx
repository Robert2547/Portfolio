import React from "react";
import { motion } from "framer-motion";

const DayNightToggle = ({ isDay, toggleDayNight }) => {
  return (
    <motion.button
      className="relative w-16 h-8 rounded-full cursor-pointer flex items-center"
      style={{
        background: isDay
          ? "linear-gradient(to right, #87CEEB, #1E90FF)"
          : "linear-gradient(to right, #0A1A3F, #000033)",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
      onClick={toggleDayNight}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute w-7 h-7 rounded-full flex items-center justify-center"
        animate={{
          x: isDay ? "4px" : "32px",
          rotate: isDay ? 0 : 360,
          backgroundColor: isDay ? "#FDB813" : "#FFFFFF",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {isDay ? <SunIcon /> : <MoonIcon />}
      </motion.div>
    </motion.button>
  );
};

const SunIcon = () => (
  <div className="relative w-5 h-5 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-yellow-400" />
    {/* Sun rays */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[2px] h-[4px] bg-yellow-400"
        style={{
          left: "50%",
          top: "50%",
          transformOrigin: "50% 0",
          transform: `rotate(${i * 45}deg) translateX(-50%)`,
        }}
        animate={{
          scaleY: [1, 1.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: i * 0.15,
        }}
      />
    ))}
  </div>
);

const MoonIcon = () => (
  <div className="relative w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
    {/* Moon craters */}
    <div className="absolute top-1 right-1 w-[2px] h-[2px] rounded-full bg-gray-300" />
    <div className="absolute bottom-2 left-1 w-[2px] h-[2px] rounded-full bg-gray-300" />
    <div className="absolute top-2 left-2 w-[2px] h-[2px] rounded-full bg-gray-300" />
    {/* Moon shadow effect */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: "linear-gradient(45deg, rgba(0,0,0,0.1), transparent)",
      }}
    />
  </div>
);

export default DayNightToggle;
