'use client';

import HeroSlideshow from './components/about/Section1-HeroSlideshow';
import StatsSection from './components/about/Section2-Stats';
import OurWorks from './components/about/Section3-OurWorks';
import AboutTabs from './components/about/Section4-AboutTabs';
import ClientsSection from './components/about/Section5-Clients';
import WhatWeOfferSection from './components/about/Section6-WhatWeOffer';
import CTASection from './components/about/Section7-CTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlideshow />
      <StatsSection />
      <OurWorks />
      <AboutTabs />
      <ClientsSection />
      <WhatWeOfferSection />
      <CTASection />
    </div>
  );
}
