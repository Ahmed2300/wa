'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTENT } from '@/data/content';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Shield, CalendarDays } from 'lucide-react';

export default function ContactSection() {
  const { language } = useLanguage();
  const t = CONTENT[language].contact;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedProjectType, setSelectedProjectType] = useState<string>('Rénovation complète');
  const [selectedBudget, setSelectedBudget] = useState<string>('300k€ – 600k€');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="w-full bg-brand-sandLight/30 py-24 sm:py-32 border-b border-brand-hairline">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Studio Information & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-6 h-[1px] bg-brand-clay" />
                <p className="font-sans text-[11px] sm:text-xs font-normal tracking-editorial text-brand-muted uppercase">
                  {t.eyebrow}
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-black leading-tight mb-5">
                {t.title}
              </h2>
              <p className="font-sans text-brand-muted text-sm sm:text-base font-light leading-relaxed mb-10">
                {t.subtitle}
              </p>

              {/* Atelier Details Card */}
              <div className="bg-brand-bg border border-brand-hairline p-8 space-y-6 shadow-xs">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-sans tracking-editorial uppercase text-brand-black font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-clay" />
                    <span>{t.atelierDetails.title}</span>
                  </div>
                  <p className="text-base font-serif text-brand-black">
                    {t.atelierDetails.addressLine1}
                  </p>
                  <p className="text-xs font-sans text-brand-muted">
                    {t.atelierDetails.addressLine2}
                  </p>
                  <p className="text-[11px] font-sans text-brand-clay italic mt-1 font-light">
                    {t.atelierDetails.notes}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-hairline space-y-3.5 text-xs font-sans">
                  <div className="flex items-center space-x-3 text-brand-black">
                    <Mail className="w-3.5 h-3.5 text-brand-muted" />
                    <a href={`mailto:${t.atelierDetails.email}`} className="hover:text-brand-clay transition-colors">
                      {t.atelierDetails.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-brand-black">
                    <Phone className="w-3.5 h-3.5 text-brand-muted" />
                    <a href={`tel:${t.atelierDetails.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-brand-clay transition-colors">
                      {t.atelierDetails.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-brand-muted">
                    <Clock className="w-3.5 h-3.5 text-brand-muted" />
                    <span>{t.atelierDetails.hours}</span>
                  </div>
                </div>

                {/* Lead Time indicator */}
                <div className="pt-4 border-t border-brand-hairline flex items-center space-x-2.5 text-[11px] text-brand-muted font-sans">
                  <CalendarDays className="w-3.5 h-3.5 text-brand-clay" />
                  <span>
                    {language === 'fr'
                      ? 'Délai moyen d’étude & diagnostic : 10 jours ouvrés'
                      : 'Average audit & diagnostic window: 10 business days'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center space-x-2 text-xs font-sans text-brand-muted/80 tracking-wide">
              <Shield className="w-3.5 h-3.5 text-brand-clay" />
              <span>
                {language === 'fr'
                  ? "Garantie décennale et discrétion patrimoniale certifiée."
                  : "Certified ten-year architectural warranty and strict client privacy."}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Inquiry Form */}
          <div className="lg:col-span-7 bg-brand-bg border border-brand-hairline p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <CheckCircle2 className="w-14 h-14 text-brand-bronze mx-auto" />
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-black">
                  {language === 'fr' ? 'Demande Transmise à l’Atelier' : 'Inquiry Received by the Atelier'}
                </h3>
                <p className="font-sans text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                  {t.form.success}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-editorial underline underline-offset-4 text-brand-black hover:text-brand-clay"
                >
                  {language === 'fr' ? 'Envoyer une autre demande' : 'Submit another inquiry'}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Project Typology Selector Chips */}
                <div>
                  <label className="block text-[11px] uppercase tracking-editorial text-brand-muted mb-3 font-sans font-medium">
                    {t.form.projectType} *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {t.form.projectTypes.map((pt, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setSelectedProjectType(pt)}
                        className={`px-3.5 py-2 text-xs font-sans transition-all duration-200 border ${
                          selectedProjectType === pt
                            ? 'bg-brand-black text-brand-bg border-brand-black font-medium'
                            : 'bg-brand-sand/20 border-brand-hairline text-brand-black hover:border-brand-black'
                        }`}
                      >
                        {pt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-editorial text-brand-muted mb-2 font-sans font-medium">
                      {t.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.form.namePlaceholder}
                      className="w-full bg-transparent border-b border-brand-hairline py-2.5 text-sm font-sans text-brand-black placeholder:text-brand-muted/40 focus:outline-none focus:border-brand-black transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-editorial text-brand-muted mb-2 font-sans font-medium">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.form.emailPlaceholder}
                      className="w-full bg-transparent border-b border-brand-hairline py-2.5 text-sm font-sans text-brand-black placeholder:text-brand-muted/40 focus:outline-none focus:border-brand-black transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Phone & Surface */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-editorial text-brand-muted mb-2 font-sans font-medium">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.form.phonePlaceholder}
                      className="w-full bg-transparent border-b border-brand-hairline py-2.5 text-sm font-sans text-brand-black placeholder:text-brand-muted/40 focus:outline-none focus:border-brand-black transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-editorial text-brand-muted mb-2 font-sans font-medium">
                      {t.form.surface}
                    </label>
                    <input
                      type="number"
                      placeholder={t.form.surfacePlaceholder}
                      className="w-full bg-transparent border-b border-brand-hairline py-2.5 text-sm font-sans text-brand-black placeholder:text-brand-muted/40 focus:outline-none focus:border-brand-black transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Budget Range Chips */}
                <div>
                  <label className="block text-[11px] uppercase tracking-editorial text-brand-muted mb-3 font-sans font-medium">
                    {t.form.budget}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {t.form.budgetOptions.map((b, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setSelectedBudget(b)}
                        className={`px-3.5 py-2 text-xs font-sans transition-all duration-200 border ${
                          selectedBudget === b
                            ? 'bg-brand-black text-brand-bg border-brand-black font-medium'
                            : 'bg-brand-sand/20 border-brand-hairline text-brand-black hover:border-brand-black'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-editorial text-brand-muted mb-2 font-sans font-medium">
                    {t.form.message} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.form.messagePlaceholder}
                    className="w-full bg-transparent border-b border-brand-hairline py-2.5 text-sm font-sans text-brand-black placeholder:text-brand-muted/40 focus:outline-none focus:border-brand-black transition-colors rounded-none resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-10 py-4 bg-brand-black text-brand-bg hover:bg-brand-clay text-xs tracking-editorial uppercase transition-all duration-300 rounded-none disabled:opacity-50 shadow-md cursor-pointer"
                  >
                    {loading ? t.form.submitting : t.form.submit}
                  </button>

                  <span className="text-[11px] font-sans text-brand-muted">
                    {language === 'fr' ? 'Réponse sous 48h ouvrées' : 'Reply within 48 business hours'}
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
