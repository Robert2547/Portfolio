import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Simulation Developer Intern",
      company: "Leidos",
      period: "September 2024 - Present",
      achievements: [
        "Leveraged Gemma3 VLM and prompt engineering to extract electrical diagrams and build a structured knowledge graph, \nboosting Agentic AI systems by 60% .",
        "Developed RAG and Graph Query tools by integrating vector databases and knowledge graphs, enhancing \nretrieval of electrical knowledge to strengthen Agentic AI decision-making.",
        "Automated containerized deployment of backend services using Skaffold and Helm , reducing deployment time by\n 20% and streamlining release workflows.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Zea Consulting",
      period: "January 2024 - May 2024",
      achievements: [
        "Designed and implemented a secure authentication system using Firebase , protecting protected routes and enabling\n robust session management for production environments.",
        "Developed a modular RESTful API architecture with Node.js and Express , incorporating middleware validation and\n standardized error handling to improve backend reliability.",
        "Architected a cost-efficient message generation system that balanced OpenAI API calls with static database retrievals,\n optimizing personalization while reducing operational costs by 25%.",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company: "UCF",
      period: "August 2023 - January 2024",
      achievements: [
        "Evaluated LLaV A's performance in disaster damage assessment against the Joint Damage Scale (JDS) , providing\n actionable metrics to guide model improvements.",
        "Designed 50+ disaster simulation scenarios using advanced image modification techniques , uncovering critical\n model weaknesses under real-world conditions.",
        "Documented comparative analyses between AI and human disaster assessments, generating insights that informed AI\n model retraining for enhanced disaster response accuracy.",
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
