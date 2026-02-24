
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BrandsGrid from './components/BrandsGrid';
import MissionSection from './components/MissionSection';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';
import HorizontalScrollText from './components/HorizontalScrollText';
import ServicesSection from './components/ServicesSection';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div id="top" className="relative min-h-screen">
      <Preloader />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-slate-900 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="metrics" className="py-12 md:py-20 bg-slate-50 scroll-mt-24">
          <Stats />
        </section>

        <HorizontalScrollText />

        <section id="brands" className="py-16 md:py-32 bg-white scroll-mt-24">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 md:gap-12 mb-12 md:mb-24"
            >
              <div className="max-w-4xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 mb-4 md:mb-8 block">Notre Portfolio</span>
                <h2 className="text-5xl md:text-8xl font-extrabold font-sora tracking-tighter leading-none text-slate-900 uppercase">
                  Un Écosystème <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #0f172a" }}>De Marques</span> Leaders
                </h2>
              </div>
              
              <div className="lg:max-w-md lg:text-right">
                <p className="text-lg md:text-2xl text-slate-500 font-light leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-slate-900 pl-6 md:pl-0 md:pr-10">
                  De la technologie de pointe aux équipements de luxe, nous redéfinissons les standards de la performance humaine.
                </p>
              </div>
            </motion.div>
            <BrandsGrid />
          </div>
        </section>

        <ServicesSection />

        <MissionSection />

        <section id="ai-concierge" className="py-16 md:py-32 bg-slate-900 overflow-hidden scroll-mt-24">
          <AIConsultant />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
