import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        // Success handling
        setEmail('');
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
      className="flex gap-0 w-full max-w-[320px] sm:max-w-md mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
        placeholder="email address"
        className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-l-md 
                 text-white placeholder-white/60 text-sm lowercase
                 focus:outline-none border-r border-white/10
                 transition-all duration-300"
        required
        disabled={isSubmitting}
      />
      <motion.button
        type="submit"
        className="px-4 py-2 bg-[#D2E3D5]/30 backdrop-blur-sm rounded-r-md 
                 text-white text-sm whitespace-nowrap lowercase
                 hover:bg-[#D2E3D5]/40 transition-all duration-200
                 disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "joining..." : "waitlist →"}
      </motion.button>
    </motion.form>
  );
}