
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TransitionZoom: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Window open animation using clip-path 
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.6],
    [
      "inset(45% 45% 45% 45% round 0px)",
      "inset(0% 0% 0% 0% round 0px)"
    ]
  );

  // Zoom in effect for background image
  const imageScale = useTransform(scrollYProgress, [0.1, 0.9], [1.4, 1]);
  
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.5], [40, -40]);

  const globalOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-white z-40">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        <motion.div 
          style={{ opacity: globalOpacity }}
          className="absolute inset-0 bg-slate-900 z-10 pointer-events-none"
        >
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white px-6"
          >
            <span className="text-[10px] font-bold tracking-[1em] uppercase mb-6 opacity-40">Scudoo Transition</span>
            <h3 className="text-4xl md:text-7xl font-extrabold font-sora uppercase tracking-tighter text-center leading-none">
              L'ÉVEIL DE LA <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>VITALITÉ</span>
            </h3>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ clipPath, opacity: globalOpacity }}
          className="absolute inset-0 z-20 overflow-hidden"
        >
          <motion.div 
            style={{ scale: imageScale }}
            className="relative w-full h-full"
          >
            <div className="absolute inset-0 bg-slate-900/40 z-10" />
            
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
              alt="Performance Immersion" 
              className="w-full h-full object-cover grayscale-[0.3]"
            />
            
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-[1px] h-32 bg-white/30 mb-20" />
              <motion.div 
                style={{ opacity: useTransform(scrollYProgress, [0.5, 0.65], [0, 1]) }}
                className="absolute text-center mt-40"
              >
                <span className="text-white text-[10px] font-bold tracking-[0.8em] uppercase block mb-2">Phase II</span>
                <span className="text-white/60 text-[9px] font-medium tracking-[0.4em] uppercase">Architecture Humaine</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0.1, 0.4, 0.6], [0, 1, 0]),
            scale: useTransform(scrollYProgress, [0.1, 0.6], [0.6, 1.1]),
            borderColor: "rgba(255,255,255,0.2)"
          }}
          className="absolute w-[40vw] h-[40vh] border z-30 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default TransitionZoom;
