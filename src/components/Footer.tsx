'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT, BRAND_ASSETS } from '@/data/content';
import { Instagram, ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();
  const t = CONTENT[language].footer;
  const nav = CONTENT[language].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-brand-bg text-brand-black pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-brand-hairline">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Top Tier: Wordmark & Baseline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-brand-hairline">
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <img
              src={BRAND_ASSETS.wordmark}
              alt="WA DESIGN FRANCE"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <p className="font-serif text-base sm:text-lg text-brand-black/90 max-w-md italic">
              {t.baseline}
            </p>
            <p className="font-sans text-xs text-brand-muted tracking-wide">
              14 Rue de Tournon, 75006 Paris — Hôtel de Brancas
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-xs font-sans uppercase tracking-editorial">
            <div>
              <p className="text-brand-black font-medium mb-3 sm:mb-4 text-[10px] text-brand-clay">
                Navigation
              </p>
              <ul className="space-y-2.5 sm:space-y-3 text-brand-muted">
                <li><a href="#projets" className="hover:text-brand-black transition-colors block py-0.5">{nav.projects}</a></li>
                <li><a href="#studio" className="hover:text-brand-black transition-colors block py-0.5">{nav.studio}</a></li>
                <li><a href="#services" className="hover:text-brand-black transition-colors block py-0.5">{nav.services}</a></li>
                <li><a href="#matieres" className="hover:text-brand-black transition-colors block py-0.5">{nav.materials}</a></li>
              </ul>
            </div>

            <div>
              <p className="text-brand-black font-medium mb-3 sm:mb-4 text-[10px] text-brand-clay">
                Social
              </p>
              <ul className="space-y-2.5 sm:space-y-3 text-brand-muted">
                <li>
                  <a
                    href="https://www.instagram.com/wa.design.france/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 hover:text-brand-black transition-colors py-0.5"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-brand-clay" />
                  </a>
                </li>
                <li>
                  <span className="text-brand-muted/50 cursor-not-allowed block py-0.5">LinkedIn</span>
                </li>
                <li>
                  <span className="text-brand-muted/50 cursor-not-allowed block py-0.5">Architectes.org</span>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-brand-black font-medium mb-3 sm:mb-4 text-[10px] text-brand-clay">
                Contact
              </p>
              <ul className="space-y-2 text-brand-muted text-[11px] normal-case tracking-normal">
                <li><a href="mailto:contact@wadesignfrance.com" className="hover:text-brand-black break-all sm:break-normal">contact@wadesignfrance.com</a></li>
                <li className="pt-2">
                  <a href="#contact" className="underline underline-offset-4 text-brand-black hover:text-brand-clay uppercase tracking-widest text-[10px] inline-block py-1">
                    {nav.bookConsultation}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Legals & Scroll to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-sans text-brand-muted tracking-wider gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <span>{t.copyright}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6">
            <a href="#" className="hover:text-brand-black transition-colors py-1">
              {t.legal}
            </a>
            <span className="text-brand-hairline">|</span>
            <a href="#" className="hover:text-brand-black transition-colors py-1">
              {t.confidentiality}
            </a>
            <span className="text-brand-hairline">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 hover:text-brand-black transition-colors cursor-pointer py-1 min-h-[40px]"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
