
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIConsultant: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
        <div className="w-full lg:w-1/2 text-white md:sticky md:top-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold tracking-[0.5em] text-slate-500 uppercase mb-4 md:mb-6 block">Contact Stratégique</span>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 font-sora uppercase tracking-tighter leading-none">
              Besoin d'un <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>conseil d'expert ?</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-12 leading-relaxed font-light max-w-md">
              Que vous soyez un investisseur, un partenaire potentiel ou une marque en quête d'excellence, nos directeurs de pôles sont à votre disposition.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Direct</p>
                  <p className="text-white text-sm md:text-base font-medium">strategy@scudoo-holding.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Téléphone</p>
                  <p className="text-white text-sm md:text-base font-medium">+1 (450) 631-3069</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 bg-emerald-500 flex items-center justify-center mb-6"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter font-sora">Message Transmis</h3>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-1">
                  <label className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nom complet</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="JEAN DUPONT"
                    className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-slate-900 transition-colors text-xs md:text-sm font-medium uppercase tracking-wider"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Entreprise</label>
                  <input 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text" 
                    placeholder="SCUDOO TECH"
                    className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-slate-900 transition-colors text-xs md:text-sm font-medium uppercase tracking-wider"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email professionnel</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="STRATEGY@COMPANY.COM"
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-slate-900 transition-colors text-xs md:text-sm font-medium uppercase tracking-wider"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Votre message</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="VOTRE DEMANDE..."
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-slate-900 transition-colors text-xs md:text-sm font-medium resize-none uppercase tracking-wider"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 md:py-6 bg-slate-900 text-white font-bold text-[9px] md:text-[10px] tracking-[0.4em] uppercase hover:bg-slate-800 transition-all flex items-center justify-center gap-4 group"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white animate-spin" />
                ) : (
                  <>
                    <span>Envoyer la demande</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
