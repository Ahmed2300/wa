'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { Project } from '@/types';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, X, LayoutGrid, ListFilter, MapPin, Calendar, Maximize2, Compass } from 'lucide-react';
function ParallaxProjectCard({
  project,
  isEven,
  language,
  t,
  onSelect,
}: {
  project: Project;
  isEven: boolean;
  language: string;
  t: (typeof CONTENT)['fr']['projects'];
  onSelect: (p: Project) => void;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Subtle optical travel inside the photographic frame (zero overflow leak)
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['2.5%', '-2.5%']);

  return (
    <motion.article
      ref={cardRef}
      id={project.id}
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
    >
      {/* Visual Imagery Column (7 cols) */}
      <div
        className={`lg:col-span-7 ${
          isEven ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <div
          onClick={() => onSelect(project)}
          className="relative overflow-hidden bg-brand-sand/40 border border-brand-hairline rounded-none cursor-pointer group"
        >
          {/* Corner markers */}
          <span className="absolute top-2 left-2 z-20 text-[10px] font-mono text-brand-black/40">+</span>
          <span className="absolute bottom-2 right-2 z-20 text-[10px] font-mono text-brand-black/40">+</span>

          {/* In-Frame Parallax Container */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[580px] overflow-hidden">
            <motion.div
              style={{ y: imgY, scale: 1.12 }}
              className="w-full h-full will-change-transform"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Top floating spec tag */}
          <div className="absolute top-4 left-4 bg-brand-bg/95 backdrop-blur-xs px-3.5 py-1.5 text-[10px] uppercase font-sans tracking-widest text-brand-black border border-brand-hairline z-20">
            {project.category} · {project.area}
          </div>

          {/* Hover Quick View Trigger */}
          <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
            <span className="bg-brand-bg text-brand-black text-[11px] uppercase tracking-editorial px-5 py-2.5 border border-brand-black inline-flex items-center space-x-2 shadow-lg">
              <Maximize2 className="w-3.5 h-3.5 text-brand-clay" />
              <span>{language === 'fr' ? 'Ouvrir la monographie' : 'Open Monograph'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Content Column (5 cols) with subtle differential float */}
      <motion.div
        style={{ y: textY }}
        className={`lg:col-span-5 ${
          isEven ? 'lg:order-2' : 'lg:order-1'
        } flex flex-col justify-center will-change-transform`}
      >
        {/* Project Index & Location */}
        <div className="flex items-center justify-between text-xs tracking-editorial uppercase text-brand-muted mb-3 font-sans">
          <span className="flex items-center space-x-1.5">
            <MapPin className="w-3 h-3 text-brand-clay" />
            <span>{project.location}</span>
          </span>
          <div className="flex items-center space-x-2 font-mono text-[11px]">
            {project.duration && (
              <span className="text-brand-clay font-medium">{project.duration} ·</span>
            )}
            <span className="text-brand-black">{project.area}</span>
          </div>
        </div>

        {/* Project Name */}
        <h3
          onClick={() => onSelect(project)}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black font-normal mb-4 leading-tight group-hover:text-brand-clay transition-colors duration-200 cursor-pointer"
        >
          {project.title}
        </h3>

        {/* Narrative Description */}
        <p className="font-sans text-brand-muted text-sm sm:text-base font-light leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Material Swatches list */}
        <div className="mb-8 pt-4 border-t border-brand-hairline">
          <p className="text-[10px] tracking-editorial uppercase text-brand-muted mb-3 font-medium">
            {language === 'fr' ? 'Matières & Finitions' : 'Materials & Finishes'}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.materials.map((mat, i) => (
              <span
                key={i}
                className="bg-brand-sand/40 border border-brand-hairline/80 px-2.5 py-1 text-[11px] text-brand-black font-light tracking-wide rounded-none"
              >
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center space-x-2 text-xs font-normal tracking-editorial uppercase text-brand-black border-b border-brand-black pb-1 hover:border-brand-clay hover:text-brand-clay transition-all duration-200 cursor-pointer"
          >
            <span>{t.viewProject}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = CONTENT[language].projects;
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'index'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = t.items.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'haussmann') return item.category.toLowerCase().includes('haussmann');
    if (activeFilter === 'duplex') return item.category.toLowerCase().includes('contemporain') || item.category.toLowerCase().includes('duplex');
    if (activeFilter === 'hotel') return item.category.toLowerCase().includes('hôtel') || item.category.toLowerCase().includes('familial') || item.category.toLowerCase().includes('mansion');
    return true;
  });

  return (
    <section id="projets" className="w-full bg-brand-bg py-24 sm:py-32 border-b border-brand-hairline relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
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

          {/* View Mode Switcher (Grid vs. Monograph Index) with Sliding Indicator */}
          <div className="flex items-center space-x-1 border border-brand-hairline p-1 bg-brand-sand/30 self-start md:self-auto text-[11px] font-sans uppercase tracking-wider relative">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`relative z-10 inline-flex items-center space-x-1.5 px-3 py-1.5 transition-colors duration-200 ${
                viewMode === 'grid'
                  ? 'text-brand-bg font-medium'
                  : 'text-brand-muted hover:text-brand-black'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Galerie' : 'Gallery'}</span>
              {viewMode === 'grid' && (
                <motion.div
                  layoutId="viewModeActivePill"
                  className="absolute inset-0 bg-brand-black -z-10 shadow-xs"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
            </button>
            <button
              type="button"
              onClick={() => setViewMode('index')}
              className={`relative z-10 inline-flex items-center space-x-1.5 px-3 py-1.5 transition-colors duration-200 ${
                viewMode === 'index'
                  ? 'text-brand-bg font-medium'
                  : 'text-brand-muted hover:text-brand-black'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Index' : 'Index'}</span>
              {viewMode === 'index' && (
                <motion.div
                  layoutId="viewModeActivePill"
                  className="absolute inset-0 bg-brand-black -z-10 shadow-xs"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Filter Tabs Bar with Animated Moving Underline */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-14 border-b border-brand-hairline text-xs uppercase tracking-wider font-sans">
          <div className="flex items-center space-x-2 sm:space-x-8 overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: t.filterAll },
              { id: 'haussmann', label: t.filterHaussmann },
              { id: 'duplex', label: t.filterDuplex },
              { id: 'hotel', label: t.filterHotelParticulier },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative pb-4 pt-1 px-1 sm:px-2 transition-colors duration-200 text-xs font-sans tracking-editorial uppercase whitespace-nowrap ${
                    isActive ? 'text-brand-black font-medium' : 'text-brand-muted hover:text-brand-black'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="projectsActiveTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-black"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-brand-muted font-mono tracking-widest hidden sm:block pb-4">
            {filteredProjects.length} {language === 'fr' ? 'RÉALISATIONS MONOGRAPHIÉES' : 'RECORDED MONOGRAPHS'}
          </div>
        </div>

        {/* Tab Content with Seamless Exit & Entrance Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${viewMode}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* VIEW 1: Architectural Asymmetric Gallery with In-Frame Parallax */}
            {viewMode === 'grid' && (
              <div className="space-y-24 sm:space-y-32">
                {filteredProjects.map((project, index) => (
                  <ParallaxProjectCard
                    key={project.id}
                    project={project}
                    isEven={index % 2 === 0}
                    language={language}
                    t={t}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            )}

        {/* VIEW 2: Monograph Index List Table */}
        {viewMode === 'index' && (
          <div className="border-t border-brand-hairline">
            <div className="hidden md:grid grid-cols-12 py-4 text-[10px] uppercase tracking-monograph text-brand-muted font-sans border-b border-brand-hairline">
              <span className="col-span-1">Ref</span>
              <span className="col-span-4">Projet / Residence</span>
              <span className="col-span-3">Localisation</span>
              <span className="col-span-2">Typologie</span>
              <span className="col-span-1">Surface</span>
              <span className="col-span-1 text-right">Année</span>
            </div>

            <div className="divide-y divide-brand-hairline">
              {filteredProjects.map((p, i) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className="grid grid-cols-1 md:grid-cols-12 py-5 items-center hover:bg-brand-sand/30 transition-colors cursor-pointer group px-2"
                >
                  <span className="col-span-1 font-mono text-xs text-brand-clay">
                    0{i + 1}
                  </span>
                  <span className="col-span-4 font-serif text-xl sm:text-2xl text-brand-black group-hover:text-brand-clay transition-colors">
                    {p.title}
                  </span>
                  <span className="col-span-3 text-xs font-sans text-brand-muted">
                    {p.location}
                  </span>
                  <span className="col-span-2 text-xs font-sans text-brand-black">
                    {p.category}
                  </span>
                  <span className="col-span-1 text-xs font-mono text-brand-muted">
                    {p.area}
                  </span>
                  <span className="col-span-1 text-right font-mono text-xs text-brand-black">
                    {p.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
          </motion.div>
        </AnimatePresence>

        {/* Section Retours Clients (Client Reviews) */}
        {t.testimonials && t.testimonials.length > 0 && (
          <div className="mt-24 sm:mt-32 pt-16 border-t border-brand-hairline">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center space-x-3 mb-2">
                <span className="w-5 h-[1px] bg-brand-clay" />
                <span className="font-sans text-[11px] font-normal tracking-editorial text-brand-clay uppercase">
                  {language === 'fr' ? 'TÉMOIGNAGES · CONFIANCE' : 'TESTIMONIALS · TRUST'}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black">
                {t.testimonialsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 border border-brand-hairline bg-brand-sand/30 relative flex flex-col justify-between"
                >
                  <span className="font-serif text-6xl text-brand-clay/20 absolute top-4 left-6 select-none pointer-events-none">
                    “
                  </span>
                  <blockquote className="relative z-10 font-serif text-lg sm:text-xl text-brand-black/95 font-normal italic leading-relaxed mb-6 pt-3">
                    &laquo;&nbsp;{test.quote}&nbsp;&raquo;
                  </blockquote>
                  <div className="flex items-center justify-between text-xs tracking-editorial uppercase text-brand-muted font-sans border-t border-brand-hairline pt-4">
                    <span className="font-medium text-brand-black">{test.author}</span>
                    <span className="font-mono text-[11px] text-brand-clay">{test.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Project Detail Modal Monograph */}
      <AnimatePresence>
        {selectedProject && (
          <div
            data-lenis-prevent="true"
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-brand-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              data-lenis-prevent="true"
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-bg border border-brand-hairline max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl custom-scrollbar overscroll-contain"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-brand-black hover:text-brand-clay transition-colors"
                aria-label="Close monograph"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 text-[11px] font-sans tracking-editorial uppercase text-brand-clay mb-2">
                  <span>{selectedProject.location}</span>
                  <span>·</span>
                  <span>{selectedProject.year}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-brand-black mb-3">
                  {selectedProject.title}
                </h3>
                <p className="font-sans text-sm text-brand-muted leading-relaxed max-w-2xl">
                  {selectedProject.description}
                </p>
              </div>

              {/* Big Image */}
              <div className="mb-8 border border-brand-hairline overflow-hidden bg-brand-sand/30">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-[360px] sm:h-[460px] object-cover"
                />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-brand-hairline text-xs font-sans mb-8">
                <div>
                  <span className="text-[10px] tracking-editorial uppercase text-brand-muted block">Typologie</span>
                  <span className="font-medium text-brand-black">{selectedProject.category}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-editorial uppercase text-brand-muted block">Surface</span>
                  <span className="font-medium text-brand-black">{selectedProject.area}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-editorial uppercase text-brand-muted block">Maîtrise d&apos;œuvre</span>
                  <span className="font-medium text-brand-black">WA Design France</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-editorial uppercase text-brand-muted block">Livraison</span>
                  <span className="font-medium text-brand-black">{selectedProject.year}</span>
                </div>
              </div>

              {/* Materials in Monograph */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-editorial font-medium text-brand-black mb-3 font-sans">
                  {language === 'fr' ? 'Matières & Artisans d’Art' : 'Materials & Guild Artisans'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.materials.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-brand-sand/50 border border-brand-hairline text-xs text-brand-black"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-brand-hairline">
                <span className="text-xs font-sans text-brand-muted">
                  {language === 'fr' ? 'Dossier photographique complet disponible sur demande.' : 'Full photographic archival file available upon request.'}
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-brand-black text-brand-bg text-xs uppercase tracking-editorial hover:bg-brand-clay transition-colors"
                >
                  {language === 'fr' ? 'Initier un projet similaire' : 'Initiate a similar project'}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
