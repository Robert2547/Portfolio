// src/components/layout/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={22} />,
      url: "https://github.com/Robert2547",
      color: "hover:text-[#6e5494]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      url: "https://www.linkedin.com/in/josephbenno/",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "Devpost",
      icon: <SiDevpost size={22} />,
      url: "https://devpost.com/josephbenno2547",
      color: "hover:text-[#003E54]",
    },
    {
      name: "Email",
      icon: <MdEmail size={22} />,
      url: "mailto:josephbenno2547@gmail.com",
      color: "hover:text-[#EA4335]",
    },
  ];

  return (
    <footer className="relative bg-background/80 backdrop-blur-lg">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left section */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-primary mb-4"
              whileHover={{ x: 5 }}
            >
              Joseph Benno
            </motion.h3>
            <p className="text-gray-400">
              Computer Science Student at University of Central Florida
            </p>
          </div>

          {/* Middle section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Skills", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${link.color}`}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ y: 0, scale: 0.9 }}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
