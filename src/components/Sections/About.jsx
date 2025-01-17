import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Three.js", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "WebGL", level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                My Journey
              </h3>
              <p className="text-gray-400 mb-6">
                A passionate web developer with a love for creating immersive 3D
                experiences. Specialized in building modern web applications
                using cutting-edge technologies.
              </p>
              <p className="text-gray-400">
                With years of experience in both frontend and backend
                development, I bring ideas to life through clean code and
                creative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
