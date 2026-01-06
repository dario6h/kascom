'use client';

import { Button, AnimatedSection } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/backgrounds/cta-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-transparent to-primary-900/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Ready to Transform Your Business?</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-200 mb-10 max-w-3xl mx-auto">
              Join hundreds of successful companies that trust KASCOOM for their digital transformation journey.
            </p>
            <Button href="/contact" size="large">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
