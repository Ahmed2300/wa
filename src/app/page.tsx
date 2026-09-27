import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectStrip from '@/components/ProjectStrip';
import ProjectsSection from '@/components/ProjectsSection';
import StudioSection from '@/components/StudioSection';
import ServicesSection from '@/components/ServicesSection';
import MaterialInspector from '@/components/MaterialInspector';
import InstagramGrid from '@/components/InstagramGrid';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-black">
      {/* Monograph Sticky Header with Language Switcher */}
      <Navbar />

      {/* Main Landing Canvas */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Project Context & Geographic Baseline */}
        <ProjectStrip />

        {/* Selected Architectural Works (Projets) */}
        <ProjectsSection />

        {/* Studio Philosophy & 3-Step Methodology */}
        <StudioSection />

        {/* Comprehensive Architectural Services */}
        <ServicesSection />

        {/* Tactile Material Inspector */}
        <MaterialInspector />

        {/* Editorial Social Grid (9 Tiles) linking to Instagram */}
        <InstagramGrid />

        {/* Private Consultation & Contact Form */}
        <ContactSection />
      </main>

      {/* Monograph Footer */}
      <Footer />
    </div>
  );
}
