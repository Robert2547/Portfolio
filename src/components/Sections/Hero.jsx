import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
          Joseph Benno
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Computer Science at University of Central Florida | Class Of 2026
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="mailto:josephbenno2547@gmail.com"
            className="px-6 py-3 rounded-full bg-[#64ffda] bg-opacity-10 text-[#64ffda] hover:bg-opacity-20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
