import React from 'react';
import { motion } from 'framer-motion';

export default function RunnerEmojis() {
  const container = {
    hidden: { x: 200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 55,
        damping: 11,
        mass: 1.4,
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: 40, opacity: 0, scale: 0.8 },
    show: { 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 55,
        damping: 11,
        mass: 1.4,
      }
    }
  };

  return (
    <motion.div 
      className="mt-4 sm:mt-6 flex justify-center gap-0.5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {['🏃‍♂️', '🏃‍♀️', '🏃'].map((emoji, index) => (
        <motion.span 
          key={index} 
          className="text-xl sm:text-2xl"
          variants={item}
          whileHover={{ 
            scale: 1.5,
            rotate: [0, -15, 15, -15, 0],
            transition: {
              duration: 0.5,
              rotate: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.6
              }
            }
          }}
        >
          {emoji}
        </motion.span>
      ))}
    </motion.div>
  );
}