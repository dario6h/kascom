'use client';

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Section, Container, AnimatedSection } from '@/components/ui';
import SecondaryHero from '../components/contact/SecondaryHero';

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (234) 567-890',
      link: 'tel:+1234567890',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+1 (234) 567-890',
      link: 'https://wa.me/1234567890',
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@kascoom.com',
      link: 'mailto:info@kascoom.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Business Street, Suite 100, New York, NY 10001',
      link: 'https://maps.google.com/?q=123+Business+Street+Suite+100+New+York',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-radial">
      <SecondaryHero />
      <Section background="dark" className="py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="gradient-text">Get In Touch</span>
                </h1>
                <p className="text-primary-400 text-lg md:text-xl max-w-2xl mx-auto">
                  We would love to hear from you. Reach out to us through any of the following methods.
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Method Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <AnimatedSection
                    key={index}
                    animation="fadeInUp"
                    delay={0.2 + index * 0.1}
                  >
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-8 bg-primary-700/30 backdrop-blur-sm border border-primary-600/30 rounded-2xl hover:bg-primary-700/50 hover:border-accent-orange/50 transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="w-16 h-16 bg-gradient-bar rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {method.title}
                          </h3>
                          <p className="text-primary-400 group-hover:text-accent-orange transition-colors">
                            {method.info}
                          </p>
                        </div>
                      </div>
                    </a>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Company Info */}
            <AnimatedSection animation="fadeInUp" delay={0.6}>
              <div className="mt-16 p-8 bg-primary-700/30 backdrop-blur-sm border border-primary-600/30 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-bar rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">K</span>
                  </div>
                  <span className="text-3xl font-bold gradient-text">KASCOOM</span>
                </div>
                <p className="text-primary-400 text-lg mb-4">
                  Transform Your Business with Corporate Solutions
                </p>
                <span className="inline-block px-4 py-2 bg-accent-orange/20 text-accent-orange text-sm font-medium rounded-full">
                  Available 24/7
                </span>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>
    </div>
  );
}