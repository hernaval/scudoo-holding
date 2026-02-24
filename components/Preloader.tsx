
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);

  useEffect(() => {
    // Minimum display time to avoid a "flash" on very fast connections
    const timer = setTimeout(() => {
      setMinimumTimePassed(true);
    }, 800);

    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  const showLoader = !isLoaded || !minimumTimePassed;

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          {/* Background Decorative Elements - Subtle on white */}
          <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-slate-900 rotate-12" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-slate-900 -rotate-6" />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Minimalist Loading Indicator */}
            <div className="mb-8 relative">
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="w-12 h-12 border-2 border-slate-100 border-t-slate-900 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-slate-900 rotate-45" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-lg font-extrabold tracking-[0.3em] text-slate-900 font-sora uppercase mb-2">
                SCUDOO <span className="text-transparent" style={{ WebkitTextStroke: "1px #0f172a" }}>HOLDING</span>
              </h1>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase">Chargement</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.5, 1] }}
                  className="flex gap-1"
                >
                  <span className="w-0.5 h-0.5 bg-slate-400 rounded-full" />
                  <span className="w-0.5 h-0.5 bg-slate-400 rounded-full" />
                  <span className="w-0.5 h-0.5 bg-slate-400 rounded-full" />
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Status */}
          <div className="absolute bottom-12">
            <span className="text-[8px] font-bold tracking-[0.5em] text-slate-300 uppercase">
              Écosystème de Performance
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
