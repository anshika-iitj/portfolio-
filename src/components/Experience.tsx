
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Intern",
    company: "Indo-Pacific Studies Center",
    period: "Feb 2025 - Present",
    location: "Sydney, New South Wales, Australia (Remote)",
    description: "Engage in research, analysis, and discussions on Indo-Pacific security, development, and geopolitical issues. Attend expert-led webinars, write monthly commentaries, and collaborate with scholars and policy analysts."
  },
  {
    title: "Research Intern",
    company: "Indian Council of Social Sciences Research (ICSSR)",
    period: "Dec 2024 - Present",
    location: "Indian Institute of Technology, Jodhpur (Remote)",
    description: "Working on an ICSSR-funded research project 'Socio-Economic Influences on the Intergenerational Transmission of Indigenous Occupational Skills in Western Rajasthan' under the supervision of Dr. Akanksha Choudhary, Assistant Professor, School of Liberal Arts."
  },
  {
    title: "Volleyball Player",
    company: "Board of Student Sports, IIT Jodhpur",
    period: "Aug 2024 - Present",
    location: "India (On-site)",
    description: "Member of the volleyball team representing IIT Jodhpur."
  },
  {
    title: "Executive - Board of Departmental Societies",
    company: "Indian Institute of Technology Jodhpur",
    period: "Aug 2024 - Apr 2025",
    location: "Jodhpur, Rajasthan, India (On-site)",
    description: "Oversee administrative tasks, facilitate communication between the board and department, and ensure implementation of board policies. Represent the department in board meetings, help strategize and plan departmental goals, manage budgets, and coordinate events."
  },
  {
    title: "Conference Organizer",
    company: "Digital Humanities Alliance for Research and Teaching Innovations (DHARTI)",
    period: "Dec 2024",
    location: "Indian Institute of Technology Jodhpur (On-site)",
    description: "Organizing member of Third Digital Humanities Alliance for Research and Teaching Innovation, a Biennial Conference on Digital Subjectivities in the Global South. Designed visually impactful posters and banners that effectively communicated the conference's theme and objectives."
  },
];

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

const ExperienceCard = ({ experience, index }: { experience: ExperienceProps; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-6 border-l-4 border-portfolio-purple hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-portfolio-deepPurple mb-2">{experience.title}</h3>
      <h4 className="text-lg text-portfolio-purple mb-3">{experience.company}</h4>
      
      <div className="flex items-center mb-2 text-portfolio-gray">
        <Calendar size={16} className="mr-2" />
        <span className="text-sm">{experience.period}</span>
      </div>
      
      <div className="flex items-center mb-4 text-portfolio-gray">
        <MapPin size={16} className="mr-2" />
        <span className="text-sm">{experience.location}</span>
      </div>
      
      <p className="text-portfolio-gray leading-relaxed">{experience.description}</p>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto mb-6 rounded-full"></div>
          <p className="text-portfolio-gray max-w-xl mx-auto">
            My journey through academia and research combines interdisciplinary approaches 
            with practical applications across various institutions.
          </p>
        </motion.div>

        <div className="flex items-center justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-24 h-24 rounded-full bg-portfolio-purple/10 text-portfolio-purple"
          >
            <Briefcase size={40} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
