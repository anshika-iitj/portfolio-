
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Code, BookOpen } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const academicHighlights = [
    {
      icon: GraduationCap,
      title: "Academic Journey",
      description: "Pursuing an interdisciplinary Master's in Digital Humanities, bridging technology, social sciences, and humanities."
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Proficient in Python, R, JavaScript, and advanced data analysis techniques with a focus on computational methodologies."
    },
    {
      icon: BookOpen,
      title: "Research Focus",
      description: "Exploring the intersection of AI, ethics, and public policy with a critical lens on technological transformation."
    },
    {
      icon: Briefcase,
      title: "Professional Vision",
      description: "Committed to leveraging digital technologies to solve complex societal challenges and enhance human understanding."
    }
  ];

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
                <p className="text-portfolio-gray mb-6 leading-relaxed">
                  As a Digital Humanities researcher, I am passionate about exploring the transformative potential 
                  of technology in understanding complex social and humanistic challenges. My academic and research 
                  journey is driven by an interdisciplinary approach that combines critical thinking with technical expertise.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {academicHighlights.map((highlight, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all">
                      <div className="flex items-center mb-2">
                        <highlight.icon className="mr-3 text-portfolio-purple" size={24} />
                        <h4 className="text-lg font-semibold text-portfolio-deepPurple">{highlight.title}</h4>
                      </div>
                      <p className="text-portfolio-gray text-sm">{highlight.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {["AI Ethics", "Computational Social Science", "Data Visualization", "Policy Analysis", "Human-Computer Interaction"].map((skill, index) => (
                    <motion.span 
                      key={index}
                      className="px-4 py-2 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
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

