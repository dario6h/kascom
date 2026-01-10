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
    <Section className="py-6 md:py-8 lg:py-10" style={{ backgroundColor: '#f5a623' }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-neutral-700/15">
        {stats.map((stat, index) => {
          const numericValue = stat.number.replace(/\D/g, '');
          const suffix = stat.number.replace(/\d/g, '');

          return (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4">
              <div className="text-4xl sm:text-5xl md:text-6xl text-neutral-700 font-bold mb-3 leading-none">
                <Counter end={numericValue} suffix={suffix} duration={2500} />
              </div>
              <div className="text-sm sm:text-base md:text-lg text-neutral-600 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
