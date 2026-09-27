'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { MaterialSpecimen } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Info, Layers } from 'lucide-react';

export default function MaterialInspector() {
  const { language } = useLanguage();
  const t = CONTENT[language].materials;
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialSpecimen | null>(null);

  return (
    <section id="matieres" className="w-full bg-brand-sandLight/40 py-24 sm:py-32 border-b border-brand-hairline relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1px] bg-brand-clay" />
              <p className="font-sans text-[11px] sm:text-xs font-normal tracking-editorial text-brand-muted uppercase">
                {t.eyebrow}
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black leading-tight mb-4">
              {t.title}
            </h2>
            <p className="font-sans text-brand-muted text-sm sm:text-base font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="text-[11px] font-sans text-brand-muted tracking-widest uppercase border-b border-brand-hairline pb-2 self-start md:self-auto">
            {language === 'fr' ? '4 Matières Éprouvées' : '4 Enduring Specimens'}
          </div>
        </div>

        {/* 4 Tactile Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.items.map((mat, idx) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onClick={() => setSelectedMaterial(mat)}
              className="border border-brand-hairline bg-brand-bg rounded-none overflow-hidden group hover:border-brand-black/50 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Material Texture Image */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-brand-sand/50">
                  <img
                    src={mat.imageUrl}
                    alt={mat.name}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-black/5 group-hover:opacity-0 transition-opacity duration-300" />
                  
                  {/* Floating spec pill */}
                  <div className="absolute bottom-3 left-3 bg-brand-bg/95 px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider border border-brand-hairline text-brand-black">
                    N° 0{idx + 1}
                  </div>
                </div>

                {/* Material Specification Specs */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-brand-black mb-4 leading-snug group-hover:text-brand-clay transition-colors duration-200">
                    {mat.name}
                  </h3>

                  <div className="space-y-3 text-xs font-sans">
                    <div>
                      <span className="text-[10px] tracking-editorial uppercase text-brand-muted block font-medium">
                        {language === 'fr' ? 'Provenance' : 'Origin'}
                      </span>
                      <span className="text-brand-black/90 font-light">{mat.origin}</span>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-editorial uppercase text-brand-muted block font-medium">
                        {language === 'fr' ? 'Finition' : 'Finish'}
                      </span>
                      <span className="text-brand-black/90 font-light">{mat.finish}</span>
                    </div>

                    <div className="pt-2 border-t border-brand-hairline">
                      <span className="text-[10px] tracking-editorial uppercase text-brand-muted block font-medium">
                        {language === 'fr' ? 'Application' : 'Application'}
                      </span>
                      <span className="text-brand-black text-[11px] font-light italic leading-tight block mt-0.5">
                        {mat.useCase}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 pb-5 pt-3 border-t border-brand-hairline/60 flex items-center justify-between text-[10px] uppercase tracking-editorial text-brand-muted group-hover:text-brand-black transition-colors">
                <span>{language === 'fr' ? 'Détails de la matière' : 'Material details'}</span>
                <span className="text-brand-clay">+</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Material Detailed Inspection Modal */}
      <AnimatePresence>
        {selectedMaterial && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-brand-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-bg border border-brand-hairline max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedMaterial(null)}
                className="absolute top-6 right-6 p-2 text-brand-black hover:text-brand-clay transition-colors"
                aria-label="Close material modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-monograph text-brand-clay mb-2 font-mono">
                <Layers className="w-3.5 h-3.5" />
                <span>SPECIMEN ARCHITECTURAL</span>
              </div>

              <h3 className="font-serif text-3xl text-brand-black mb-4">
                {selectedMaterial.name}
              </h3>

              <div className="h-64 sm:h-72 w-full overflow-hidden border border-brand-hairline mb-6 bg-brand-sand/40">
                <img
                  src={selectedMaterial.imageUrl}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-sans border-y border-brand-hairline py-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-editorial text-brand-muted block">Provenance</span>
                  <span className="text-brand-black font-medium">{selectedMaterial.origin}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-editorial text-brand-muted block">Traitement de surface</span>
                  <span className="text-brand-black font-medium">{selectedMaterial.finish}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs font-sans text-brand-muted leading-relaxed mb-6">
                <p>
                  <strong className="text-brand-black font-medium">
                    {language === 'fr' ? 'Comportement & Patine :' : 'Aging & Patina :'}
                  </strong>{' '}
                  {language === 'fr'
                    ? "Cette matière gagne en profondeur au fil des décennies. Les aspérités naturelles et les nuances minérales participent au calme visuel de l'appartement sans jamais nécessiter de traitements artificiels."
                    : "This authentic material develops richer character over the decades. Its natural surface variations contribute to the visual serenity of the interior without artificial treatments."}
                </p>
                <p>
                  <strong className="text-brand-black font-medium">
                    {language === 'fr' ? 'Usages recommandés :' : 'Recommended usages :'}
                  </strong>{' '}
                  {selectedMaterial.useCase}
                </p>
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedMaterial(null)}
                  className="px-6 py-2.5 bg-brand-black text-brand-bg text-xs uppercase tracking-editorial hover:bg-brand-clay transition-colors"
                >
                  {language === 'fr' ? 'Fermer la fiche' : 'Close sheet'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
