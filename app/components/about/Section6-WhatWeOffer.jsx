'use client';

import { Section } from '@/components/ui';
import {
  CheckCircle,
  Cog,
  Award,
  Wrench,
  Package,
  ShieldCheck
} from 'lucide-react';

const offerings = [
  {
    icon: CheckCircle,
    title: "ARAMCO Approved & Registered Company",
    description: "KASCOOM is an ARAMCO-approved vendor with proven experience delivering projects across Civil, Mechanical, Electrical, and Oil & Gas sectors in Saudi Arabia."
  },
  {
    icon: Cog,
    title: "Integrated Engineering & Construction Services",
    description: "We provide end-to-end engineering and construction solutions including project management, fabrication, erection, maintenance, and shutdown support with a one-window execution approach."
  },
  {
    icon: Award,
    title: "Certified Engineers & Skilled Workforce",
    description: "Our team includes ARAMCO-approved engineers, project managers, QA/QC inspectors, HSE officers, supervisors, and skilled technical manpower."
  },
  {
    icon: Wrench,
    title: "Fabrication, Erection & Maintenance",
    description: "Specialized services in piping systems, steel structures, storage tanks, ducts, stacks, pressure vessels, heat exchangers, and electro-mechanical works."
  },
  {
    icon: Package,
    title: "Machining, Valve Repair & Material Supply",
    description: "We provide machining services, valve repairing, and industrial material supply including pipes, fittings, plates, valves, electrical, and instrumentation materials."
  },
  {
    icon: ShieldCheck,
    title: "Health, Safety & Quality Commitment",
    description: "Health, Safety, Quality, and Environment (HSEQ) are central to our operations, ensuring compliance with ARAMCO and international safety standards."
  }
];

export default function WhatWeOfferSection() {
  return (
    <Section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
      <div>
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-neutral-800 relative inline-block pb-2 sm:pb-3">
            What We Offer
            <div className="absolute bottom-0 left-0 right-0 w-full h-0.5 sm:h-1" style={{ backgroundColor: '#f5a623' }}></div>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-0"
            >
              {/* Icon Circle */}
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#f5a623' }}
              >
                <offering.icon
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  strokeWidth={2}
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-800 leading-tight">
                  {offering.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm md:text-sm leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
