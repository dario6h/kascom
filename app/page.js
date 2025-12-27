'use client';

import HeroSection from './components/home/HeroSection';
import StatsSection from './components/home/StatsSection';
import ServicesSection from './components/home/ServicesSection';
import FeaturesSection from './components/home/FeaturesSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-radial">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
