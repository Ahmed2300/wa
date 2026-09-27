'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { MaterialSpecimen } from '@/types';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Sparkles, X, Info, Layers } from 'lucide-react';

export default function MaterialInspector() {
  const { language } = useLanguage();
  const t = CONTENT[language].materials;
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialSpecimen | null>(null);

  useEffect(() => {
    if (selectedMaterial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedMaterial]);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const textureY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={sectionRef} id="matieres" className="w-full bg-brand-sandLight/40 py-16 sm:py-24 lg:py-32 border-b border-brand-hairline relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 lg:mb-20 gap-4 sm:gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-2.5 sm:mb-3">
              <span className="w-6 h-[1px] bg-brand-clay" />
              <p className="font-sans text-[11px] sm:text-xs font-normal tracking-editorial text-brand-muted uppercase">
                {t.eyebrow}
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-black leading-tight mb-3 sm:mb-4">
              {t.title}
            </h2>
            <p className="font-sans text-brand-muted text-xs sm:text-base font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="text-[10px] sm:text-[11px] font-sans text-brand-muted tracking-widest uppercase border-b border-brand-hairline pb-2 self-start md:self-auto">
            {language === 'fr' ? '4 Matières Éprouvées' : '4 Enduring Specimens'}
          </div>
        </div>

        {/* 4 Tactile Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                {/* Material Texture Image with In-Frame Parallax */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-brand-sand/50">
                  <motion.div
                    style={{ y: textureY, scale: 1.12 }}
                    className="w-full h-full will-change-transform"
                  >
                    <img
                      src={mat.imageUrl}
                      alt={mat.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-brand-black/5 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Floating spec pill */}
                  <div className="absolute bottom-3 left-3 bg-brand-bg/95 px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider border border-brand-hairline text-brand-black z-10">
                    N° 0{idx + 1}
                  </div>
                </div>

                {/* Material Specification Specs */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-serif text-lg sm:text-xl text-brand-black mb-3 sm:mb-4 leading-snug group-hover:text-brand-clay transition-colors duration-200">
                    {mat.name}
                  </h3>

                  <div className="space-y-2.5 sm:space-y-3 text-xs font-sans">
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
              <div className="px-4 sm:px-6 py-3.5 border-t border-brand-hairline/60 flex items-center justify-between text-[10px] uppercase tracking-editorial text-brand-muted group-hover:text-brand-black transition-colors min-h-[44px]">
                <span>{language === 'fr' ? 'Détails de la matière' : 'Material details'}</span>
                <span className="text-brand-clay text-sm font-light">+</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Material Detailed Inspection Modal */}
      <AnimatePresence>
        {selectedMaterial && (
          <div
            data-lenis-prevent="true"
            onClick={() => setSelectedMaterial(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-brand-black/75 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              data-lenis-prevent="true"
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-bg border border-brand-hairline max-w-2xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-8 relative shadow-2xl custom-scrollbar overscroll-contain"
            >
              <button
                type="button"
                onClick={() => setSelectedMaterial(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 text-brand-black hover:text-brand-clay transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close material modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-[9px] sm:text-[10px] uppercase tracking-monograph text-brand-clay mb-2 font-mono">
                <Layers className="w-3.5 h-3.5" />
                <span>SPECIMEN ARCHITECTURAL</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-brand-black mb-3 sm:mb-4 pr-10">
                {selectedMaterial.name}
              </h3>

              <div className="h-48 sm:h-64 lg:h-72 w-full overflow-hidden border border-brand-hairline mb-4 sm:mb-6 bg-brand-sand/40">
                <img
                  src={selectedMaterial.imageUrl}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-sans border-y border-brand-hairline py-3 sm:py-4 mb-4 sm:mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-editorial text-brand-muted block">Provenance</span>
                  <span className="text-brand-black font-medium">{selectedMaterial.origin}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-editorial text-brand-muted block">Traitement de surface</span>
                  <span className="text-brand-black font-medium">{selectedMaterial.finish}</span>
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3 text-xs font-sans text-brand-muted leading-relaxed mb-6">
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
                  className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 bg-brand-black text-brand-bg text-xs uppercase tracking-editorial hover:bg-brand-clay transition-colors flex items-center justify-center"
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
