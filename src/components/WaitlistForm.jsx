import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.getwaitlist.com/api/v1/waiter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          waitlist_id: '20757',
          referral_link: window.location.href,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="flex w-[90%] xs:w-[80%] sm:w-[70%] max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value.toLowerCase());
          if (isSubmitted) setIsSubmitted(false);
        }}
        placeholder={isSubmitted ? "" : "email address"}
        className="flex-1 px-2 xs:px-4 py-2 bg-white/10 backdrop-blur-sm 
                 rounded-md xs:rounded-l-md xs:rounded-r-none 
                 text-white placeholder-white/60 text-xs xs:text-sm lowercase
                 focus:outline-none border-0"
        required
        disabled={isSubmitting}
      />
      <motion.button
        type="submit"
        className={`px-2 xs:px-4 py-2 backdrop-blur-sm 
                 rounded-md xs:rounded-r-md xs:rounded-l-none 
                 text-white text-xs xs:text-sm whitespace-nowrap
                 transition-all duration-200
                 disabled:opacity-50 relative border-0
                 -webkit-tap-highlight-color: transparent
                 ${isSubmitted ? 'bg-[#D2E3D5]/50' : 'bg-[#D2E3D5]/30 hover:bg-[#D2E3D5]/40 active:bg-[#D2E3D5]/40'}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "joining..." : isSubmitted ? "joined ✓" : "waitlist →"}
      </motion.button>
    </motion.form>
  );
}