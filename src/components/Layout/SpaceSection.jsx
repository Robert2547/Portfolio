import React from 'react';
import { motion } from 'framer-motion';

const SpaceSection = ({ children, title, className = '' }) => {
  return (
    <section className={`relative min-h-screen py-20 ${className}`}>
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            {/* Glowing text effect */}
            <span className="relative">
              <span className="absolute -inset-1 blur-sm bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30" />
              <span className="relative text-white">{title}</span>
            </span>
          </motion.h2>
        )}
        {children}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
};

export default SpaceSection;