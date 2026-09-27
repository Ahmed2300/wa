'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';

export default function ProjectStrip() {
  const { language } = useLanguage();
  const t = CONTENT[language].hero;

  return (
    <div className="w-full border-y border-brand-hairline bg-brand-bg py-5" data-purpose="project-context-strip">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans tracking-[0.2em] text-brand-muted uppercase gap-4">
        {/* Territory Baseline */}
        <div className="flex items-center space-x-2 text-center md:text-left">
          <span className="text-brand-black/90 font-normal">Paris &amp; Île-de-France</span>
          <span aria-hidden="true" className="text-brand-hairline">—</span>
          <span className="text-brand-muted">{t.territory}</span>
        </div>

        {/* Curated Selection Hairline Separators */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-brand-muted">
          <span className="text-brand-muted/70 tracking-[0.22em]">{t.recentProjects}</span>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a href="#neuilly" className="hover:text-brand-clay transition-colors duration-200">
              Neuilly
            </a>
            <span aria-hidden="true" className="w-[1px] h-3 bg-brand-hairline"></span>
            <a href="#projets" className="hover:text-brand-clay transition-colors duration-200">
              Tournon
            </a>
            <span aria-hidden="true" className="w-[1px] h-3 bg-brand-hairline"></span>
            <a href="#projets" className="hover:text-brand-clay transition-colors duration-200">
              Saint-Thomas
            </a>
            <span aria-hidden="true" className="w-[1px] h-3 bg-brand-hairline"></span>
            <a href="#projets" className="hover:text-brand-clay transition-colors duration-200">
              Marais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
