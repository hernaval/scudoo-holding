
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const MissionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Main panel reveal animation (in/out)
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.45, 0.85, 0.98],
    [
      "inset(15% 8% 15% 8% round 0px)",
      "inset(0% 0% 0% 0% round 0px)",
      "inset(0% 0% 0% 0% round 0px)",
      "inset(15% 8% 15% 8% round 0px)"
    ]
  );

  const contentOpacity = useTransform(
    scrollYProgress, 
    [0.3, 0.5, 0.85, 0.95], 
    [0, 1, 1, 0]
  );
  
  // Parallax effect for images with dramatic exit acceleration
  const imageY1 = useTransform(
    scrollYProgress, 
    [0.3, 0.7, 1.0], 
    [0, -100, -800]
  );
  const imageY2 = useTransform(
    scrollYProgress, 
    [0.3, 0.7, 1.0], 
    [0, 100, 800]
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 1.1 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1, 
        delay: 0.4 + (custom * 0.1),
        ease: [0.22, 1, 0.36, 1] 
      }
    })
  };

  const missionPoints = [
    { num: "01", title: "Excellence", desc: "La fusion de l'IA et de la biomécanique." },
    { num: "02", title: "Impact", desc: "Redéfinir la santé à l'échelle mondiale." },
    { num: "03", title: "Héritage", desc: "Concevoir les standards de demain." }
  ];

  return (
    <section ref={containerRef} className="relative h-[150vh] md:h-[250vh] bg-white">
      {/* Invisible anchor to jump to the open section */}
      <div id="mission" className="absolute top-[35%] left-0 w-full h-px pointer-events-none scroll-mt-0" />
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 z-0 bg-slate-50 opacity-10" />

        <motion.div 
          style={{ clipPath }}
          className="absolute inset-0 z-10 bg-slate-50 flex items-center overflow-hidden"
        >
          <motion.div 
            style={{ opacity: contentOpacity }}
            className="container mx-auto px-6 w-full"
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-center">
              <div className="w-full lg:w-1/2">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants} className="mb-3 md:mb-4">
                    <span className="text-[10px] font-bold tracking-[0.5em] text-slate-400 uppercase">Vision Stratégique</span>
                  </motion.div>
                  
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl md:text-6xl font-extrabold mb-8 md:mb-12 font-sora tracking-tight leading-[1.1] text-slate-900 uppercase"
                  >
                    Le futur de la <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: "1px #0f172a" }}>Vitalité</span> Intelligente.
                  </motion.h2>

                  <div className="space-y-4 md:space-y-6">
                    {missionPoints.map((point, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ x: 10 }}
                        className="group flex gap-4 md:gap-6 items-center p-4 md:p-6 border border-transparent hover:border-slate-100 hover:bg-white transition-all duration-300 cursor-default"
                      >
                        <motion.div 
                          whileHover={{ rotate: 90 }}
                          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-slate-900 flex items-center justify-center font-bold text-white font-sora text-[10px] transition-transform duration-500 group-hover:bg-slate-800"
                        >
                          {point.num}
                        </motion.div>
                        <div className="flex-grow">
                          <h4 className="text-base md:text-xl font-bold mb-1 text-slate-900 font-sora tracking-tight uppercase transition-colors group-hover:text-slate-950">
                            {point.title}
                          </h4>
                          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light group-hover:text-slate-600">
                            {point.desc}
                          </p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 relative hidden md:block">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div style={{ y: imageY1 }} className="space-y-6">
                    <motion.div 
                      variants={imageVariants} 
                      custom={0}
                      className="group relative overflow-hidden shadow-2xl"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
                        className="w-full h-48 md:h-72 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                        alt="Performance Tech" 
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                    
                    <motion.div 
                      variants={imageVariants} 
                      custom={2}
                      className="group relative overflow-hidden shadow-2xl"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" 
                        className="w-full h-40 md:h-56 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                        alt="Focus Strength" 
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                  </motion.div>

                  <motion.div style={{ y: imageY2 }} className="space-y-6 pt-16">
                    <motion.div 
                      variants={imageVariants} 
                      custom={1}
                      className="group relative overflow-hidden shadow-2xl"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop" 
                        className="w-full h-40 md:h-56 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                        alt="Wellness Balance" 
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                    
                    <motion.div 
                      variants={imageVariants} 
                      custom={3}
                      className="group relative overflow-hidden shadow-2xl"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1000&auto=format&fit=crop" 
                        className="w-full h-48 md:h-72 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                        alt="High Tech Equipment" 
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Decorative element background */}
                <div className="absolute -top-10 -right-10 w-64 h-64 border border-slate-200 -z-10 rounded-full opacity-50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
