import type { Metadata, Viewport } from 'next';
import { EB_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import SmoothScroll from '@/components/SmoothScroll';
import NoiseOverlay from '@/components/NoiseOverlay';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';

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

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://wadesign.fr'),
  title: 'WA Design France — Rénovation d’Appartements de Luxe Paris',
  description:
    'Rénovez votre appartement avec élégance et précision. Wa.Design transforme vos espaces de vie en lieux d’exception à Paris et en Île-de-France. Du premier croquis à la remise des clés.',
  keywords: [
    'Wa.Design',
    'WA Design France',
    'Rénovation appartement Paris',
    'Rénovation luxe Paris',
    'Architecture intérieur Paris',
    'Rénovation haussmannien',
    'Neuilly-sur-Seine',
    'Quiet luxury Paris',
    'Maîtrise d’œuvre Paris',
  ],
  authors: [{ name: 'WA Design France' }],
  creator: 'WA Design France',
  publisher: 'WA Design France',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://wadesign.fr',
    siteName: 'WA Design France',
    title: 'WA Design France — Rénovation d’Appartements de Luxe Paris',
    description:
      'Rénovez votre appartement avec élégance et précision. Spécialistes de la rénovation d’appartements luxueux à Paris et en Île-de-France.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WA Design France — Rénovation d’Appartements de Luxe Paris',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WA Design France — Rénovation d’Appartements de Luxe Paris',
    description:
      'Rénovez votre appartement avec élégance et précision. Spécialistes de la rénovation d’appartements luxueux à Paris et en Île-de-France.',
    images: ['/og-image.jpg'],
    creator: '@wadesignfrance',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${ebGaramond.variable} ${sansFont.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-brand-bg text-brand-black min-h-screen antialiased selection:bg-brand-sand relative" suppressHydrationWarning>
        <LanguageProvider>
          <PageTransition />
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
