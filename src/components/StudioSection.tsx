'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT, BRAND_ASSETS } from '@/data/content';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function StudioSection() {
  const { language } = useLanguage();
  const t = CONTENT[language].studio;
  const [activeStep, setActiveStep] = useState<number>(0);

  const metrics = [
    { value: '14+', label: language === 'fr' ? "Années d'exercice" : 'Years of practice' },
    { value: '48+', label: language === 'fr' ? 'Appartements livrés' : 'Completed residences' },
    { value: '100%', label: language === 'fr' ? 'Compagnons & artisans d’art' : 'French master craftsmen' },
    { value: '8 max', label: language === 'fr' ? 'Projets accompagnés par an' : 'Commissions per year' },
  ];

  return (
    <section id="studio" className="w-full bg-brand-bg py-24 sm:py-32 border-b border-brand-hairline">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Monograph Statement & Studio Atelier Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Statement & Atelier Address */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-6 h-[1px] bg-brand-clay" />
                <p className="font-sans text-[11px] sm:text-xs font-normal tracking-editorial text-brand-muted uppercase">
                  {t.eyebrow}
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black leading-tight mb-6">
                {t.title}
              </h2>
              <p className="font-sans text-brand-muted text-base lg:text-lg font-light leading-relaxed mb-6">
                {t.subtitle}
              </p>
              <div className="w-16 h-[1px] bg-brand-hairline mb-8" />
              <p className="font-sans text-brand-muted text-sm leading-relaxed mb-8">
                {t.manifesto}
              </p>
            </div>

            {/* Atelier Paris Address Citation */}
            <div className="p-4 border border-brand-hairline bg-brand-sand/30 text-xs font-sans text-brand-black/90 flex items-center space-x-3">
              <Building2 className="w-4 h-4 text-brand-clay shrink-0" />
              <span>14 Rue de Tournon, 75006 Paris • Hôtel de Brancas</span>
            </div>
          </div>

          {/* Right Column: High-Res Atelier Photography + Visual Quote */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* High-Resolution Atelier Architecture Photography */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden border border-brand-hairline bg-brand-sand/40 group">
              <img
                src={BRAND_ASSETS.studioImage}
                alt="WA Design France Parisian Architecture Atelier"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute bottom-3 right-3 bg-brand-bg/95 px-3 py-1 text-[10px] uppercase font-mono tracking-wider text-brand-black border border-brand-hairline">
                ATELIER · PARIS VIe
              </div>
            </div>

            {/* Atelier Visual Quote Box */}
            <div className="bg-brand-sand/40 border border-brand-hairline p-8 sm:p-10 relative overflow-hidden">
              <span className="font-serif text-7xl text-brand-clay/20 absolute -top-2 left-4 select-none">
                “
              </span>
              <blockquote className="relative z-10 font-serif text-xl sm:text-2xl text-brand-black/95 font-normal italic leading-relaxed mb-6 pt-4">
                {t.quote}
              </blockquote>
              <div className="flex items-center justify-between text-xs tracking-editorial uppercase text-brand-muted font-sans pt-4 border-t border-brand-hairline">
                <span className="font-medium text-brand-black">WA Design France</span>
                <span className="text-[10px] text-brand-clay font-mono">PARIS 6e</span>
              </div>
            </div>

            {/* Studio Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-5 border border-brand-hairline bg-brand-bg hover:bg-brand-sand/30 transition-colors duration-200"
                >
                  <h4 className="font-sans text-xs tracking-wider uppercase text-brand-black font-medium mb-1.5 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-brand-clay" />
                    <span>{pillar.title}</span>
                  </h4>
                  <p className="font-sans text-xs text-brand-muted font-light leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Metrics Ticker Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-brand-hairline my-16 bg-brand-sand/20">
          {metrics.map((m, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="font-serif text-3xl sm:text-4xl text-brand-black mb-1 font-normal">
                {m.value}
              </div>
              <div className="text-[10px] tracking-editorial uppercase text-brand-muted font-sans">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3-Step Interactive Methodology Monograph */}
        <div className="pt-8">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-6 h-[1px] bg-brand-clay" />
              <p className="font-sans text-[11px] sm:text-xs font-normal tracking-editorial text-brand-muted uppercase">
                {t.stepsEyebrow}
              </p>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black font-normal">
              {t.stepsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {t.steps.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`border p-8 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-brand-black bg-brand-sand/40 shadow-sm'
                      : 'border-brand-hairline bg-brand-bg hover:border-brand-black/40'
                  }`}
                >
                  <div>
                    <div className="flex items-baseline justify-between mb-5">
                      <span className="font-mono text-3xl sm:text-4xl text-brand-clay font-light">
                        {step.step}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-brand-muted font-sans">
                        Phase 0{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-serif text-xl sm:text-2xl text-brand-black mb-3">
                      {step.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-hairline flex items-center justify-between text-[10px] uppercase tracking-editorial text-brand-muted font-sans">
                    <span>{isSelected ? (language === 'fr' ? 'Étape active' : 'Active phase') : (language === 'fr' ? 'Sélectionner' : 'Select')}</span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-brand-clay' : 'bg-brand-sand'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
