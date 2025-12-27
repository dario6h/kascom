'use client';

import { Section, AnimatedSection } from '@/components/ui';
import { Zap, Shield, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast solutions optimized for your business needs and scalability."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security measures to protect your valuable data and assets."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience in corporate solutions."
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Strategic approaches designed to accelerate your business growth."
  }
];

export default function FeaturesSection() {
  return (
    <Section background="dark" className="py-20">
      <div>
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Why Choose KASCOM</span>
            </h2>
            <p className="text-lg text-primary-400 max-w-2xl mx-auto">
              We deliver exceptional results through our commitment to excellence, innovation, and customer success.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <div className="p-10 bg-[#0a1628]/80 backdrop-blur-lg border border-primary-600/20 rounded-3xl hover:bg-[#0a1628]/90 hover:border-primary-500/30 transition-all duration-300 group h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-yellow/20 to-accent-orange/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-accent-yellow" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary-400/90 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
