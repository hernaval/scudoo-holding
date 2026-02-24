
import React from 'react';
import { motion } from 'framer-motion';
import { Brand } from '../types';

const brands: Brand[] = [
  {
    id: '1',
    name: 'VigorLife',
    category: 'Fitness',
    description: 'Réseau de clubs de sport ultra-premium connectés et environnements immersifs.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
    color: '#0f172a'
  },
  {
    id: '2',
    name: 'Serenity & Soul',
    category: 'Bien-être',
    description: 'Sanctuaires de récupération régénérative et méditation assistée par IA.',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=1000&auto=format&fit=crop',
    color: '#334155'
  },
  {
    id: '3',
    name: 'Apex Gear',
    category: 'Équipement',
    description: 'Ingénierie biomécanique de précision pour home gyms de prestige.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    color: '#475569'
  },
  {
    id: '4',
    name: 'PulseCore Systems',
    category: 'Tech',
    description: 'Plateforme SaaS IA transformant la donnée biométrique en stratégie.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    color: '#1e293b'
  }
];

const BrandsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
      {brands.map((brand, idx) => (
        <motion.div
          key={brand.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="group relative overflow-hidden bg-white h-[450px] md:h-[600px] cursor-pointer"
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img 
              src={brand.image} 
              alt={brand.name} 
              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
          </div>
          
          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
            <span className="inline-block text-[9px] font-bold uppercase tracking-[0.4em] mb-3 md:mb-4 text-white/60 group-hover:text-white transition-colors duration-500">
              Pôle {brand.category}
            </span>
            
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 font-sora uppercase tracking-tighter transform transition-transform duration-500 group-hover:-translate-y-2">
              {brand.name}
            </h3>
            
            <div className="overflow-hidden">
              <p className="text-white/70 text-sm font-light leading-relaxed mb-6 md:mb-8 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                {brand.description}
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-white/20 pt-4 md:pt-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-200">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">Découvrir</span>
              <div className="h-px w-10 md:w-12 bg-white/30 group-hover:w-20 md:group-hover:w-24 transition-all duration-500" />
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </motion.div>
      ))}
    </div>
  );
};

export default BrandsGrid;
