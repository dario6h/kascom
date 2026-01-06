'use client';

import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export default function SecondaryHero() {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/backgrounds/secondary-hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-900/85"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="gradient-text">Transform Your Business</span>
          <br />
          <span className="text-white">with KASCOOM</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-primary-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Leading provider of professional corporate solutions, helping businesses achieve their operational and digital goals through reliable services, industry expertise, and trusted execution.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/contact"
            size="large"
            className="group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            href="/services"
            variant="outline"
            size="large"
            className="group"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
