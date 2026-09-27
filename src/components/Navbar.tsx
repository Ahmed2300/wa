'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT, BRAND_ASSETS } from '@/data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = CONTENT[language];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Scroll Progress Hairline Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-clay z-[60] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`w-full sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-hairline shadow-[0_10px_30px_rgba(36,33,29,0.03)]'
            : 'bg-brand-bg/90 border-b border-brand-sand/80'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-20 sm:h-24 flex items-center justify-between">
          {/* Brand Wordmark */}
          <div className="flex items-center">
            <a
              href="#"
              className="inline-flex items-center group transition-opacity duration-300 hover:opacity-85"
              aria-label="WA Design France"
            >
              <img
                src={BRAND_ASSETS.wordmark}
                alt="WA DESIGN FRANCE"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Architectural Monograph Navigation */}
          <nav
            aria-label="Main menu"
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] font-normal tracking-[0.22em] uppercase text-brand-muted"
          >
            <a
              href="#projets"
              className="hover:text-brand-black transition-colors duration-200 relative py-1 group"
            >
              <span>{t.nav.projects}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-clay transition-all duration-300 group-hover:w-full" />
            </a>
            <span aria-hidden="true" className="text-brand-hairline select-none font-light">·</span>

            <a
              href="#studio"
              className="hover:text-brand-black transition-colors duration-200 relative py-1 group"
            >
              <span>{t.nav.studio}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-clay transition-all duration-300 group-hover:w-full" />
            </a>
            <span aria-hidden="true" className="text-brand-hairline select-none font-light">·</span>

            <a
              href="#services"
              className="hover:text-brand-black transition-colors duration-200 relative py-1 group"
            >
              <span>{t.nav.services}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-clay transition-all duration-300 group-hover:w-full" />
            </a>
            <span aria-hidden="true" className="text-brand-hairline select-none font-light">·</span>

            <a
              href="#matieres"
              className="hover:text-brand-black transition-colors duration-200 relative py-1 group"
            >
              <span>{t.nav.materials}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-clay transition-all duration-300 group-hover:w-full" />
            </a>
            <span aria-hidden="true" className="text-brand-hairline select-none font-light">·</span>

            {/* Instagram Direct Link with subtle badge */}
            <a
              href="https://www.instagram.com/wa.design.france/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 hover:text-brand-black text-brand-muted transition-colors duration-200"
              title="Instagram @wa.design.france"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-brand-clay" />
            </a>
            <span aria-hidden="true" className="text-brand-hairline select-none font-light">·</span>

            <a
              href="#contact"
              className="hover:text-brand-black transition-colors duration-200 relative py-1 group"
            >
              <span>{t.nav.contact}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-clay transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Language Switcher Toggler with architectural pill indicator */}
            <div className="flex items-center pl-3 border-l border-brand-hairline space-x-1 text-[10px] tracking-widest font-mono bg-brand-sand/40 p-1 border border-brand-hairline/80 relative">
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`relative z-10 transition-colors duration-200 px-2 py-0.5 cursor-pointer ${
                  language === 'fr'
                    ? 'text-brand-bg font-medium'
                    : 'text-brand-muted hover:text-brand-black'
                }`}
              >
                FR
                {language === 'fr' && (
                  <motion.div
                    layoutId="desktopLangPill"
                    className="absolute inset-0 bg-brand-black -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`relative z-10 transition-colors duration-200 px-2 py-0.5 cursor-pointer ${
                  language === 'en'
                    ? 'text-brand-bg font-medium'
                    : 'text-brand-muted hover:text-brand-black'
                }`}
              >
                EN
                {language === 'en' && (
                  <motion.div
                    layoutId="desktopLangPill"
                    className="absolute inset-0 bg-brand-black -z-10 shadow-xs"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
            </div>

            {/* Outline Consultation CTA */}
            <a
              href="#contact"
              className="border border-brand-black hover:border-brand-clay hover:bg-brand-clay hover:text-brand-bg text-brand-black px-5 py-2.5 rounded-none text-[11px] font-normal tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 ml-2 shadow-xs"
            >
              {t.nav.bookConsultation}
            </a>
          </nav>

          {/* Mobile Actions: Language + Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <div className="flex items-center border border-brand-hairline p-0.5 text-[10px] font-mono tracking-wider bg-brand-sand/30">
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`px-1.5 py-0.5 ${language === 'fr' ? 'bg-brand-black text-brand-bg font-bold' : 'text-brand-muted'}`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 ${language === 'en' ? 'bg-brand-black text-brand-bg font-bold' : 'text-brand-muted'}`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-black focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            data-lenis-prevent="true"
            className="fixed inset-x-0 top-20 bg-brand-bg border-b border-brand-hairline z-40 lg:hidden px-8 py-10 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar overscroll-contain"
          >
            <div className="flex flex-col space-y-6 text-xs font-sans tracking-[0.22em] uppercase text-brand-black">
              <a
                href="#projets"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-clay transition-colors flex items-center justify-between"
              >
                <span>{t.nav.projects}</span>
                <span className="text-[10px] text-brand-muted font-mono">01</span>
              </a>
              <a
                href="#studio"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-clay transition-colors flex items-center justify-between"
              >
                <span>{t.nav.studio}</span>
                <span className="text-[10px] text-brand-muted font-mono">02</span>
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-clay transition-colors flex items-center justify-between"
              >
                <span>{t.nav.services}</span>
                <span className="text-[10px] text-brand-muted font-mono">03</span>
              </a>
              <a
                href="#matieres"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-clay transition-colors flex items-center justify-between"
              >
                <span>{t.nav.materials}</span>
                <span className="text-[10px] text-brand-muted font-mono">04</span>
              </a>
              <a
                href="https://www.instagram.com/wa.design.france/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-between text-brand-muted hover:text-brand-black"
              >
                <span>Instagram @wa.design.france</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-clay" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-clay transition-colors flex items-center justify-between"
              >
                <span>{t.nav.contact}</span>
                <span className="text-[10px] text-brand-muted font-mono">05</span>
              </a>
              <div className="pt-4 border-t border-brand-hairline">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center border border-brand-black bg-brand-black text-brand-bg px-6 py-3.5 rounded-none text-xs tracking-editorial uppercase hover:bg-brand-clay hover:border-brand-clay transition-colors"
                >
                  {t.nav.bookConsultation}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
