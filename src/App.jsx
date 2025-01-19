import React, { Suspense, lazy, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";
import "./styles/global.css";
import "./styles/animations.css";
import { initAnalytics } from "./utils/analytics";
import { useState } from "react";

// Lazy load heavier components
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));
const SpaceScene = lazy(() => import("./components/three/SpaceScene"));
const FloatingAsteroids = lazy(() =>
  import("./components/background/FloatingAsteroids")
);
const AnalyticsDashboard = lazy(() =>
  import("./components/analytics/AnalyticsDashboard")
);

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex min-h-[400px] items-center justify-center text-center p-4">
    <div>
      <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  </div>
);

// Loading Component
const LoadingSpinner = () => (
  <div className="flex min-h-[400px] items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Main content component
const MainContent = () => {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <>
      {/* Your existing MainContent JSX */}
      <div className="fixed inset-0">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <SpaceScene />
            <FloatingAsteroids />
          </Suspense>
        </ErrorBoundary>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      </div>

      <div className="relative z-10">
        <Navigation />
        <main className="space-y-0">
          <div className="relative">
            <Hero />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
          </div>

          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingSpinner />}>
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
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </>
  );
};

function App() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    // Add keyboard shortcut (Ctrl + Shift + A)
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault(); // Prevent default browser behavior
        setShowAnalytics((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="relative">
      {showAnalytics ? (
        <Suspense fallback={<LoadingSpinner />}>
          <AnalyticsDashboard onClose={() => setShowAnalytics(false)} />
        </Suspense>
      ) : (
        <MainContent />
      )}
    </div>
  );
}

export default App;
