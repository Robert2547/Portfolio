import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Space Portfolio
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Exploring the Universe of Web Development through Innovative Projects
          and Creative Solutions
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
