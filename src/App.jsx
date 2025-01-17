// src/App.jsx
import React, { useState } from "react";
import ThreeBackground from "./components/Background/ThreeBackground";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Sections/Hero";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import "./styles/globals.css";

function App() {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent to-black/20">
      <ThreeBackground isDay={isDay} />
      <Navbar isDay={isDay} toggleDayNight={toggleDayNight} />

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
