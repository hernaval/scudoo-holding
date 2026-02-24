
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface CounterProps {
  value: number;
  decimals?: number;
}

const Counter: React.FC<CounterProps> = ({ value, decimals = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(latest),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue.toFixed(decimals)}</span>;
};

const stats = [
  { label: 'Utilisateurs Actifs', value: 2.4, suffix: 'M', decimals: 1 },
  { label: 'Marques Leaders', value: 12, suffix: '+', decimals: 0 },
  { label: 'Présence Pays', value: 45, suffix: '', decimals: 0 },
  { label: 'Chiffre d\'Affaires', value: 850, suffix: 'M€', decimals: 0 },
];

const Stats: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border-none">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial="initial"
            whileHover="hover"
            className="relative py-12 md:py-20 px-4 md:px-8 text-center cursor-default group overflow-hidden"
          >
            <motion.div
              variants={{
                initial: { color: "#e2e8f0", rotate: 0 },
                hover: { color: "#0f172a", rotate: 90 }
              }}
              transition={{ duration: 0.4 }}
              className="absolute top-6 right-6 md:top-8 md:right-8"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </motion.div>

            <div className="relative z-10">
              <div className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-2 md:mb-4 font-sora tracking-tighter">
                <Counter value={stat.value} decimals={stat.decimals} />{stat.suffix}
              </div>
              
              <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] group-hover:text-slate-900 transition-colors duration-300">
                {stat.label}
              </div>
            </div>

            <motion.div 
              variants={{
                initial: { scaleX: 0, backgroundColor: "#f1f5f9" },
                hover: { scaleX: 1, backgroundColor: "#0f172a" }
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 right-0 h-[3px] md:h-[4px] origin-left"
            />
            
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100 -z-10" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
