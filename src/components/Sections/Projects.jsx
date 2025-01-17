import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../UI/ProjectCard";

const projectsData = [
  {
    title: "Wave Visualizer",
    description: "Interactive 3D visualization of ocean waves using WebGL",
    tags: ["Three.js", "WebGL", "React"],
    link: "#",
  },
  {
    title: "Beach Weather",
    description: "Real-time weather tracking with beautiful animations",
    tags: ["Next.js", "TailwindCSS", "API"],
    link: "#",
  },
  {
    title: "Island Explorer",
    description: "Virtual reality tour of tropical destinations",
    tags: ["React Three Fiber", "3D", "Animation"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
