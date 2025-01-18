// src/components/sections/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiOpenjdk, 
  SiCplusplus,
  SiC,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSpring, 
  SiFlask,
  SiTailwindcss,
  SiJest,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiGit,
  SiGithub,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPytorch, // Changed from SiMatplotlib (which doesn't exist)
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa"; // Added for SQL icon

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { icon: <SiPython className="text-[#3776AB]" />, name: "Python" },
        {
          icon: <SiTypescript className="text-[#3178C6]" />,
          name: "TypeScript",
        },
        {
          icon: <SiJavascript className="text-[#F7DF1E]" />,
          name: "JavaScript",
        },
        { icon: <SiOpenjdk className="text-[#E32024]" />, name: "Java" },
        { icon: <SiCplusplus className="text-[#00599C]" />, name: "C++" },
        { icon: <SiC className="text-[#A8B9CC]" />, name: "C" },
        { icon: <FaDatabase className="text-[#336791]" />, name: "SQL" },
        { icon: <SiHtml5 className="text-[#E34F26]" />, name: "HTML" },
        { icon: <SiCss3 className="text-[#1572B6]" />, name: "CSS" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React Native" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
        { icon: <SiSpring className="text-[#6DB33F]" />, name: "Spring Boot" },
        { icon: <SiFlask className="text-white" />, name: "Flask" },
        {
          icon: <SiTailwindcss className="text-[#06B6D4]" />,
          name: "TailwindCSS",
        },
        { icon: <SiJest className="text-[#C21325]" />, name: "Jest" },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        {
          icon: <SiPostgresql className="text-[#336791]" />,
          name: "PostgreSQL",
        },
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
        { icon: <SiRedis className="text-[#DC382D]" />, name: "Redis" },
        { icon: <SiDocker className="text-[#2496ED]" />, name: "Docker" },
        {
          icon: <SiKubernetes className="text-[#326CE5]" />,
          name: "Kubernetes",
        },
        { icon: <SiApachekafka className="text-[#231F20]" />, name: "Kafka" },
        { icon: <SiGit className="text-[#F05032]" />, name: "Git" },
        { icon: <SiGithub className="text-white" />, name: "GitHub" },
      ],
    },
    {
      title: "Data Science",
      skills: [
        { icon: <SiPandas className="text-[#150458]" />, name: "Pandas" },
        { icon: <SiNumpy className="text-[#013243]" />, name: "NumPy" },
        {
          icon: <SiTensorflow className="text-[#FF6F00]" />,
          name: "TensorFlow",
        },
        { icon: <SiPytorch className="text-[#EE4C2C]" />, name: "PyTorch" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-16 text-center gradient-text">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-light/30 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="group relative flex justify-center items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-3xl transition-all duration-300 group-hover:opacity-100 opacity-70">
                      {skill.icon}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
