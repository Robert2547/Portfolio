// src/App.jsx
import React from "react";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import SpaceScene from "./components/three/SpaceScene";
import "./styles/global.css";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="fixed inset-0">
        <SpaceScene />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
        </main>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
