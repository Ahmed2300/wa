'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { SocialTile } from '@/types';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Instagram, ArrowUpRight, X, Maximize2, MapPin } from 'lucide-react';

export default function InstagramGrid() {
  const { language } = useLanguage();
  const t = CONTENT[language].socialGrid;
  const [activeTile, setActiveTile] = useState<SocialTile | null>(null);

  useEffect(() => {
    if (activeTile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeTile]);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // 3-Column differential velocity parallax
  const col1Y = useTransform(scrollYProgress, [0, 1], ['25px', '-35px']);
  const col2Y = useTransform(scrollYProgress, [0, 1], ['-20px', '25px']);
  const col3Y = useTransform(scrollYProgress, [0, 1], ['35px', '-20px']);

  const col1 = [t.tiles[0], t.tiles[3], t.tiles[6]];
  const col2 = [t.tiles[1], t.tiles[4], t.tiles[7]];
  const col3 = [t.tiles[2], t.tiles[5], t.tiles[8]];

  const renderTile = (tile: SocialTile, idx: number) => (
    <motion.div
      key={tile.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
      onClick={() => setActiveTile(tile)}
      className="relative aspect-square overflow-hidden bg-brand-sand/50 border border-brand-hairline group block cursor-pointer shadow-xs hover:shadow-md"
    >
      {/* Image */}
      <img
        src={tile.imageUrl}
        alt={tile.caption}
        className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Top Sub-tag */}
      <div className="absolute top-3 left-3 bg-brand-bg/90 px-2 py-0.5 text-[9px] uppercase font-mono tracking-wider text-brand-black border border-brand-hairline z-10">
        0{tile.id} / 09
      </div>

      {/* Hover Dark Monograph Overlay */}
      <div className="absolute inset-0 bg-brand-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-7 flex flex-col justify-between text-brand-bg z-20">
        <div className="flex items-center justify-between text-[10px] tracking-editorial uppercase text-brand-sand/80 font-sans">
          <span className="flex items-center space-x-1">
            <MapPin className="w-3 h-3 text-brand-clay" />
            <span>{tile.location}</span>
          </span>
          <Instagram className="w-4 h-4 text-brand-clay" />
        </div>

        <div>
          <p className="font-serif text-sm sm:text-base text-brand-bg font-normal leading-relaxed mb-3">
            {tile.caption}
          </p>
          <span className="font-sans text-[10px] tracking-widest text-brand-clay font-mono block">
            {tile.tag}
          </span>
        </div>

        <div className="flex items-center justify-between text-[10px] tracking-editorial uppercase text-brand-sand/90 pt-3 border-t border-brand-sand/20">
          <span>{language === 'fr' ? 'Agrandir la photo' : 'Enlarge view'}</span>
          <Maximize2 className="w-3.5 h-3.5 text-brand-clay" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="w-full bg-brand-bg py-16 sm:py-24 lg:py-32 border-b border-brand-hairline overflow-hidden" id="journal">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 lg:mb-18 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-2.5 sm:mb-3">
              <span className="w-6 h-[1px] bg-brand-clay" />
              <p className="font-sans text-[11px] sm:text-xs font-normal tracking-editorial text-brand-muted uppercase">
                {t.eyebrow}
              </p>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-black leading-tight mb-2.5 sm:mb-3">
              {t.title}
            </h2>
            <p className="font-sans text-brand-muted text-xs sm:text-base font-light">
              {t.subtitle}{' '}
              <a
                href={t.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-black font-medium underline underline-offset-4 decoration-brand-clay hover:text-brand-clay transition-colors"
              >
                {t.handle}
              </a>
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <a
              href={t.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 border border-brand-black text-brand-black w-full sm:w-auto px-6 py-3.5 min-h-[44px] text-xs tracking-editorial uppercase hover:bg-brand-black hover:text-brand-bg transition-all duration-300 rounded-none shadow-xs"
            >
              <Instagram className="w-4 h-4 text-brand-clay" />
              <span>{t.exploreMore}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Desktop: 3-Speed Multi-Column Floating Exhibition */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-start">
          <motion.div style={{ y: col1Y }} className="space-y-6 will-change-transform">
            {col1.map((tile, i) => renderTile(tile, i))}
          </motion.div>
          <motion.div style={{ y: col2Y }} className="space-y-6 will-change-transform">
            {col2.map((tile, i) => renderTile(tile, i))}
          </motion.div>
          <motion.div style={{ y: col3Y }} className="space-y-6 will-change-transform">
            {col3.map((tile, i) => renderTile(tile, i))}
          </motion.div>
        </div>

        {/* Mobile & Tablet: Standard Responsive Grid (1 col mobile, 2 col small tablet, 3 col tablet for 9 items) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {t.tiles.map((tile, idx) => renderTile(tile, idx))}
        </div>

      </div>

      {/* Instagram Photo Lightbox Modal */}
      <AnimatePresence>
        {activeTile && (
          <div
            data-lenis-prevent="true"
            onClick={() => setActiveTile(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-brand-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              data-lenis-prevent="true"
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-bg border border-brand-hairline max-w-4xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-8 lg:p-10 relative shadow-2xl custom-scrollbar overscroll-contain"
            >
              <button
                type="button"
                onClick={() => setActiveTile(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 text-brand-black hover:text-brand-clay transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close photo modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] font-sans tracking-editorial uppercase text-brand-clay mb-2 sm:mb-3">
                <Instagram className="w-3.5 h-3.5" />
                <span>ARCHIVES INSTAGRAM · {activeTile.location}</span>
              </div>

              <div className="border border-brand-hairline overflow-hidden mb-4 sm:mb-6 bg-brand-sand/40">
                <img
                  src={activeTile.imageUrl}
                  alt={activeTile.caption}
                  className="w-full max-h-[260px] sm:max-h-[380px] lg:max-h-[500px] object-cover"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="font-serif text-lg sm:text-xl md:text-2xl text-brand-black leading-relaxed">
                  {activeTile.caption}
                </p>
                <div className="flex items-center space-x-3 text-xs font-mono text-brand-clay">
                  <span>{activeTile.tag}</span>
                  <span>·</span>
                  <span className="text-brand-muted">@wa.design.france</span>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-brand-hairline flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setActiveTile(null)}
                  className="text-xs uppercase tracking-editorial text-brand-muted hover:text-brand-black text-center py-2 sm:py-0 min-h-[44px] sm:min-h-0 flex items-center justify-center"
                >
                  {language === 'fr' ? 'Retour à la galerie' : 'Back to gallery'}
                </button>
                <a
                  href={t.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 min-h-[44px] bg-brand-black text-brand-bg text-xs uppercase tracking-editorial hover:bg-brand-clay transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{language === 'fr' ? 'Voir sur Instagram' : 'View on Instagram'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
