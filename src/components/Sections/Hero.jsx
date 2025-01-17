import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative"
      id="home"
    >
      <div className="text-center">
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Creative Developer
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting digital experiences with a beach vibe
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full 
                     backdrop-blur-sm transition-colors inline-block"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
