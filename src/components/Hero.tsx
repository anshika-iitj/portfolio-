
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      
      gsap.fromTo(
        textElement.querySelectorAll(".animate-text"),
        { 
          y: 100, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out" 
        }
      );
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7" ref={textRef}>
            <motion.p 
              className="animate-text text-portfolio-purple mb-3 text-lg font-medium tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              DIGITAL HUMANITIES RESEARCHER
            </motion.p>
            
            <motion.h1 
              className="animate-text text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-portfolio-deepPurple"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Anshika <span className="gradient-text">Kashyap</span>
            </motion.h1>
            
            <motion.p 
              className="animate-text text-lg md:text-xl mb-8 text-portfolio-gray max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Masters student at IIT Jodhpur specializing in Digital Humanities with research 
              experience in interdisciplinary fields, combining technology with social sciences.
            </motion.p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a 
                href="#contact"
                className="bg-portfolio-purple hover:bg-portfolio-darkPurple text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              
              <motion.a 
                href="#experience"
                className="border border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Experience
              </motion.a>
            </div>
            
            <div className="flex space-x-4">
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-portfolio-deepPurple hover:text-portfolio-purple transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -3 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-portfolio-deepPurple hover:text-portfolio-purple transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -3 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="mailto:m24id1012@iitj.ac.in"
                className="text-portfolio-deepPurple hover:text-portfolio-purple transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ y: -3 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
          
          <div className="md:col-span-5 hidden md:block">
            <motion.div
              className="relative w-80 h-80 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-darkPurple opacity-20 animate-pulse absolute" />
              <div className="w-72 h-72 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-darkPurple opacity-30 animate-pulse absolute top-4 left-4" />
              <div className="w-64 h-64 rounded-full bg-white shadow-xl absolute top-8 left-8 overflow-hidden">
                {/* Profile image placeholder - replace src with actual image */}
                <div className="w-full h-full bg-gradient-to-r from-portfolio-purple/30 to-portfolio-darkPurple/30 flex items-center justify-center text-portfolio-deepPurple">
                  <span className="font-playfair text-4xl">AK</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about" className="text-portfolio-deepPurple">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
