// ProjectCard.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-800 px-3 py-1 rounded-full text-sm text-white"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
      >
        View Project <ExternalLink size={16} className="ml-2" />
      </a>
    </div>
  );
};

export default ProjectCard;
