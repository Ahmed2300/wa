'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT, BRAND_ASSETS } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Compass, Award, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StudioSection() {
  const { language } = useLanguage();
  const t = CONTENT[language].studio;
  const [activeTab, setActiveTab] = useState<'manifesto' | 'methodology' | 'crafts' | 'metrics'>('manifesto');
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const tabs = [
    {
      id: 'manifesto' as const,
      number: '01',
      label: language === 'fr' ? 'Philosophie & Atelier' : 'Philosophy & Atelier',
    },
    {
      id: 'methodology' as const,
      number: '02',
      label: language === 'fr' ? 'Méthodologie en 3 Actes' : '3-Act Methodology',
    },
    {
      id: 'crafts' as const,
      number: '03',
      label: language === 'fr' ? "Charte des Métiers d'Art" : 'Master Crafts Charter',
    },
    {
      id: 'metrics' as const,
      number: '04',
      label: language === 'fr' ? 'Chiffres Clés & Rigueur' : 'Standards & Metrics',
    },
  ];

  const metricsData = [
    {
      value: '14+',
      label: language === 'fr' ? "Années d'exercice exclusif" : 'Years of Parisian practice',
      detail: language === 'fr' ? 'Spécialisation dans le patrimoine haussmannien & contemporain.' : 'Focused on historic Parisian apartments & contemporary residences.',
    },
    {
      value: '48+',
      label: language === 'fr' ? 'Résidences privées livrées' : 'Completed private residences',
      detail: language === 'fr' ? 'Saint-Germain-des-Prés, Marais, Monceau, Neuilly-sur-Seine.' : 'VIe, VIIe, VIIIe, XVIe arrondissements & Western Paris.',
    },
    {
      value: '8 max',
      label: language === 'fr' ? 'Chantiers par an' : 'Commissions per year',
      detail: language === 'fr' ? 'Présence quotidienne de l’architecte sur chaque réalisation.' : 'Daily on-site oversight by the lead architect on each commission.',
    },
    {
      value: '100%',
      label: language === 'fr' ? "Compagnons d'art français" : 'French master guild craftsmen',
      detail: language === 'fr' ? 'Ébénisterie, stafferie et marbrerie sans sous-traitance opaque.' : 'Artisanal joinery, ornamental plaster and stonecutting.',
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
              <div className="text-brand-black/90 font-medium">48°51&apos;04.2&quot;N 2°20&apos;18.8&quot;E</div>
              <div className="text-brand-muted">HÔTEL DE BRANCAS · 75006 PARIS</div>
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
            {/* TAB 1: Philosophie & Atelier */}
            {activeTab === 'manifesto' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                
                {/* Left Architectural Monograph Column */}
                <div className="lg:col-span-6 space-y-8">
                  {/* Dropped-Cap Editorial Text */}
                  <div className="border-l-2 border-brand-clay pl-6 sm:pl-8 py-2">
                    <p className="font-serif text-xl sm:text-2xl text-brand-black/95 font-normal italic leading-relaxed">
                      &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                    </p>
                    <div className="mt-4 flex items-center space-x-3 text-xs tracking-editorial uppercase text-brand-muted font-sans">
                      <span className="font-medium text-brand-black">WA Design France</span>
                      <span>·</span>
                      <span className="font-mono text-[11px] text-brand-clay">ARCHIVES D&apos;ATELIER</span>
                    </div>
                  </div>

                  <div className="text-brand-muted text-sm sm:text-base leading-relaxed font-light space-y-4 pt-2">
                    <p>
                      {t.manifesto}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-muted/90">
                      {language === 'fr'
                        ? "Fondé au cœur de la Rive Gauche, l'atelier s'est forgé une réputation d'intransigeance. Nous concilions la sauvegarde rigoureuse des éléments patrimoniaux (moulures d'époque, trumeaux, parquets versaillais) avec l'intégration invisible du confort technologique le plus exigeant."
                        : "Founded in the historic heart of the Left Bank, the atelier has built an uncompromising reputation. We harmoniously merge the strict preservation of heritage elements (antique moldings, pier mirrors, Versailles parquets) with the invisible integration of state-of-the-art residential engineering."}
                    </p>
                  </div>

                  {/* Atelier Address & Hours */}
                  <div className="p-5 border border-brand-hairline bg-brand-sand/30 flex items-start space-x-4">
                    <Building2 className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />
                    <div className="text-xs font-sans text-brand-black/90 space-y-1">
                      <div className="font-medium tracking-wide uppercase">Atelier WA Design France</div>
                      <div className="text-brand-muted">Hôtel de Brancas — 14 Rue de Tournon, 75006 Paris</div>
                      <div className="text-[11px] text-brand-clay font-mono pt-1">
                        {language === 'fr' ? 'Consultations sur rendez-vous privé uniquement' : 'Consultations by private appointment only'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Architectural Monograph Plate */}
                <div className="lg:col-span-6 space-y-4">
                  {/* Passe-Partout Archival Framing */}
                  <div className="p-3 sm:p-4 bg-brand-sand/30 border border-brand-hairline">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-sand/50 border border-brand-hairline/80 group">
                      <img
                        src={BRAND_ASSETS.studioImage}
                        alt="WA Design France Parisian Architecture Atelier"
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-brand-bg/95 px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider text-brand-black border border-brand-hairline">
                        PL. 01 — ATELIER DU VIE
                      </div>
                    </div>
                    <div className="pt-3 flex items-center justify-between text-[10px] font-mono uppercase text-brand-muted tracking-widest">
                      <span>RÉF. ARCHIVISTIQUE 75006-TOURNON</span>
                      <span className="text-brand-clay">PARIS · RIVE GAUCHE</span>
                    </div>
                  </div>

                  {/* Blueprint Specifications Bar */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                    <div className="p-4 border border-brand-hairline bg-brand-bg">
                      <span className="text-[10px] font-mono uppercase text-brand-clay block mb-1">
                        {language === 'fr' ? 'CADRE D’INTERVENTION' : 'SCOPE OF WORK'}
                      </span>
                      <p className="text-brand-black font-medium text-xs">
                        {language === 'fr' ? 'Rénovations intégrales > 100 m²' : 'Full renovations > 100 sqm'}
                      </p>
                    </div>
                    <div className="p-4 border border-brand-hairline bg-brand-bg">
                      <span className="text-[10px] font-mono uppercase text-brand-clay block mb-1">
                        {language === 'fr' ? 'ENGAGEMENT CHANTIER' : 'SITE ENGAGEMENT'}
                      </span>
                      <p className="text-brand-black font-medium text-xs">
                        {language === 'fr' ? 'Pilotage quotidien sans relais' : 'Daily direct on-site oversight'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: Méthodologie en 3 Actes */}
            {activeTab === 'methodology' && (
              <div className="space-y-8">
                {/* 3 Step Interactive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {t.steps.map((step, idx) => {
                    const isSelected = selectedPhase === idx;
                    return (
                      <div
                        key={step.step}
                        onClick={() => setSelectedPhase(idx)}
                        className={`p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-brand-black bg-brand-sand/40 shadow-sm'
                            : 'border-brand-hairline bg-brand-bg hover:border-brand-black/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-baseline justify-between mb-5">
                            <span className="font-mono text-3xl sm:text-4xl text-brand-clay font-light">
                              {step.step}
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-brand-muted font-mono">
                              ACTE 0{idx + 1}
                            </span>
                          </div>

                          <h4 className="font-serif text-xl sm:text-2xl text-brand-black mb-3">
                            {step.title}
                          </h4>

                          <p className="font-sans text-xs sm:text-sm text-brand-muted leading-relaxed font-light mb-6">
                            {step.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-brand-hairline flex items-center justify-between text-[10px] uppercase tracking-editorial text-brand-muted font-sans">
                          <span>{isSelected ? (language === 'fr' ? 'Phase sélectionnée' : 'Active phase') : (language === 'fr' ? 'Voir détails' : 'View details')}</span>
                          <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-brand-clay' : 'bg-brand-sand'}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Deliverables Panel for Active Step */}
                <div className="p-8 border border-brand-hairline bg-brand-sand/20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-brand-hairline gap-4">
                    <div>
                      <div className="text-[10px] font-mono tracking-widest uppercase text-brand-clay mb-1">
                        {language === 'fr' ? 'LIVRABLES FORMELS & PROTOCOLE' : 'DELIVERABLES & PROTOCOL'}
                      </div>
                      <h4 className="font-serif text-2xl text-brand-black">
                        {t.steps[selectedPhase].title}
                      </h4>
                    </div>

                    <div className="text-xs font-mono text-brand-muted">
                      {selectedPhase === 0 && (language === 'fr' ? 'Durée estimée : 3 à 5 semaines' : 'Estimated duration: 3 to 5 weeks')}
                      {selectedPhase === 1 && (language === 'fr' ? 'Durée estimée : 6 à 10 semaines' : 'Estimated duration: 6 to 10 weeks')}
                      {selectedPhase === 2 && (language === 'fr' ? 'Durée estimée : 4 à 9 mois selon surface' : 'Estimated duration: 4 to 9 months by area')}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedPhase === 0 && [
                      { label: language === 'fr' ? 'Relevé Laser 3D' : '3D Laser Survey', desc: language === 'fr' ? 'Relevé millimétrique complet de l’enveloppe historique.' : 'Millimetric scan of historical load-bearing envelope.' },
                      { label: language === 'fr' ? 'Diagnostic Bâti' : 'Structural Audit', desc: language === 'fr' ? 'Vérification planchers bois, cheminées, tirants de façade.' : 'Verification of timber floors, flues, and tie-rods.' },
                      { label: language === 'fr' ? 'Cahier de Vie' : 'Lifestyle Brief', desc: language === 'fr' ? 'Audition approfondie des habitudes, circulations et luminosité.' : 'Deep lifestyle inquiry on circulation, light, and private zones.' },
                      { label: language === 'fr' ? 'Cadre Budgétaire' : 'Budget Target', desc: language === 'fr' ? 'Évaluation prévisionnelle globale sans zone d’ombre.' : 'Comprehensive provisional estimate without grey areas.' },
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-brand-bg border border-brand-hairline">
                        <CheckCircle2 className="w-4 h-4 text-brand-clay mb-2" />
                        <div className="font-sans text-xs font-medium text-brand-black uppercase tracking-wider mb-1">{item.label}</div>
                        <div className="font-sans text-xs text-brand-muted font-light leading-relaxed">{item.desc}</div>
                      </div>
                    ))}

                    {selectedPhase === 1 && [
                      { label: language === 'fr' ? 'Plans d’Éxécution 1:20' : '1:20 Working Drawings', desc: language === 'fr' ? 'Coupes détaillées, calepinages de pierres et calques de réseaux.' : 'Detailed elevations, stone calepinage, and MEP drawings.' },
                      { label: language === 'fr' ? 'Échantillonnage Réel' : 'Physical Swatches', desc: language === 'fr' ? 'Sélection tactile des marbres, chênes et bronzes à l’atelier.' : 'Tactile curation of marbles, oaks, and hot-waxed bronzes.' },
                      { label: language === 'fr' ? 'Chiffrage Entreprises' : 'Contractor Tender', desc: language === 'fr' ? 'Consultation rigoureuse des compagnons d’art parisiens.' : 'Rigorous competitive tender with certified Parisian artisans.' },
                      { label: language === 'fr' ? 'Autorisations & Copropriété' : 'Legal & Condominium', desc: language === 'fr' ? 'Dossier architecte de copropriété et déclarations préalables.' : 'Condominium architect dossiers and municipal permits.' },
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-brand-bg border border-brand-hairline">
                        <CheckCircle2 className="w-4 h-4 text-brand-clay mb-2" />
                        <div className="font-sans text-xs font-medium text-brand-black uppercase tracking-wider mb-1">{item.label}</div>
                        <div className="font-sans text-xs text-brand-muted font-light leading-relaxed">{item.desc}</div>
                      </div>
                    ))}

                    {selectedPhase === 2 && [
                      { label: language === 'fr' ? 'Pilotage Quotidien' : 'Daily On-Site Direction', desc: language === 'fr' ? 'Visites sur site chaque matin par l’architecte en chef.' : 'Every morning on-site oversight by the lead architect.' },
                      { label: language === 'fr' ? 'Rapport Hebdomadaire' : 'Weekly Status Ledger', desc: language === 'fr' ? 'Journal photographique et point d’avancement financier.' : 'Photo-documented progress log and financial ledger.' },
                      { label: language === 'fr' ? 'Menuiserie Ajustée' : 'Bespoke Fitting', desc: language === 'fr' ? 'Ajustement au rabot sur place pour épouser les murs anciens.' : 'Hand-planed scribe fitting to historic wall contours.' },
                      { label: language === 'fr' ? 'Livraison Clés en Main' : 'Handover & Guarantee', desc: language === 'fr' ? 'Nettoyage hôtelier, réception sans réserve et garantie décennale.' : 'Museum-clean detailing, zero-snag handover, 10-yr insurance.' },
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-brand-bg border border-brand-hairline">
                        <CheckCircle2 className="w-4 h-4 text-brand-clay mb-2" />
                        <div className="font-sans text-xs font-medium text-brand-black uppercase tracking-wider mb-1">{item.label}</div>
                        <div className="font-sans text-xs text-brand-muted font-light leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Charte des Métiers d'Art */}
            {activeTab === 'crafts' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {t.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-6 border border-brand-hairline bg-brand-bg flex flex-col justify-between group hover:border-brand-black transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs text-brand-clay">DISCIPLINE 0{idx + 1}</span>
                          <span className="w-2 h-2 bg-brand-clay/40 group-hover:bg-brand-clay transition-colors" />
                        </div>
                        <h4 className="font-serif text-xl text-brand-black mb-3">
                          {pillar.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6">
                          {pillar.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-brand-hairline text-[10px] font-mono uppercase text-brand-clay tracking-wider">
                        {language === 'fr' ? 'COMPAGNONS & ARTISANS D’ART' : 'CERTIFIED FRENCH GUILD'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Craftsman Guarantee Statement */}
                <div className="p-8 border border-brand-hairline bg-brand-sand/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <h5 className="font-serif text-xl text-brand-black mb-2">
                      {language === 'fr' ? 'La règle d’or : Zéro sous-traitance opaque.' : 'The Golden Rule: Zero opaque subcontracting.'}
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                      {language === 'fr'
                        ? 'Chaque intervenant sur votre chantier est un compagnon ou artisan d’art réputé, identifié nominativement dans votre dossier de consultation. Nous entretenons avec nos ébénistes, tailleurs de pierre et marbriers un compagnonnage de plus d’une décennie.'
                        : 'Every artisan on your site is an identified master craftsman listed by name in your tender documents. We have maintained dedicated partnerships with our cabinetmakers, stonemasons, and bronze-smiths for over a decade.'}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center space-x-2 text-xs font-mono tracking-editorial uppercase text-brand-black border border-brand-black px-5 py-3">
                    <ShieldCheck className="w-4 h-4 text-brand-clay" />
                    <span>GARANTIE DÉCENNALE & BIENNALE</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Chiffres Clés & Rigueur */}
            {activeTab === 'metrics' && (
              <div className="space-y-8">
                {/* 4 Large Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {metricsData.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-8 border border-brand-hairline bg-brand-bg flex flex-col justify-between"
                    >
                      <div>
                        <div className="font-serif text-4xl sm:text-5xl text-brand-black font-normal mb-3">
                          {m.value}
                        </div>
                        <h4 className="font-sans text-xs uppercase tracking-editorial font-medium text-brand-black mb-2">
                          {m.label}
                        </h4>
                        <div className="w-8 h-[1px] bg-brand-clay mb-4" />
                        <p className="font-sans text-xs text-brand-muted leading-relaxed font-light">
                          {m.detail}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-brand-hairline text-[10px] font-mono text-brand-clay uppercase tracking-widest">
                        CRITÈRE WA-0{idx + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Exclusivity Commitment Callout */}
                <div className="p-8 border border-brand-hairline bg-brand-sand/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-brand-clay block mb-1">
                      {language === 'fr' ? 'CLAUSE D’EXCLUSIVITÉ ATELIER' : 'STUDIO EXCLUSIVITY CLAUSE'}
                    </span>
                    <h5 className="font-serif text-xl sm:text-2xl text-brand-black">
                      {language === 'fr'
                        ? 'Pourquoi limitons-nous nos projets à 8 résidences par an ?'
                        : 'Why do we cap our commissions at 8 residences per year?'}
                    </h5>
                    <p className="font-sans text-xs sm:text-sm text-brand-muted font-light leading-relaxed mt-2 max-w-3xl">
                      {language === 'fr'
                        ? "Parce que l'architecture d'intérieur haut de gamme ne se délègue pas à des juniors. Le fondateur et les architectes seniors de WA Design France sont présents sur chaque chantier chaque semaine. Cette rareté délibérée est le gage absolu d'une exécution sans faille."
                        : 'Because high-end interior architecture cannot be handed off to juniors. The founder and senior architects of WA Design France are present on site every week. This deliberate exclusivity guarantees flawless execution and unmatched peace of mind.'}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-editorial text-brand-bg bg-brand-black px-6 py-3.5 hover:bg-brand-clay transition-colors whitespace-nowrap self-start md:self-auto shadow-xs"
                  >
                    <span>{language === 'fr' ? 'Vérifier la disponibilité' : 'Check availability'}</span>
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
