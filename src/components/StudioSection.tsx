'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT, BRAND_ASSETS } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Compass, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Clock, Check } from 'lucide-react';

export default function StudioSection() {
  const { language } = useLanguage();
  const t = CONTENT[language].studio;
  const [activeTab, setActiveTab] = useState<'manifesto' | 'methodology' | 'values' | 'whyUs'>('manifesto');
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const tabs = [
    {
      id: 'manifesto' as const,
      number: '01',
      label: language === 'fr' ? 'Qui sommes-nous ?' : 'Who are we?',
    },
    {
      id: 'methodology' as const,
      number: '02',
      label: language === 'fr' ? 'Notre méthode en 5 étapes' : 'Our 5-Stage Method',
    },
    {
      id: 'values' as const,
      number: '03',
      label: language === 'fr' ? 'Nos valeurs' : 'Our Values',
    },
    {
      id: 'whyUs' as const,
      number: '04',
      label: language === 'fr' ? 'Pourquoi Wa.Design ?' : 'Why Wa.Design?',
    },
  ];

  return (
    <section id="studio" className="w-full bg-brand-bg py-24 sm:py-32 border-b border-brand-hairline relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Studio Monograph Datum Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
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

          {/* Architectural Technical Badge */}
          <div className="hidden lg:flex items-center space-x-4 border border-brand-hairline px-4 py-2.5 bg-brand-sand/20 text-[10px] font-mono tracking-wider text-brand-black">
            <Compass className="w-4 h-4 text-brand-clay" />
            <div>
              <div className="text-brand-black/90 font-medium">PARIS &amp; ÎLE-DE-FRANCE</div>
              <div className="text-brand-muted">NEUILLY · 8e · 9e · 16e · 17e</div>
            </div>
          </div>
        </div>

        {/* Interactive Architectural Tabs Bar with Moving Underline */}
        <div className="border-b border-brand-hairline mb-14">
          <div className="flex items-center space-x-2 sm:space-x-8 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-4 pt-1 px-1 sm:px-2 transition-colors duration-200 text-xs font-sans tracking-editorial uppercase whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                    isActive ? 'text-brand-black font-medium' : 'text-brand-muted hover:text-brand-black'
                  }`}
                >
                  <span className="font-mono text-[10px] text-brand-clay">{tab.number}.</span>
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="studioActiveTabLine"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-black"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content with Seamless Exit & Entrance Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* TAB 1: Qui sommes-nous ? */}
            {activeTab === 'manifesto' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                
                {/* Left Column: Vision & Approach */}
                <div className="lg:col-span-6 space-y-8">
                  {/* Quote Monograph */}
                  <div className="border-l-2 border-brand-clay pl-6 sm:pl-8 py-2">
                    <p className="font-serif text-xl sm:text-2xl text-brand-black/95 font-normal italic leading-relaxed">
                      &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                    </p>
                    <div className="mt-4 flex items-center space-x-3 text-xs tracking-editorial uppercase text-brand-muted font-sans">
                      <span className="font-medium text-brand-black">Wa.Design</span>
                      <span>·</span>
                      <span className="font-mono text-[11px] text-brand-clay">PARIS &amp; ÎLE-DE-FRANCE</span>
                    </div>
                  </div>

                  <div className="space-y-6 text-brand-muted text-sm sm:text-base leading-relaxed font-light">
                    <div>
                      <h4 className="font-serif text-lg text-brand-black mb-2">
                        {t.visionTitle}
                      </h4>
                      <p>{t.vision}</p>
                    </div>

                    <div className="pt-4 border-t border-brand-hairline">
                      <h4 className="font-serif text-lg text-brand-black mb-2">
                        {t.approachTitle}
                      </h4>
                      <p>{t.approach}</p>
                    </div>
                  </div>

                  {/* Atelier Presence Note */}
                  <div className="p-5 border border-brand-hairline bg-brand-sand/30 flex items-start space-x-4">
                    <Building2 className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />
                    <div className="text-xs font-sans text-brand-black/90 space-y-1">
                      <div className="font-medium tracking-wide uppercase">Zone d’intervention principale</div>
                      <div className="text-brand-muted">Paris intramuros (8e, 9e, 16e, 17e) &amp; Neuilly-sur-Seine, Levallois, Boulogne-Billancourt.</div>
                      <div className="text-[11px] text-brand-clay font-mono pt-1">
                        {language === 'fr' ? 'Équipe dédiée à la rénovation d’appartements luxueux' : 'Dedicated luxury residential renovation team'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: High-Res Archival Plate */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-3 sm:p-4 bg-brand-sand/30 border border-brand-hairline">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-sand/50 border border-brand-hairline/80 group">
                      <img
                        src={BRAND_ASSETS.studioImage}
                        alt="Wa.Design Paris Architecture Atelier"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-brand-bg/95 px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider text-brand-black border border-brand-hairline">
                        PL. 01 — ATELIER DE CONCEPTION
                      </div>
                    </div>
                    <div className="pt-3 flex items-center justify-between text-[10px] font-mono uppercase text-brand-muted tracking-widest">
                      <span>COLLABORATION ARCHITECTURALE</span>
                      <span className="text-brand-clay">PARIS &amp; ÎLE-DE-FRANCE</span>
                    </div>
                  </div>

                  {/* Blueprint Specifications Bar */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                    <div className="p-4 border border-brand-hairline bg-brand-bg">
                      <span className="text-[10px] font-mono uppercase text-brand-clay block mb-1">
                        {language === 'fr' ? 'SYNERGIE MÉTIER' : 'COLLABORATION'}
                      </span>
                      <p className="text-brand-black font-medium text-xs">
                        {language === 'fr' ? 'Avec les meilleurs architectes' : 'With leading architects'}
                      </p>
                    </div>
                    <div className="p-4 border border-brand-hairline bg-brand-bg">
                      <span className="text-[10px] font-mono uppercase text-brand-clay block mb-1">
                        {language === 'fr' ? 'ENGAGEMENT' : 'COMMITMENT'}
                      </span>
                      <p className="text-brand-black font-medium text-xs">
                        {language === 'fr' ? 'Livraison clé en main' : 'Turnkey delivery'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: Notre méthode en 5 étapes */}
            {activeTab === 'methodology' && (
              <div className="space-y-8">
                {/* 5 Step Process Navigation Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {t.steps.map((step, idx) => {
                    const isSelected = selectedStep === idx;
                    return (
                      <div
                        key={step.step}
                        onClick={() => setSelectedStep(idx)}
                        className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-brand-black bg-brand-sand/40 shadow-sm'
                            : 'border-brand-hairline bg-brand-bg hover:border-brand-black/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-baseline justify-between mb-4">
                            <span className="font-mono text-2xl sm:text-3xl text-brand-clay font-light">
                              {step.step}
                            </span>
                            <span className="text-[9px] uppercase tracking-widest text-brand-muted font-mono">
                              ÉTAPE 0{idx + 1}
                            </span>
                          </div>

                          <h4 className="font-serif text-lg text-brand-black mb-2 leading-snug">
                            {step.title}
                          </h4>

                          <p className="font-sans text-xs text-brand-muted leading-relaxed font-light line-clamp-3">
                            {step.description}
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-brand-hairline flex items-center justify-between text-[10px] uppercase tracking-editorial text-brand-muted font-sans">
                          <span>{isSelected ? (language === 'fr' ? 'Sélectionné' : 'Active') : (language === 'fr' ? 'Détails' : 'Details')}</span>
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-brand-clay' : 'bg-brand-sand'}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Active Step Detailed Overview Panel */}
                <div className="p-8 sm:p-10 border border-brand-hairline bg-brand-sand/20">
                  <div className="flex flex-col md:flex-row md:items-start justify-between pb-6 mb-6 border-b border-brand-hairline gap-4">
                    <div>
                      <div className="text-[10px] font-mono tracking-widest uppercase text-brand-clay mb-2">
                        {language === 'fr' ? `ÉTAPE 0${selectedStep + 1} SUR 05` : `STAGE 0${selectedStep + 1} OF 05`}
                      </div>
                      <h4 className="font-serif text-2xl sm:text-3xl text-brand-black mb-2">
                        {t.steps[selectedStep].title}
                      </h4>
                      <p className="font-sans text-sm sm:text-base text-brand-muted font-light max-w-3xl leading-relaxed">
                        {t.steps[selectedStep].description}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center space-x-2 text-xs font-mono uppercase text-brand-black border border-brand-hairline bg-brand-bg px-4 py-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-clay" />
                      <span>{language === 'fr' ? 'Engagement Qualité' : 'Quality Commitment'}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                    <div className="p-4 bg-brand-bg border border-brand-hairline">
                      <div className="text-brand-clay font-mono uppercase text-[10px] mb-1">01. Rigueur</div>
                      <div className="text-brand-black font-medium">{language === 'fr' ? 'Transparence & écoute' : 'Transparency & listening'}</div>
                    </div>
                    <div className="p-4 bg-brand-bg border border-brand-hairline">
                      <div className="text-brand-clay font-mono uppercase text-[10px] mb-1">02. Maîtrise</div>
                      <div className="text-brand-black font-medium">{language === 'fr' ? 'Artisans qualifiés' : 'Skilled craftsmen'}</div>
                    </div>
                    <div className="p-4 bg-brand-bg border border-brand-hairline">
                      <div className="text-brand-clay font-mono uppercase text-[10px] mb-1">03. Sérénité</div>
                      <div className="text-brand-black font-medium">{language === 'fr' ? 'Respect des délais & budget' : 'On-time & on-budget'}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Nos valeurs */}
            {activeTab === 'values' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {t.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-8 border border-brand-hairline bg-brand-bg flex flex-col justify-between group hover:border-brand-black transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className="font-mono text-xs text-brand-clay">VALEUR 0{idx + 1}</span>
                          <span className="w-2 h-2 bg-brand-clay/40 group-hover:bg-brand-clay transition-colors" />
                        </div>
                        <h4 className="font-serif text-xl sm:text-2xl text-brand-black mb-3">
                          {pillar.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6">
                          {pillar.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-brand-hairline text-[10px] font-mono uppercase text-brand-clay tracking-wider">
                        WA.DESIGN FRANCE
                      </div>
                    </div>
                  ))}
                </div>

                {/* Values Footer Banner */}
                <div className="p-8 border border-brand-hairline bg-brand-sand/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <h5 className="font-serif text-xl text-brand-black mb-2">
                      {language === 'fr' ? 'Un intérieur pensé pour être habité, aimé et transmis.' : 'An interior designed to be lived in, cherished, and passed down.'}
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                      {language === 'fr'
                        ? 'Chaque rénovation doit raconter une histoire — la vôtre. Nous conjuguons le respect des matériaux nobles et du bâti historique avec un confort d’usage moderne et irréprochable.'
                        : 'Every renovation must tell a story — yours. We unite respect for noble materials and historic architecture with flawless, modern everyday comfort.'}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-editorial text-brand-bg bg-brand-black px-6 py-3.5 hover:bg-brand-clay transition-colors whitespace-nowrap self-start sm:self-auto shadow-xs"
                  >
                    <span>{language === 'fr' ? 'Prendre rendez-vous' : 'Book a meeting'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* TAB 4: Pourquoi Wa.Design ? */}
            {activeTab === 'whyUs' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      num: '01',
                      title: language === 'fr' ? 'Expertise exclusive en rénovation haut de gamme' : 'Exclusive high-end renovation expertise',
                      desc: language === 'fr' ? 'Spécialistes reconnus de la rénovation d’appartements luxueux à Paris et en Île-de-France.' : 'Recognized specialists in luxury apartment transformation across Paris and Western suburbs.',
                    },
                    {
                      num: '02',
                      title: language === 'fr' ? 'Collaboration avec des architectes d’intérieur reconnus' : 'Collaboration with recognized interior architects',
                      desc: language === 'fr' ? 'Nous travaillons main dans la main avec des professionnels sélectionnés pour leur sensibilité et leur exigence.' : 'We work hand-in-hand with leading architects selected for their aesthetic vision and rigor.',
                    },
                    {
                      num: '03',
                      title: language === 'fr' ? 'Suivi de chantier rigoureux & communication transparente' : 'Rigorous site oversight & transparent communication',
                      desc: language === 'fr' ? 'Un seul interlocuteur dédié du début à la fin. Reporting photo régulier et points d’étape fréquents.' : 'A single dedicated point of contact. Continuous photo progress reports and weekly briefs.',
                    },
                    {
                      num: '04',
                      title: language === 'fr' ? 'Sélection rigoureuse de matériaux nobles et durables' : 'Meticulous curation of noble & enduring materials',
                      desc: language === 'fr' ? 'Chênes massifs français, marbres Calacatta, laques mates, laiton massif et enduits minéraux durables.' : 'French solid oaks, Italian Calacatta marbles, matte lacquers, solid brass, and mineral finishes.',
                    },
                    {
                      num: '05',
                      title: language === 'fr' ? 'Respect strict des délais et du budget convenus' : 'Strict adherence to agreed deadlines & budgets',
                      desc: language === 'fr' ? 'Chiffrage détaillé sans coûts cachés et respect rigoureux du calendrier des travaux validé.' : 'Transparent line-item costing with zero hidden fees and unyielding milestone scheduling.',
                    },
                    {
                      num: '06',
                      title: language === 'fr' ? 'Intervention ciblée sur les secteurs les plus recherchés' : 'Focused on prime Parisian residential districts',
                      desc: language === 'fr' ? 'Paris intramuros (8e, 9e, 16e, 17e) et Île-de-France (Neuilly-sur-Seine, Levallois, Boulogne).' : 'Paris (8th, 9th, 16th, 17th) and prime Western suburbs (Neuilly, Levallois, Boulogne).',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-8 border border-brand-hairline bg-brand-bg flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs text-brand-clay">{item.num}</span>
                          <Check className="w-4 h-4 text-brand-clay" />
                        </div>
                        <h4 className="font-serif text-xl text-brand-black mb-3">
                          {item.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-brand-hairline text-[10px] font-mono text-brand-clay uppercase tracking-widest">
                        ENGAGEMENT WA.DESIGN
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Consultation CTA Banner */}
                <div className="p-8 border border-brand-hairline bg-brand-sand/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-brand-clay block mb-1">
                      {language === 'fr' ? 'PREMIER ÉCHANGE SANS ENGAGEMENT' : 'INITIAL CONSULTATION WITHOUT OBLIGATION'}
                    </span>
                    <h5 className="font-serif text-xl sm:text-2xl text-brand-black">
                      {language === 'fr'
                        ? 'Vous souhaitez rénover votre appartement avec élégance et précision ?'
                        : 'Looking to renovate your apartment with elegance and precision?'}
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed mt-2 max-w-3xl">
                      {language === 'fr'
                        ? 'Contactez notre équipe pour échanger sur vos envies, votre budget et votre calendrier. Nous vous répondons sous 24 à 48 heures ouvrées.'
                        : 'Contact our team to discuss your aspirations, budget, and anticipated timeline. We respond within 24 to 48 business hours.'}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-editorial text-brand-bg bg-brand-black px-6 py-3.5 hover:bg-brand-clay transition-colors whitespace-nowrap self-start md:self-auto shadow-xs"
                  >
                    <span>{language === 'fr' ? 'Parlons de votre projet' : 'Discuss your project'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
