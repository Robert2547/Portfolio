import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import SpaceScene from "./components/three/SpaceScene";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import FloatingAsteroids from "./components/background/FloatingAsteroids";
import "./styles/global.css";
import "./styles/animations.css";

function App() {
  return (
      <div className="relative">
        {/* Background Effects */}
        <div className="fixed inset-0">
          <SpaceScene />
          <FloatingAsteroids />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <main className="space-y-0">
            <div className="relative">
              <Hero />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="relative bg-nebula-1">
              <Skills />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="relative bg-nebula-2">
              <Experience />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="relative">
              <Projects />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="relative bg-nebula-1">
              <Contact />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
          </main>
          <Footer />
        </div>
      </div>
  );
}

export default App;
