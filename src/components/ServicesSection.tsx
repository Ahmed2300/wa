'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = CONTENT[language].services;

  return (
    <section id="services" className="w-full bg-brand-bg py-24 sm:py-32 border-b border-brand-hairline">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
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

        {/* 5 Architectural Services Cards with High-Res Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.items.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 sm:p-7 border border-brand-hairline bg-brand-bg flex flex-col justify-between hover:bg-brand-sand/30 hover:border-brand-black/40 transition-all duration-300 rounded-none group shadow-xs hover:shadow-md"
            >
              <div>
                {/* High-Resolution Dedicated Architectural Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden mb-6 bg-brand-sand/40 border border-brand-hairline">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-brand-bg/95 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-brand-black border border-brand-hairline">
                    0{index + 1} · {service.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-brand-black mb-1.5 leading-tight group-hover:text-brand-clay transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[10px] tracking-editorial text-brand-muted uppercase font-sans mb-4 font-normal">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-5 border-t border-brand-hairline/80">
                <p className="text-[10px] tracking-editorial uppercase text-brand-muted mb-3 font-medium">
                  {language === 'fr' ? 'Engagements & Livrables' : 'Commitments & Scope'}
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs text-brand-black/85 font-light">
                      <span className="w-1.5 h-1.5 bg-brand-clay select-none" />
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
