
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Database, FileCode, Globe, LayoutDashboard, MessageSquare, Search } from "lucide-react";

const skillCategories = [
  {
    name: "Research Skills",
    icon: <Search size={32} />,
    skills: [
      { name: "Qualitative Research", level: 90 },
      { name: "Data Analysis", level: 85 },
      { name: "Critical Thinking", level: 95 },
      { name: "Analytical Skills", level: 90 }
    ]
  },
  {
    name: "Technical Skills",
    icon: <FileCode size={32} />,
    skills: [
      { name: "Python", level: 75 },
      { name: "Machine Learning", level: 70 },
      { name: "Data Visualization", level: 80 },
      { name: "Web Development", level: 65 }
    ]
  },
  {
    name: "Digital Humanities",
    icon: <Brain size={32} />,
    skills: [
      { name: "Digital Mapping", level: 85 },
      { name: "Computational Analysis", level: 80 },
      { name: "Digital Archives", level: 75 },
      { name: "Text Analysis", level: 85 }
    ]
  },
  {
    name: "Communication",
    icon: <MessageSquare size={32} />,
    skills: [
      { name: "Academic Writing", level: 90 },
      { name: "Public Speaking", level: 85 },
      { name: "Content Creation", level: 80 },
      { name: "Research Presentation", level: 90 }
    ]
  }
];

const certifications = [
  {
    title: "Stock Investing Masterclass",
    issuer: "AIKG Youth Code - Groww",
    date: "Jan 2025",
    skills: ["Stock Market Analysis", "Financial Statement Analysis"]
  },
  {
    title: "Computation in Social Choice and Economics",
    issuer: "Department of Computer Science and Engineering, IIT Jodhpur",
    date: "Dec 2024",
    skills: ["Linear Algebra", "Social Choice Theory"]
  }
];

interface SkillProps {
  name: string;
  level: number;
}

const SkillBar = ({ skill, index }: { skill: SkillProps; index: number }) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true });

  return (
    <div ref={barRef} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-portfolio-deepPurple font-medium">{skill.name}</span>
        <span className="text-xs text-portfolio-gray">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-portfolio-purple to-portfolio-darkPurple"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

interface CategoryProps {
  name: string;
  icon: JSX.Element;
  skills: SkillProps[];
}

const SkillCategory = ({ category, index }: { category: CategoryProps; index: number }) => {
  const categoryRef = useRef(null);
  const isInView = useInView(categoryRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={categoryRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-6 card-hover h-full"
    >
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple mr-4">
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold text-portfolio-deepPurple">{category.name}</h3>
      </div>

      <div>
        {category.skills.map((skill, idx) => (
          <SkillBar key={idx} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
}

const CertificationCard = ({ certification, index }: { certification: CertificationProps; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-start card-hover"
    >
      <div className="bg-portfolio-purple/10 p-3 rounded-full text-portfolio-purple mr-4 mt-1">
        <Database size={20} />
      </div>
      <div>
        <h4 className="text-md font-semibold text-portfolio-deepPurple">{certification.title}</h4>
        <p className="text-sm text-portfolio-gray mb-2">{certification.issuer} ({certification.date})</p>
        <div className="flex flex-wrap gap-2">
          {certification.skills.map((skill, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-portfolio-gray px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-portfolio-deepPurple mb-3">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto mb-6 rounded-full"></div>
          <p className="text-portfolio-gray max-w-xl mx-auto">
            A diverse skill set spanning research methodologies, technical tools, 
            and interdisciplinary approaches in digital humanities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple mr-4">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-semibold text-portfolio-deepPurple">Languages</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-portfolio-purple mr-2"></span>
              <span className="text-portfolio-deepPurple font-medium">English</span>
              <span className="ml-auto text-sm text-portfolio-gray">Professional</span>
            </div>
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-portfolio-purple mr-2"></span>
              <span className="text-portfolio-deepPurple font-medium">Hindi</span>
              <span className="ml-auto text-sm text-portfolio-gray">Native</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple mr-4">
              <LayoutDashboard size={32} />
            </div>
            <h3 className="text-xl font-semibold text-portfolio-deepPurple">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} certification={certification} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
