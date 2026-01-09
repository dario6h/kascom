'use client';

import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/about/backgrounds/cta-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-transparent to-primary-900/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight px-4">
            <span className="gradient-text">Ready to Transform Your Business?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-200 mb-8 sm:mb-9 md:mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
            Join hundreds of successful companies that trust KASCOOM for their digital transformation journey.
          </p>
          <Button
            href="/contact"
            variant="outline"
            size="large"
            className="group border-2 border-primary-200 text-primary-200 hover:border-white hover:text-white hover:bg-primary-200/10 focus:ring-0 focus:ring-offset-0 touch-manipulation px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
