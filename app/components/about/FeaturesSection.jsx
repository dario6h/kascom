'use client';

import { Section, AnimatedSection } from '@/components/ui';
import { Zap, Shield, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast solutions optimized for your business needs and scalability.",
    backgroundImage: "/images/backgrounds/feature-fast-performance.png"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security measures to protect your valuable data and assets.",
    backgroundImage: "/images/backgrounds/feature-secure-reliable.png"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience in corporate solutions.",
    backgroundImage: "/images/backgrounds/feature-expert-team.png"
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Strategic approaches designed to accelerate your business growth.",
    backgroundImage: "/images/backgrounds/feature-growth-focused.png"
  }
];

export default function FeaturesSection() {
  return (
    <Section background="dark" className="py-20">
      <div>
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Why Choose KASCOOM</span>
            </h2>
            <p className="text-lg text-primary-400 max-w-2xl mx-auto">
              We deliver exceptional results through our commitment to excellence, innovation, and customer success.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <div
                className="relative p-10 bg-[#0a1628]/80 backdrop-blur-lg h-full overflow-hidden rounded-2xl border-2 border-accent-orange/60"
                style={{
                  backgroundImage: `url(${feature.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-orange/60 to-accent-yellow/60 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-primary-400/90 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
