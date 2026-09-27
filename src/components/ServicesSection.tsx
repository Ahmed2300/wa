'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = CONTENT[language].services;

  return (
    <section id="services" className="w-full bg-brand-bg py-20 sm:py-28 border-b border-brand-hairline">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="font-sans text-[11px] sm:text-xs font-normal tracking-editorial text-brand-muted uppercase mb-3">
            {t.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black leading-tight mb-4">
            {t.title}
          </h2>
          <p className="font-sans text-brand-muted text-sm sm:text-base font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Architectural Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.items.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-7 sm:p-8 border border-brand-hairline bg-brand-bg flex flex-col justify-between hover:bg-brand-sand/30 hover:border-brand-black/30 transition-all duration-300 rounded-none group"
            >
              <div>
                {/* Number Indicator */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-hairline">
                  <span className="font-mono text-xs tracking-widest text-brand-clay font-medium">
                    SERVICE {service.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brand-sand group-hover:bg-brand-clay transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-brand-black mb-2 leading-tight group-hover:text-brand-clay transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[11px] tracking-wide text-brand-muted uppercase font-sans mb-5 font-normal">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 border-t border-brand-hairline/80">
                <p className="text-[10px] tracking-editorial uppercase text-brand-muted mb-3 font-medium">
                  {language === 'fr' ? 'Engagements & Livrables' : 'Commitments & Scope'}
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-brand-black/80 font-light">
                      <span className="w-1 h-1 bg-brand-clay select-none" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
