
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Désactiver le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Marques', id: 'brands' },
    { label: 'Expertise', id: 'services' },
    { label: 'Mission', id: 'mission' },
    { label: 'Contact', id: 'ai-concierge' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-white border-b border-slate-200 shadow-xl md:shadow-none' 
          : 'py-8 bg-transparent'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#top" 
            onClick={(e) => handleNavClick(e, 'top')}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity z-[60]"
          >
            <div className={`w-8 h-8 rounded-none flex items-center justify-center transition-colors duration-500 ${isMenuOpen ? 'bg-white' : 'bg-slate-900'}`}>
               <div className={`w-3 h-3 rotate-45 transition-colors duration-500 ${isMenuOpen ? 'bg-slate-900' : 'bg-white'}`} />
            </div>
            <span className={`text-xl font-extrabold tracking-tighter font-sora uppercase transition-colors duration-500 ${isMenuOpen ? 'text-white' : 'text-slate-900'}`}>SCUDOO HOLDING</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-widest text-slate-600">
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id)} 
                className="hover:text-slate-900 transition-colors uppercase text-[11px] font-bold"
              >
                {item.label}
              </a>
            ))}
            
            <div className="relative inline-block group">
              <a 
                href="#ai-concierge"
                onClick={(e) => handleNavClick(e, 'ai-concierge')}
                className="flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white rounded-none text-[10px] font-bold hover:bg-slate-800 transition-all tracking-[0.2em] uppercase shadow-md"
              >
                <span>NOUS REJOINDRE</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 7l-10 10M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-[60] p-2 focus:outline-none"
            aria-label="Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 transition-all duration-500 transform ${isMenuOpen ? 'bg-white rotate-45 translate-y-2.5' : (isScrolled ? 'bg-slate-900' : 'bg-slate-900')}`} />
              <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : (isScrolled ? 'bg-slate-900' : 'bg-slate-900')}`} />
              <span className={`w-full h-0.5 transition-all duration-500 transform ${isMenuOpen ? 'bg-white -rotate-45 -translate-y-2' : (isScrolled ? 'bg-slate-900' : 'bg-slate-900')}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center p-6 md:hidden"
          >
            {/* Dedicated Close Button for Overlay */}
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-6 text-white flex items-center gap-3 group focus:outline-none"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">Fermer</span>
              <div className="w-10 h-10 flex items-center justify-center border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </motion.button>

            {/* Background decorative element */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-white rotate-12" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white -rotate-6" />
            </div>

            <div className="relative flex flex-col items-center gap-8 w-full">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-4xl font-extrabold text-white font-sora uppercase tracking-tighter hover:text-slate-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 w-full max-w-xs"
              >
                <a
                  href="#ai-concierge"
                  onClick={(e) => handleNavClick(e, 'ai-concierge')}
                  className="block w-full text-center py-6 border-2 border-white text-white font-bold text-xs tracking-[0.4em] uppercase hover:bg-white hover:text-slate-900 transition-all"
                >
                  Nous Rejoindre
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-20 flex gap-8 text-white/40"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase italic">Paris</span>
                <span className="text-[10px] font-bold tracking-widest uppercase italic">Mirabel</span>
                <span className="text-[10px] font-bold tracking-widest uppercase italic">Dubai</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
