import type { Metadata } from 'next';
import { EB_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import SmoothScroll from '@/components/SmoothScroll';
import NoiseOverlay from '@/components/NoiseOverlay';
import CustomCursor from '@/components/CustomCursor';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WA Design France — Architecture d’Intérieur & Rénovation Paris',
  description:
    'Rénovation haut de gamme et architecture d’intérieur sur-mesure pour appartements haussmanniens et contemporains à Paris et en Île-de-France.',
  keywords: [
    'WA Design France',
    'Architecture intérieur Paris',
    'Rénovation haussmannien',
    'Quiet luxury Paris',
    'Architecte intérieur Saint-Germain-des-Prés',
    'Maîtrise d’œuvre Paris',
  ],
  openGraph: {
    title: 'WA Design France — Architecture d’Intérieur & Rénovation Paris',
    description: 'Des intérieurs pensés pour durer. Rénovation d’exception à Paris.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://wadesign.fr',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${ebGaramond.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="bg-brand-bg text-brand-black min-h-screen antialiased selection:bg-brand-sand relative">
        <LanguageProvider>
          <SmoothScroll>
            {/* Architectural Tactile Atmosphere */}
            <NoiseOverlay />
            <CustomCursor />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
