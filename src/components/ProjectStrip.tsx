'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { ShieldCheck, Check } from 'lucide-react';

export default function ProjectStrip() {
  const { language } = useLanguage();
  const hero = CONTENT[language].hero;
  const strip = CONTENT[language].strip;

  return (
    <section className="w-full border-y border-brand-hairline bg-brand-sand/20 py-12 sm:py-16" data-purpose="promise-section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Promesse Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-5 h-[1px] bg-brand-clay" />
              <span className="font-sans text-[11px] font-normal tracking-editorial text-brand-clay uppercase">
                {hero.promiseTitle}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-black leading-snug">
              {language === 'fr' ? 'Chaque projet est unique.' : 'Every project is unique.'}
            </h3>
          </div>

          <div className="lg:col-span-8">
            <p className="font-serif text-lg sm:text-xl lg:text-2xl text-brand-black/90 font-normal italic leading-relaxed">
              &laquo;&nbsp;{hero.promise}&nbsp;&raquo;
            </p>
          </div>
        </div>

        {/* 5 Pillars: Pourquoi Wa.Design ? */}
        <div className="pt-8 border-t border-brand-hairline">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-brand-muted">
              {hero.whyUsTitle}
            </span>
            <span className="text-[10px] font-mono text-brand-clay uppercase tracking-wider hidden sm:inline-block">
              PARIS · ÎLE-DE-FRANCE · HAUTE EXIGENCE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hero.whyUs.map((point, idx) => (
              <div
                key={idx}
                className="p-4 bg-brand-bg border border-brand-hairline flex flex-col justify-between"
              >
                <div className="flex items-center space-x-2 text-brand-clay mb-2">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-mono text-brand-clay">0{idx + 1}</span>
                </div>
                <p className="font-sans text-xs text-brand-black font-medium leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
