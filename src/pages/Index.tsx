
import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ThreeScene from "../components/ThreeScene";
import FallbackBackground from "../components/FallbackBackground";
import LoadingAnimation from "../components/LoadingAnimation";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time and hide loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Smooth scrolling functionality for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="relative">
          {/* 3D Background with fallback */}
          <ErrorBoundary FallbackComponent={() => <FallbackBackground />}>
            <ThreeScene />
          </ErrorBoundary>
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main Sections */}
          <main>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Contact />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
