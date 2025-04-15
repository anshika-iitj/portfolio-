
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding relative bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-center mb-3 font-playfair text-portfolio-deepPurple">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Placeholder for about image - replace with actual image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-portfolio-purple/20 to-portfolio-darkPurple/30 flex items-center justify-center">
                  <span className="font-playfair text-2xl text-portfolio-deepPurple">Academic Profile</span>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h3 className="text-2xl mb-4 font-playfair text-portfolio-deepPurple">Digital Humanities Researcher & Scholar</h3>
                
                <p className="text-portfolio-gray mb-6 leading-relaxed">
                  I am currently pursuing a Master of Science in Digital Humanities at the Indian Institute of Technology, Jodhpur. 
                  My academic journey combines traditional humanities with cutting-edge digital technologies to explore new dimensions 
                  of research and knowledge creation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-portfolio-deepPurple">Education</h4>
                    <ul className="space-y-2 text-portfolio-gray">
                      <li>MSc, Digital Humanities - IIT Jodhpur</li>
                      <li>BA (Hons) Philosophy - Lady Shri Ram College, DU</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-portfolio-deepPurple">Research Interests</h4>
                    <ul className="space-y-2 text-portfolio-gray">
                      <li>AI & Human Collaboration</li>
                      <li>Digital Mapping & Visualization</li>
                      <li>Computational Social Choice</li>
                      <li>Philosophy of Technology</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-portfolio-gray mb-6 leading-relaxed">
                  My interdisciplinary background in philosophy and digital humanities allows me to approach
                  research with both critical thinking and technical skills. I'm particularly interested in how 
                  technology can enhance human capabilities while addressing ethical considerations in our increasingly
                  digital world.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <motion.span 
                    className="px-4 py-2 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Machine Learning
                  </motion.span>
                  <motion.span 
                    className="px-4 py-2 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Digital Humanities
                  </motion.span>
                  <motion.span 
                    className="px-4 py-2 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Public Policy
                  </motion.span>
                  <motion.span 
                    className="px-4 py-2 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Philosophy
                  </motion.span>
                  <motion.span 
                    className="px-4 py-2 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Data Analysis
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
