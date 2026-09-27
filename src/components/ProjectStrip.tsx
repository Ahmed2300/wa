'use client';

import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Check } from 'lucide-react';

export default function ProjectStrip() {
  const { language } = useLanguage();
  const hero = CONTENT[language].hero;
  const strip = CONTENT[language].strip;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], ['14px', '-14px']);

  return (
    <section ref={sectionRef} className="w-full border-y border-brand-hairline bg-brand-sand/20 py-10 sm:py-16 overflow-hidden" data-purpose="promise-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Top Promesse Block with Optical Float */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-5 h-[1px] bg-brand-clay" />
              <span className="font-sans text-[10px] sm:text-[11px] font-normal tracking-editorial text-brand-clay uppercase">
                {hero.promiseTitle}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-brand-black leading-snug">
              {language === 'fr' ? 'Chaque projet est unique.' : 'Every project is unique.'}
            </h3>
          </div>

          <motion.div style={{ y: quoteY }} className="lg:col-span-8 will-change-transform">
            <p className="font-serif text-base sm:text-xl lg:text-2xl text-brand-black/90 font-normal italic leading-relaxed">
              &laquo;&nbsp;{hero.promise}&nbsp;&raquo;
            </p>
          </motion.div>
        </div>

        {/* 5 Pillars: Pourquoi Wa.Design ? */}
        <div className="pt-6 sm:pt-8 border-t border-brand-hairline">
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-brand-muted">
              {hero.whyUsTitle}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-brand-clay uppercase tracking-wider hidden sm:inline-block">
              PARIS · ÎLE-DE-FRANCE · HAUTE EXIGENCE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
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
