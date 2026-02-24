
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[60] w-14 h-14 bg-slate-900 text-white flex items-center justify-center shadow-2xl group transition-all duration-300 hover:bg-slate-800"
          aria-label="Retour en haut"
        >
          {/* Subtle background pulse */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-white"
          />
          
          <svg 
            className="w-5 h-5 relative z-10 transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-2 h-2 bg-white/20" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
