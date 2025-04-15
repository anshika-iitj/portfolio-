
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    // This is just a visual simulation
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
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
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-portfolio-purple mx-auto mb-6 rounded-full"></div>
          <p className="text-portfolio-gray max-w-xl mx-auto">
            I'm always open to discussing research opportunities, collaborations, 
            or any questions you may have. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-5 bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-portfolio-deepPurple mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-md font-medium text-portfolio-deepPurple">Location</h4>
                  <p className="text-portfolio-gray">Indian Institute of Technology, Jodhpur, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-md font-medium text-portfolio-deepPurple">Phone</h4>
                  <p className="text-portfolio-gray">(+91) 9411815902</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-md font-medium text-portfolio-deepPurple">Email</h4>
                  <p className="text-portfolio-gray">m24id1012@iitj.ac.in</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-md font-medium text-portfolio-deepPurple mb-4">Connect with me:</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple transition-all duration-300 hover:bg-portfolio-purple hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple transition-all duration-300 hover:bg-portfolio-purple hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:m24id1012@iitj.ac.in"
                  className="p-3 rounded-full bg-portfolio-purple/10 text-portfolio-purple transition-all duration-300 hover:bg-portfolio-purple hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="lg:col-span-7 bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-portfolio-deepPurple mb-6">Send a Message</h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 text-green-800 p-4 rounded-md border border-green-200 flex items-center justify-center h-64">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-lg font-medium">Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-portfolio-deepPurple mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-portfolio-deepPurple mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-portfolio-deepPurple mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
                    placeholder="Message Subject"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-deepPurple mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:border-transparent"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="bg-portfolio-purple hover:bg-portfolio-darkPurple text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
