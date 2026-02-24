
import React from 'react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90;
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

  return (
    <footer className="bg-white pt-12 md:pt-24 pb-6 md:pb-8 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <a href="#top" onClick={(e) => handleNavClick(e, 'top')} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <div className="w-8 h-8 bg-slate-900 rounded-none flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rotate-45" />
                </div>
                <span className="text-xl font-extrabold tracking-tighter text-slate-900 font-sora uppercase">SCUDOO HOLDING</span>
              </a>
            </div>
            <p className="text-slate-500 max-w-sm text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
              Propulser l'humanité vers son plein potentiel à travers un écosystème de marques leaders, innovantes et responsables.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 md:gap-5">
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all duration-300" aria-label="Instagram">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all duration-300" aria-label="X">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:pt-2">
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-500 text-[13px] md:text-sm">
              <li><a href="#brands" onClick={(e) => handleNavClick(e, 'brands')} className="hover:text-slate-900 transition-colors">Nos Marques</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-slate-900 transition-colors">Notre Expertise</a></li>
              <li><a href="#mission" onClick={(e) => handleNavClick(e, 'mission')} className="hover:text-slate-900 transition-colors">Notre Mission</a></li>
              <li><a href="#ai-concierge" onClick={(e) => handleNavClick(e, 'ai-concierge')} className="hover:text-slate-900 transition-colors">Contact Stratégique</a></li>
            </ul>
          </div>

          <div className="md:pt-2">
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">Contact Siège</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-500 text-[13px] md:text-sm">
              <li className="leading-relaxed">
                12220 Rue Félix L'Allié, <br />
                Mirabel, QC J7N 0T9, Canada
              </li>
              <li>
                <a href="tel:+14506313069" className="hover:text-slate-900 transition-colors font-medium">
                  +1 (450) 631-3069
                </a>
              </li>
              <li>
                <a href="mailto:contact@scudoo-holding.com" className="hover:text-slate-900 transition-colors">
                  contact@scudoo-holding.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:pt-2">
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">Société</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-500 text-[13px] md:text-sm">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Investisseurs</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Presse</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="text-slate-400 text-[9px] md:text-[10px] font-medium text-center md:text-left">
            © 2026 Scudoo Holding. Tous droits réservés.
          </div>
          <div className="flex gap-4 md:gap-6 text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
