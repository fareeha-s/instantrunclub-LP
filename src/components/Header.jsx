import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <>
      <motion.h1 
        className="text-[40px] sm:text-[55px] md:text-[70px] font-[500] italic 
                   text-[#F0F0F0]/80 tracking-[0.06em] leading-[1.1em] mb-2 sm:mb-3 
                   lowercase whitespace-nowrap px-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 70,
          damping: 15,
          mass: 1.2,
          delay: 0.5
        }}
      >
        instant run club
      </motion.h1>
      
      <motion.p 
        className="text-[16px] sm:text-[18px] md:text-[20px] text-[#F5F2F2] 
                   font-normal tracking-[0.14em] leading-[1.2em] mb-8 sm:mb-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        an app for spontaneous social runs.
      </motion.p>
    </>
  );
}