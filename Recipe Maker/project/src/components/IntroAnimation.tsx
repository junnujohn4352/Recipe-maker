import React from 'react';
import { motion } from 'framer-motion';

const IntroAnimation = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1.2, 1, 0.8],
          rotateY: [0, 0, 180, 180],
        }}
        transition={{ 
          duration: 2.5,
          times: [0, 0.3, 0.8, 1],
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="netflix-animation">
          <h1 className="logo-font text-7xl md:text-9xl text-red-600 font-bold tracking-wider">
            LOL
            <span className="text-yellow-400"> FOODS</span>
          </h1>
        </div>
        <motion.div
          className="absolute -bottom-8 left-0 right-0 mx-auto w-full h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ 
            duration: 2.5,
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default IntroAnimation;