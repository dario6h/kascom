'use client';

import { Section, ImagePlaceholder, AnimatedSection } from '@/components/ui';
import { Target, Eye, Award, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We're committed to delivering solutions that make a real difference in our clients' success."
  },
  {
    icon: Eye,
    title: "Visionary Approach",
    description: "We anticipate future trends and prepare our clients for tomorrow's challenges."
  },
  {
    icon: Award,
    title: "Excellence First",
    description: "We maintain the highest standards in everything we do, from strategy to execution."
  },
  {
    icon: Heart,
    title: "Customer Centric",
    description: "Your success is our success. We build lasting partnerships based on trust and results."
  }
];

const team = [
  { name: "John Smith", role: "CEO & Founder", image: "Team Member 1" },
  { name: "Sarah Johnson", role: "CTO", image: "Team Member 2" },
  { name: "Michael Chen", role: "Head of Operations", image: "Team Member 3" },
  { name: "Emily Davis", role: "Creative Director", image: "Team Member 4" },
  { name: "David Wilson", role: "Lead Developer", image: "Team Member 5" },
  { name: "Lisa Anderson", role: "Project Manager", image: "Team Member 6" }
];

export default function About() {
  return (
    <div className="bg-gradient-radial min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">About KASCOM</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-400 leading-relaxed">
                Pioneering corporate solutions since 2009, we've helped hundreds of businesses achieve their digital transformation goals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <Section background="dark" className="py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideInLeft">
            <ImagePlaceholder
              width="600"
              height="400"
              label="Company Office"
              className="w-full h-auto rounded-2xl border border-primary-600/30"
            />
          </AnimatedSection>

          <AnimatedSection animation="slideInRight">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Story</span>
            </h2>
            <div className="space-y-4 text-primary-400 text-lg">
              <p>
                Founded in 2009, KASCOM has grown from a small startup to a leading provider of corporate solutions. Our journey has been driven by a passion for innovation and a commitment to client success.
              </p>
              <p>
                Today, we serve clients across multiple industries, from startups to Fortune 500 companies, helping them navigate the complexities of digital transformation with confidence and clarity.
              </p>
              <p>
                Our team of experts brings together decades of combined experience in technology, business strategy, and creative problem-solving to deliver solutions that drive real business value.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Values */}
      <Section background="dark" className="py-20">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Core Values</span>
            </h2>
            <p className="text-lg text-primary-400 max-w-2xl mx-auto">
              The principles that guide everything we do at KASCOM.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <div className="p-8 bg-primary-700/30 backdrop-blur-sm border border-primary-600/30 rounded-2xl hover:bg-primary-700/50 hover:border-accent-orange/50 transition-all duration-300 group text-center h-full">
                <div className="w-16 h-16 bg-gradient-bar rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-400">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section background="dark" className="py-20">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-lg text-primary-400 max-w-2xl mx-auto">
              Talented professionals dedicated to your success.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={index} animation="scaleIn" delay={index * 0.1}>
              <div className="p-6 bg-primary-700/30 backdrop-blur-sm border border-primary-600/30 rounded-2xl hover:bg-primary-700/50 hover:border-accent-orange/50 transition-all duration-300 group text-center">
                <ImagePlaceholder
                  width="300"
                  height="300"
                  label={member.image}
                  className="w-full h-64 rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-orange font-medium">
                  {member.role}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>
    </div>
  );
}
