'use client';

import HeroSlideshow from './components/about/HeroSlideshow';
import OurWorks from './components/about/OurWorks';
import StatsSection from './components/about/StatsSection';
import FeaturesSection from './components/about/FeaturesSection';
import CTASection from './components/about/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-radial">
      <HeroSlideshow />
      <StatsSection />
      <OurWorks />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
