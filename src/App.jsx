// App.jsx
import React, { useState, useEffect } from "react";
import ThreeBackground from "./components/Background/ThreeBackground";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Sections/Hero";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import "./styles/theme.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <ThreeBackground scrollProgress={scrollProgress} />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
