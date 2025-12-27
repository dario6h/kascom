'use client';

import { Section, AnimatedSection } from '@/components/ui';
import Counter from './Counter';

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Team Members" },
  { number: "15+", label: "Years Experience" }
];

export default function StatsSection() {
  return (
    <Section background="dark" className="py-16">
      <AnimatedSection animation="fadeIn">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const numericValue = stat.number.replace(/\D/g, '');
            const suffix = stat.number.replace(/\d/g, '');

            return (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <Counter end={numericValue} suffix={suffix} duration={2000} />
                  </div>
                  <div className="text-primary-400 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </AnimatedSection>
    </Section>
  );
}
