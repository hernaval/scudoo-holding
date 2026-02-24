
import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as const 
      },
    },
  };

  const partners = ["FORBES", "WIRED", "VOGUE", "GQ", "BLOOMBERG", "HYPEBEAST", "WALLPAPER", "MONOCLE"];
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-10 right-[-5%] w-[35vw] h-[35vw] bg-slate-50 border border-slate-100 -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-20 opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-3/5 z-20"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block py-1 px-4 bg-slate-900 text-white text-[9px] font-bold tracking-[0.4em] uppercase">
                ESTABLISHED 2025-2026
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-extrabold leading-[1] md:leading-[0.9] mb-4 md:mb-6 tracking-tighter font-sora text-slate-900 uppercase"
            >
              L'Elite <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #0f172a" }}>De La</span> <br />
              Performance.
            </motion.h1>

            <motion.div variants={itemVariants} className="max-w-xl mb-6 md:mb-8">
              <p className="text-base md:text-xl lg:text-2xl text-slate-500 font-light leading-relaxed">
                Scudoo Holding orchestre l'avenir du bien-être à travers un écosystème de marques <span className="text-slate-900 font-medium italic">ultra-premium</span> et data-driven.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10 md:mb-12">
              <button className="relative group px-8 py-4 md:py-5 bg-slate-900 text-white overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.15)]">
                <span className="relative z-10 font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase">L'écosystème</span>
                <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-500 group-hover:w-full" />
              </button>
              
              <button className="px-8 py-4 md:py-5 border border-slate-200 text-slate-900 font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase hover:bg-slate-50 transition-colors">
                Rapport Annuel
              </button>
            </motion.div>
            
            {/* Horizontal Compact Partners Marquee - Aligned and reduced height */}
            <motion.div variants={itemVariants} className="relative w-full max-w-2xl border-t border-slate-100 pt-6">
              <div className="flex flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap leading-tight">
                    PARTENAIRES <br/>STRATÉGIQUES
                  </div>
                </div>

                <div className="relative flex-grow overflow-hidden group">
                  <div className="absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-8 md:w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                  <motion.div 
                    className="flex gap-8 md:gap-12 items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                      duration: 30, 
                      repeat: Infinity, 
                      ease: "linear",
                      repeatType: "loop"
                    }}
                    whileHover={{ animationPlayState: "paused" }}
                  >
                    {repeatedPartners.map((partner, index) => (
                      <div 
                        key={`${partner}-${index}`}
                        className="text-[11px] md:text-xs font-sora font-bold tracking-widest text-slate-900/20 hover:text-slate-900 transition-colors duration-300"
                      >
                        {partner}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image side - Reduced max height to ensure visibility of partners below on small laptops */}
          <div className="w-full lg:w-2/5 relative h-[300px] md:h-[500px] lg:h-[550px] xl:h-[650px] z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ y: y2 }}
              className="relative w-full h-full z-10"
            >
              <div className="absolute inset-0 border-[10px] md:border-[15px] border-white z-20 pointer-events-none shadow-[0_0_80px_rgba(0,0,0,0.05)]" />
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                alt="Luxury Fitness Performance" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -right-4 md:top-10 md:-right-8 bg-white p-6 md:p-8 border border-slate-100 shadow-2xl hidden md:block z-30"
              >
                <div className="flex flex-col gap-2 md:gap-3">
                  <div className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.3em]">Capital Growth</div>
                  <div className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tighter font-sora">+42.8%</div>
                  <div className="w-full bg-slate-100 h-1 mt-1 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="bg-slate-900 h-full"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 h-20 md:w-24 md:h-24 border-l border-b border-slate-900 z-0" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[115%] h-[110%] md:h-[115%] border border-slate-50 rotate-12 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
