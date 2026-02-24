
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Ingénierie de Design",
    description: "Nous concevons des environnements immersifs et des équipements qui repoussent les limites de l'esthétique et de l'ergonomie athlétique.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    tags: ["Architecture intérieure", "R&D Biomecanique", "Prototypage 3D"],
    glow: "rgba(241, 245, 249, 0.5)"
  },
  {
    id: "02",
    title: "Intelligence Data & AI",
    description: "Transformation des flux de données biométriques en stratégies de performance prédictives et personnalisées pour l'élite.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tags: ["Deep Learning", "Analyse temps réel", "KPI Performance"],
    glow: "rgba(224, 231, 255, 0.5)"
  },
  {
    id: "03",
    title: "Stratégie d'Expansion",
    description: "Accompagnement des marques à fort potentiel dans leur déploiement sur les marchés internationaux les plus exigeants.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-5 10a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    tags: ["Market Entry", "Logistique Luxe", "Réseau Global"],
    glow: "rgba(209, 250, 229, 0.5)"
  },
  {
    id: "04",
    title: "Programmes Corporate",
    description: "Solutions holistiques de bien-être pour les entreprises qui placent la santé humaine au cœur de leur croissance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    tags: ["Santé Holistique", "Team Performance", "Audits Vitalité"],
    glow: "rgba(255, 228, 230, 0.5)"
  }
];

const ServiceCard: React.FC<{ service: typeof services[0], index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative py-10 md:py-16 px-6 md:px-14 bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors duration-500 last:border-0 ${index === 0 ? 'mt-12 md:mt-32 lg:mt-64' : ''}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"
           style={{ background: `radial-gradient(circle at 70% 50%, ${service.glow} 0%, transparent 60%)` }} />
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-14 items-start">
        <div className="flex-shrink-0">
          <span className="text-4xl md:text-7xl font-black text-slate-100 font-sora leading-none group-hover:text-slate-900 transition-colors duration-500">
            {service.id}
          </span>
        </div>
        
        <div className="flex-grow">
          <div className="w-8 h-8 md:w-10 md:h-10 mb-4 md:mb-6 text-slate-300 group-hover:text-slate-900 transition-colors duration-500">
            {service.icon}
          </div>
          
          <h3 className="text-xl md:text-4xl font-bold mb-3 md:mb-4 font-sora text-slate-900 uppercase tracking-tighter">
            {service.title}
          </h3>
          
          <p className="text-slate-500 text-sm md:text-lg font-light leading-relaxed mb-4 md:mb-6 max-w-xl">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {service.tags.map((tag, tIdx) => (
              <span key={tIdx} className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 border border-slate-100 px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 group-hover:bg-white group-hover:border-slate-300 group-hover:text-slate-900 transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>

          <button className="flex items-center gap-3 text-[9px] md:text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em] group/btn">
            <span className="border-b-2 border-slate-900 pb-1 group-hover/btn:pr-3 transition-all duration-300">Expertise</span>
            <svg className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section id="services" ref={containerRef} className="relative bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          <div className="w-full lg:w-2/5 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-12 md:py-20 lg:py-0 z-30 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: titleY, opacity }}
              className="pointer-events-auto"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-slate-400 mb-6 md:mb-8 block">Notre Savoir-Faire</span>
              <h2 className="text-4xl md:text-7xl xl:text-8xl font-extrabold font-sora tracking-tighter text-slate-900 leading-[1] md:leading-[0.9] uppercase mb-8 md:mb-12">
                L'Architecture <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #0f172a" }}>De La Réussite.</span>
              </h2>
              
              <div className="max-w-xs">
                <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed border-l-2 border-slate-900 pl-6 md:pl-8 mb-8 md:mb-12">
                  Nous bâtissons les piliers technologiques qui soutiennent la performance globale de demain.
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="flex-grow h-[1px] bg-slate-100 overflow-hidden">
                    <motion.div 
                      className="h-full bg-slate-900 origin-left"
                      style={{ scaleX: scrollYProgress }}
                    />
                  </div>
                  <motion.span className="text-[9px] md:text-[10px] font-bold font-sora text-slate-900 tabular-nums">
                    {useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`)}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-3/5 border-l border-slate-100 z-10 relative bg-white">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} index={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
