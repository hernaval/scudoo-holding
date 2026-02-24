
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScrollText: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0.1, 0.9], ["20%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0.1, 0.9], ["-40%", "20%"]);
  const x3 = useTransform(scrollYProgress, [0.1, 0.9], ["15%", "-30%"]);
  
  const containerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.95, 1, 0.95]);

  const textPrimary = "PERFORMANCE • INNOVATION • VITALITÉ • NEXUS • ";
  const textSecondary = "EXCELLENCE • TECHNOLOGIE • BIEN-ÊTRE • APEX • ";
  const textTertiary = "STRATÉGIE • CROISSANCE • ÉCOSYSTÈME • ZENITH • ";

  // Use of responsive opacity: even lower on mobile (0.01) than on desktop (0.03) (0.03)
  const textBaseClass = "text-[18vw] md:text-[14vw] font-black leading-none tracking-tighter text-slate-900/[0.01] md:text-slate-900/[0.03] select-none font-sora inline-block scrolling-text-stroke";

  return (
    <section ref={targetRef} className="relative h-[150vh] md:h-[250vh] bg-white overflow-visible">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none space-y-4 md:space-y-0">
          <motion.div style={{ x: x1, opacity: containerOpacity }} className="whitespace-nowrap mb-[-2vw] md:mb-[-1vw]">
            <span className={textBaseClass}>{textPrimary}{textPrimary}</span>
          </motion.div>
          <motion.div style={{ x: x2, opacity: containerOpacity }} className="whitespace-nowrap mb-[-2vw] md:mb-[-1vw]">
            <span className={textBaseClass}>{textSecondary}{textSecondary}</span>
          </motion.div>
          <motion.div style={{ x: x3, opacity: containerOpacity }} className="whitespace-nowrap">
            <span className={textBaseClass}>{textTertiary}{textTertiary}</span>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div style={{ opacity: containerOpacity, scale }} className="text-center px-6 max-w-4xl z-10">
            <motion.span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4 md:mb-6 block">Vision 2026</motion.span>
            <h2 className="text-3xl md:text-7xl font-extrabold text-slate-900 mb-4 md:mb-6 font-sora tracking-tight leading-tight">
              Repousser les <span className="text-slate-400">frontières</span> de l'athlète moderne.
            </h2>
            <p className="text-base md:text-xl text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
              Nous fusionnons les données biométriques et le design de luxe pour créer l'écosystème ultime de la performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollText;
