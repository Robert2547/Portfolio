import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Summarizer Chrome Extension",
      description:
        "Built a Chrome extension leveraging Natural Language Pr ocessing (NLP) to summarize web articles and text, enhancing\n reading efficiency across platforms.",
      achievements: [
        "Led a team of 3 developers to win the Microsoft & RBC Challenge among 800+ participants at UCF's hackathon.",
        "Designed and maintained a CI/CD pipeline with GitHub Actions , achieving 85% automated test coverage for\n backend services.",
        "Architected a parallel streaming summarization system , reducing content processing latency by 60% compared to\n synchronous models.Maintained 85% test coverage with CI/CD pipeline"
      ],
      tech: ["React", "TypeScript", "Python", "FastAPI", "Redis", "Jest"],
      link: "#",
    },
    {
      title: "Handy Dollar",
      description:
        "Developed a full-stack financial management platform that streamlined expense tracking and receipt parsing through AI-powered automation.",
      achievements: [
        "Collaborated with a team of 3 engineers to win Google's Challenge at FIU ShellHacks among 1,200+ participants.",
        "Integrated the Plaid API to securely aggregate real-time financial data from 10+ banks, \nensuring unified and privacy-compliant expense tracking.",
        "Built a computer vision pipeline using Azure AI and OpenAI,\n achieving 95% receipt parsing accuracy for automated data extraction."
      ],
      tech: ["TypeScript", "NextJS", "NodeJS", "Kafka", "Azure AI", "OpenAI"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-background-light/30 backdrop-blur-md rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="list-disc list-inside mb-4 text-gray-400">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="mb-2">
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
