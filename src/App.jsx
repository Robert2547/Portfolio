// src/App.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import SpaceScene from "./components/three/SpaceScene";
import "./styles/global.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    // Simulating assets loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Intersection Observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Fixed background */}
            <div className="fixed inset-0">
              <SpaceScene />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <Navigation currentSection={currentSection} />

              <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
              </main>

              <Footer />
            </div>

            {/* Progress indicator */}
            <motion.div
              className="fixed bottom-8 right-8 z-40 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {["home", "projects", "about", "contact"].map((section) => (
                <motion.div
                  key={section}
                  className={`w-3 h-3 rounded-full ${
                    currentSection === section ? "bg-primary" : "bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex flex-col items-center text-gray-400">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </motion.div>
                <span className="text-sm mt-2">Scroll to explore</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
