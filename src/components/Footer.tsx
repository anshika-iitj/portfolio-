
import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-deepPurple text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-playfair text-2xl font-bold mb-2">Anshika Kashyap</h2>
            <p className="text-gray-300 max-w-md">
              Digital Humanities Researcher specializing in interdisciplinary approaches
              to technology, society, and humanities.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-white/10 rounded-full mb-4 hover:bg-white/20 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
            
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            m24id1012@iitj.ac.in | (+91) 9411815902
          </p>
          
          <div className="flex items-center text-gray-300 text-sm">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-red-400" fill="currentColor" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
