'use client';

import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT, BRAND_ASSETS } from '@/data/content';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const { language } = useLanguage();
  const t = CONTENT[language].hero;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Subtle optical lens parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="w-full relative bg-brand-bg pt-6 sm:pt-10 pb-14 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Full-Bleed Architectural Photograph Canvas with Monograph Framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative overflow-hidden bg-brand-sand/30 border border-brand-hairline rounded-none group"
        >
          {/* Architectural Corner Crosshairs */}
          <span className="absolute top-2 left-2 z-20 text-[11px] font-mono text-brand-black/40 select-none">+</span>
          <span className="absolute top-2 right-2 z-20 text-[11px] font-mono text-brand-black/40 select-none">+</span>
          <span className="absolute bottom-2 left-2 z-20 text-[11px] font-mono text-brand-black/40 select-none">+</span>
          <span className="absolute bottom-2 right-2 z-20 text-[11px] font-mono text-brand-black/40 select-none">+</span>

          {/* Top Running Monograph Stamp */}
          <div className="absolute top-3.5 sm:top-5 inset-x-3.5 sm:inset-x-6 z-20 flex items-center justify-between text-[9px] sm:text-[10px] tracking-monograph uppercase text-brand-black/80 font-sans pointer-events-none">
            <span className="bg-brand-bg/85 backdrop-blur-xs px-2 sm:px-2.5 py-1 border border-brand-hairline/60">
              VOL. I · MONOGRAPHIE PARISIENNE
            </span>
            <span className="hidden sm:inline-block bg-brand-bg/85 backdrop-blur-xs px-2.5 py-1 border border-brand-hairline/60 font-mono">
              PARIS 7e — 48°51&apos;24&quot;N 2°21&apos;07&quot;E
            </span>
          </div>

          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="w-full h-full will-change-transform"
          >
            <img
              src={BRAND_ASSETS.heroImage}
              alt="Interior Architecture Parisian Luxury Apartment"
              className="w-full h-[45vh] sm:h-[60vh] lg:h-[76vh] min-h-[300px] sm:min-h-[420px] object-cover object-center block"
              loading="eager"
              decoding="async"
            />
          </motion.div>

          {/* Subtle architectural vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/25 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Floating Architecture Badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-20 hidden md:flex items-center space-x-3 bg-brand-bg/90 backdrop-blur-sm px-3.5 sm:px-4 py-1.5 sm:py-2 border border-brand-hairline text-[10px] sm:text-[11px] tracking-widest uppercase font-sans text-brand-black">
            <span className="w-1.5 h-1.5 bg-brand-clay" />
            <span>Saint-Germain-des-Prés · Neuilly · Marais</span>
          </div>
        </motion.div>

        {/* Hero Typographic & Editorial Block with Subtle Parallax Float */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="pt-8 sm:pt-14 lg:pt-20 pb-4 max-w-4xl will-change-transform"
        >
          {/* Eyebrow Subtitle with Architectural Badge */}
          <motion.div
            key={`eyebrow-${language}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center space-x-3 mb-3 sm:mb-5"
          >
            <span className="w-6 h-[1px] bg-brand-clay" />
            <p className="font-sans text-[10px] sm:text-xs font-normal tracking-editorial text-brand-muted uppercase">
              {t.eyebrow}
            </p>
          </motion.div>

          {/* Main Display Headline in Serif */}
          <motion.h1
            key={`title-${language}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            id="hero-heading"
            className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[4.25rem] font-normal text-brand-black leading-[1.12] sm:leading-[1.05] mb-5 sm:mb-6 tracking-tight break-words"
          >
            {t.title}
          </motion.h1>

          {/* Editorial Body Description */}
          <motion.p
            key={`sub-${language}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="font-sans text-brand-muted text-xs sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl mb-8 sm:mb-10"
          >
            {t.subtitle}
          </motion.p>

          {/* Action Elements */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto"
          >
            <a
              href="#projets"
              className="group inline-flex items-center justify-center space-x-3 px-7 sm:px-8 py-3.5 sm:py-4 border border-brand-black bg-brand-black text-brand-bg hover:bg-brand-clay hover:border-brand-clay rounded-none text-xs font-medium tracking-editorial uppercase transition-all duration-300 shadow-md min-h-[44px]"
            >
              <span>{t.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3.5 sm:py-4 border border-brand-hairline bg-brand-sand/30 hover:border-brand-black text-brand-black rounded-none text-xs font-medium tracking-editorial uppercase transition-all duration-300 shadow-xs min-h-[44px]"
            >
              <span>{t.ctaSecondary}</span>
            </a>

            <a
              href="#studio"
              className="inline-flex items-center justify-center sm:justify-start space-x-2.5 text-xs font-normal tracking-editorial uppercase text-brand-muted hover:text-brand-black py-2 sm:py-4 transition-colors duration-200 group min-h-[44px]"
            >
              <span>{t.scrollDown}</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
