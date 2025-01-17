import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tags, link, index }) => {
  return (
    <motion.div
      className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-sm bg-white/10 text-white/90 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={link}
        className="inline-flex items-center text-white/90 hover:text-white group-hover:translate-x-1 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </motion.div>
  );
};

export default ProjectCard;
