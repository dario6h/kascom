'use client';

import { Button, AnimatedSection } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/backgrounds/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-900/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection animation="fadeInUp" delay={0.1}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Transform Your Business</span>
              <br />
              <span className="text-white">with KASCOOM</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-400 mb-10 leading-relaxed">
              Leading provider of professional corporate solutions, helping businesses achieve their digital transformation goals with innovative technology and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="large">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="/about" variant="outline" size="large">
                Learn More
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
