// src/components/layout/Navigation.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JB
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 transition-colors ${link.color}`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
