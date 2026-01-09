'use client';

import { Section } from '@/components/ui';
import Counter from './Counter';

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Team Members" },
  { number: "15+", label: "Years Experience" }
];

export default function StatsSection() {
  return (
    <Section className="py-8 md:py-10 lg:py-12" style={{ backgroundColor: '#f9b233' }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {stats.map((stat, index) => {
          const numericValue = stat.number.replace(/\D/g, '');
          const suffix = stat.number.replace(/\d/g, '');

          return (
            <div key={index} className="flex items-center h-full">
              <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8 border-l-2 sm:border-l-3 md:border-l-4 border-neutral-800 flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-neutral-800 font-bold mb-1 sm:mb-2 uppercase leading-none">
                  <Counter end={numericValue} suffix={suffix} duration={3500} />
                </div>
                <div
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-800 tracking-wide md:tracking-wider uppercase font-medium leading-tight"
                  style={{
                    fontFamily: '"Black Ops One", sans-serif'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
