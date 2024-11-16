import React from 'react';
import { motion } from 'framer-motion';
import BackgroundVideo from './components/BackgroundVideo';
import WaitlistForm from './components/WaitlistForm';
import RunnerEmojis from './components/RunnerEmojis';
import Header from './components/Header';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundVideo />
      
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center 
                      px-2 sm:px-4 lg:px-8">
        <motion.div 
          className="absolute top-6 text-white/70 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <a 
            href="https://kineship.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            a product of kineship
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-xl"
        >
          <Header />
          <WaitlistForm />
          <RunnerEmojis />
        </motion.div>
      </div>
    </div>
  );
}