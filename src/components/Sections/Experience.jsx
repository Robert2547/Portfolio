// src/components/sections/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Simulation Developer Intern",
      company: "Leidos",
      period: "September 2024 - Present",
      achievements: [
        "Accelerated deployment efficiency by 20% through automation using Skaffold and Helm",
        "Configured local development infrastructure using bridge networking between Linux and Windows VMs",
        "Enhanced secure deployment workflows using Zarf for isolated environments",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Zea Consulting",
      period: "January 2024 - May 2024",
      achievements: [
        "Implemented Firebase Authentication for secure user management",
        "Architected RESTful API endpoints with Node.js/Express",
        "Developed hybrid message generation system combining OpenAI API with static database",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company: "UCF",
      period: "August 2023 - January 2024",
      achievements: [
        "Testing LLaVA performance at disaster management",
        "Conducted experiments on disaster image understanding using Joint Damage Scale",
        "Tested and provided insights to improve model accuracy",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background-light/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                <p className="text-xl text-gray-300">{exp.company}</p>
                <p className="text-gray-400">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
