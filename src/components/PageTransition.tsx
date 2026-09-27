'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant, brisk luxury intro animation (completed in ~1.1s)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-curtain"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.9,
              ease: [0.77, 0, 0.175, 1], // Architectural curtain cubic-bezier
            },
          }}
          className="fixed inset-0 z-[9999] bg-brand-bg flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          {/* Subtle Hairline Frame */}
          <div className="absolute inset-8 sm:inset-12 border border-brand-hairline/60 pointer-events-none">
            <span className="absolute top-2 left-2 text-[10px] font-mono text-brand-clay/60">+</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-brand-clay/60">+</span>
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-brand-clay/60">+</span>
            <span className="absolute bottom-2 right-2 text-[10px] font-mono text-brand-clay/60">+</span>

            <div className="absolute top-3 left-4 text-[9px] font-mono tracking-widest text-brand-muted/70 uppercase">
              PARIS VIe · ÉDITION 2024
            </div>
            <div className="absolute bottom-3 right-4 text-[9px] font-mono tracking-widest text-brand-muted/70 uppercase">
              75006 — HÔTEL DE BRANCAS
            </div>
          </div>

          {/* Central Monogram & Typographic Brand Reveal */}
          <div className="flex flex-col items-center text-center px-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-brand-clay" />
              <span className="font-sans text-[10px] tracking-monograph uppercase text-brand-clay">
                ARCHITECTURE D&apos;INTÉRIEUR
              </span>
              <span className="w-8 h-[1px] bg-brand-clay" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.15em' }}
              animate={{ opacity: 1, letterSpacing: '0.22em' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-black font-normal tracking-[0.2em] mb-4 uppercase"
            >
              WA DESIGN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-[11px] uppercase tracking-editorial text-brand-muted mb-8"
            >
              FRANCE · PARIS
            </motion.p>

            {/* Seamless Progress Line */}
            <div className="w-36 h-[1.5px] bg-brand-hairline relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
                className="w-full h-full bg-brand-clay absolute inset-0"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
