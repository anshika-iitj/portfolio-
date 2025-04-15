
import React from "react";
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <motion.div
          className="flex space-x-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-4 h-4 rounded-full bg-portfolio-purple"
              animate={{
                y: [0, -15, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        <motion.h2 
          className="text-xl font-playfair text-portfolio-deepPurple"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Loading Portfolio...
        </motion.h2>
      </div>
    </div>
  );
};

export default LoadingAnimation;
