
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, CalendarClock, Award, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science - MS",
    field: "Inter Disciplinary Research Division - Digital Humanities",
    institution: "Indian Institute of Technology Jodhpur",
    period: "Jul 2024 - Jun 2026",
    location: "Jodhpur, India",
    activities: [
      "Member, Volleyball Team IIT Jodhpur",
      "Member, Shutterbugs"
    ],
    courses: [
      "Methods and Methodologies in Digital Humanities",
      "Programming Languages",
      "Data Structure and Algorithms",
      "Machine Learning",
      "Natural Language Processing",
      "Digital Economy",
      "Archiving and Databases",
      "Social Media Application Development",
      "AR/VR",
      "Public Policy"
    ]
  },
  {
    degree: "Bachelor of Arts - BA (H)",
    field: "Philosophy",
    institution: "Lady Shri Ram College for Women",
    period: "Jul 2021 - Jun 2024",
    location: "Delhi, India",
    grade: "First Division",
    activities: [
      "Member, Volleyball Team LSR",
      "Member, National Sports Organization",
      "Member, Phoenix Society - Science & Research"
    ],
    courses: [
      "Philosophy Of Mind",
      "Philosophy of Law",
      "Bioethics",
      "Applied Ethics",
      "TV and Radio Journalism",
      "Print Journalism",
      "Western Philosophy",
      "Indian Philosophy",
      "Critical Thinking",
      "Feminism",
      "Advertising",
      "Environmental Studies",
      "Knowledge and Skepticism",
      "Media Studies"
    ]
  },
  {
    degree: "High School",
    field: "Science",
    institution: "Meerut Public School For Girls",
    period: "Jul 2009 - Jul 2021",
    location: "Meerut, India",
    grade: "95.4% XII, 92.4% X",
    activities: [
      "School Head Girl 2020-2021",
      "School Vice Head Girl 2019-2020",
      "Participated in Inter School Speech Making Contest 2018",
      "Participated in 3rd Patrician Inter-School Debate 2016"
    ],
    courses: [
      "Biology", 
      "Physics", 
      "Chemistry", 
      "English", 
      "Physical Education", 
      "Hindustan Vocal Music"
    ]
  }
];

interface EducationProps {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  activities: string[];
  courses: string[];
}

const EducationCard = ({ education, index }: { education: EducationProps; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 mb-8 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-portfolio-deepPurple">{education.degree}</h3>
          <h4 className="text-lg text-portfolio-purple">{education.field}</h4>
          <h5 className="text-md font-medium text-portfolio-darkPurple mt-1">{education.institution}</h5>
        </div>
        <div className="bg-portfolio-purple/10 p-3 rounded-full">
          <GraduationCap className="text-portfolio-purple" size={28} />
        </div>
      </div>
      
      <div className="flex items-center mb-2 text-portfolio-gray">
        <CalendarClock size={16} className="mr-2" />
        <span className="text-sm">{education.period}</span>
      </div>
      
      <div className="flex items-center mb-4 text-portfolio-gray">
        <MapPin size={16} className="mr-2" />
        <span className="text-sm">{education.location}</span>
      </div>
      
      {education.grade && (
        <div className="flex items-center mb-4 text-portfolio-gray">
          <Award size={16} className="mr-2" />
          <span className="text-sm">Grade: {education.grade}</span>
        </div>
      )}
      
      <div className="mb-4">
        <h6 className="text-sm font-semibold mb-2 text-portfolio-deepPurple">Activities and Societies:</h6>
        <ul className="list-disc list-inside text-sm text-portfolio-gray space-y-1">
          {education.activities.map((activity, idx) => (
            <li key={idx}>{activity}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h6 className="text-sm font-semibold mb-2 text-portfolio-deepPurple">Relevant Coursework:</h6>
        <div className="flex flex-wrap gap-2">
          {education.courses.slice(0, 6).map((course, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-portfolio-gray px-2 py-1 rounded-full">
              {course}
            </span>
          ))}
          {education.courses.length > 6 && (
            <span className="text-xs bg-portfolio-purple/10 text-portfolio-purple px-2 py-1 rounded-full">
              +{education.courses.length - 6} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-portfolio-deepPurple mb-3">
            Academic <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto mb-6 rounded-full"></div>
          <p className="text-portfolio-gray max-w-xl mx-auto">
            My educational background combines humanities, philosophy, and cutting-edge 
            digital technologies for interdisciplinary research.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
