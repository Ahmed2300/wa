'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { SocialTile } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, ArrowUpRight, X, Maximize2, MapPin } from 'lucide-react';

export default function InstagramGrid() {
  const { language } = useLanguage();
  const t = CONTENT[language].socialGrid;
  const [activeTile, setActiveTile] = useState<SocialTile | null>(null);

  return (
    <section className="w-full bg-brand-bg py-24 sm:py-32 border-b border-brand-hairline" id="journal">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1px] bg-brand-clay" />
              <p className="font-sans text-[11px] sm:text-xs font-normal tracking-editorial text-brand-muted uppercase">
                {t.eyebrow}
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black leading-tight mb-3">
              {t.title}
            </h2>
            <p className="font-sans text-brand-muted text-sm sm:text-base font-light">
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

          <div className="flex items-center space-x-3">
            <a
              href={t.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 border border-brand-black text-brand-black px-6 py-3.5 text-xs tracking-editorial uppercase hover:bg-brand-black hover:text-brand-bg transition-all duration-300 rounded-none shadow-xs"
            >
              <Instagram className="w-4 h-4 text-brand-clay" />
              <span>{t.exploreMore}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 9 Tiles 3x3 Architectural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {t.tiles.map((tile, idx) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
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
                  <span>Agrandir la photo</span>
                  <Maximize2 className="w-3.5 h-3.5 text-brand-clay" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Instagram Photo Lightbox Modal */}
      <AnimatePresence>
        {activeTile && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-brand-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-bg border border-brand-hairline max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveTile(null)}
                className="absolute top-6 right-6 p-2 text-brand-black hover:text-brand-clay transition-colors"
                aria-label="Close photo modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-2 text-[11px] font-sans tracking-editorial uppercase text-brand-clay mb-3">
                <Instagram className="w-3.5 h-3.5" />
                <span>ARCHIVES INSTAGRAM · {activeTile.location}</span>
              </div>

              <div className="border border-brand-hairline overflow-hidden mb-6 bg-brand-sand/40">
                <img
                  src={activeTile.imageUrl}
                  alt={activeTile.caption}
                  className="w-full max-h-[500px] object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="font-serif text-xl sm:text-2xl text-brand-black leading-relaxed">
                  {activeTile.caption}
                </p>
                <div className="flex items-center space-x-3 text-xs font-mono text-brand-clay">
                  <span>{activeTile.tag}</span>
                  <span>·</span>
                  <span className="text-brand-muted">@wa.design.france</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-hairline flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveTile(null)}
                  className="text-xs uppercase tracking-editorial text-brand-muted hover:text-brand-black"
                >
                  {language === 'fr' ? 'Retour à la galerie' : 'Back to gallery'}
                </button>
                <a
                  href={t.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-black text-brand-bg text-xs uppercase tracking-editorial hover:bg-brand-clay transition-colors"
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
