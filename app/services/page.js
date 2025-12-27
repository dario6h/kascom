'use client';

import { useScrollToSection } from '@/hooks/useScrollToSection';
import { Section, Container, AnimatedSection, ImagePlaceholder, Button } from '@/components/ui';
import { Wrench, Settings, Cog, ShoppingCart, Users, Truck, Building, ArrowRight } from 'lucide-react';

export default function Services() {
  // Enable smooth scrolling to sections from navbar dropdown
  useScrollToSection();

  const services = [
    {
      id: 'fabrication',
      icon: Wrench,
      title: 'Fabrication, Erection & Maintenance',
      description: 'We provide comprehensive fabrication, erection, and maintenance services for industrial facilities. Our expert team ensures precision engineering and reliable execution for all your structural needs.',
      features: [
        'Custom steel fabrication and structural engineering',
        'On-site erection and installation services',
        'Preventive and corrective maintenance programs',
        'Quality control and safety compliance',
        'Emergency repair and shutdown maintenance',
      ],
      quote: 'Building excellence through precision engineering and dedicated craftsmanship.',
    },
    {
      id: 'valve-repairing',
      icon: Settings,
      title: 'Valve Repairing',
      description: 'Specialized valve repair and maintenance services to ensure optimal performance and longevity of your critical equipment. We handle all types of industrial valves with expert precision.',
      features: [
        'Comprehensive valve diagnostics and testing',
        'Repair and refurbishment of all valve types',
        'On-site and workshop repair services',
        'Valve performance optimization',
        'Emergency valve repair services',
      ],
      quote: 'Ensuring seamless flow and control through expert valve maintenance.',
    },
    {
      id: 'machining',
      icon: Cog,
      title: 'Machining Works',
      description: 'State-of-the-art machining services delivering precision components and custom parts. Our advanced equipment and skilled machinists ensure the highest quality standards.',
      features: [
        'CNC machining and precision turning',
        'Custom component manufacturing',
        'Repair and restoration of worn parts',
        'Prototype development and production runs',
        'Quality inspection and certification',
      ],
      quote: 'Precision machining for perfect performance, every time.',
    },
    {
      id: 'trading',
      icon: ShoppingCart,
      title: 'Trading & Supply',
      description: 'Reliable supply chain solutions for industrial materials, equipment, and spare parts. We partner with leading manufacturers to deliver quality products on time.',
      features: [
        'Wide range of industrial supplies and materials',
        'Spare parts sourcing and procurement',
        'Quality-assured products from trusted brands',
        'Competitive pricing and flexible payment terms',
        'Fast delivery and logistics support',
      ],
      quote: 'Your trusted partner for quality industrial supplies and materials.',
    },
    {
      id: 'manpower',
      icon: Users,
      title: 'Manpower Supply',
      description: 'Professional manpower solutions tailored to your industrial requirements. We provide skilled, semi-skilled, and specialized personnel for short-term and long-term projects.',
      features: [
        'Skilled technicians and engineers',
        'Certified welders and fabricators',
        'Maintenance and operations staff',
        'Project-based manpower deployment',
        'Training and skill development programs',
      ],
      quote: 'Empowering your projects with skilled and dedicated professionals.',
    },
    {
      id: 'equipment-rental',
      icon: Truck,
      title: 'Equipment & Transport Rental',
      description: 'Comprehensive rental services for heavy equipment, machinery, and transportation. Well-maintained fleet available for daily, weekly, or monthly rentals.',
      features: [
        'Heavy machinery and construction equipment',
        'Material handling and lifting equipment',
        'Transportation and logistics vehicles',
        'Flexible rental periods and competitive rates',
        'Maintenance and operator services included',
      ],
      quote: 'Reliable equipment solutions to keep your operations moving forward.',
    },
    {
      id: 'workshop',
      icon: Building,
      title: 'Workshop & Facilities',
      description: 'Fully equipped workshop facilities with modern tools and equipment. Our facilities support a wide range of industrial services and custom projects.',
      features: [
        'Modern workshop with advanced machinery',
        'Fabrication and assembly bays',
        'Quality testing and inspection facilities',
        'Secure storage and inventory management',
        'Safety-compliant work environment',
      ],
      quote: 'World-class facilities designed for excellence in every project.',
    },
  ];

  return (
    <div className="bg-gradient-radial min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Our Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-400 leading-relaxed">
                Comprehensive industrial solutions tailored to meet your business needs.
                From fabrication to manpower supply, we deliver excellence across all services.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const IconComponent = service.icon;
        const isEven = index % 2 === 0;

        return (
          <Section
            key={service.id}
            id={service.id}
            background="dark"
            className="py-16 md:py-20 scroll-mt-20"
          >
            <Container>
              <div className="grid gap-12 lg:grid-cols-2 items-start">
                {/* Content Column */}
                <AnimatedSection
                  animation={isEven ? 'slideInLeft' : 'slideInRight'}
                  delay={0.2}
                  className={isEven ? 'lg:order-1' : 'lg:order-2'}
                >
                  <div className="space-y-6">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-bar rounded-xl flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-primary-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">
                        Key Features:
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-2 h-2 bg-accent-orange rounded-full mt-2"></span>
                            <span className="text-primary-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-accent-orange pl-6 py-3 italic text-primary-400 bg-primary-700/30 rounded-r-xl">
                      {service.quote}
                    </blockquote>
                  </div>
                </AnimatedSection>

                {/* Image Column */}
                <AnimatedSection
                  animation={isEven ? 'slideInRight' : 'slideInLeft'}
                  delay={0.3}
                  className={isEven ? 'lg:order-2' : 'lg:order-1'}
                >
                  <div className="relative">
                    <ImagePlaceholder
                      width="600"
                      height="400"
                      label={service.title}
                      className="w-full rounded-2xl border border-primary-600/30"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Call to Action Section */}
      <Section background="dark" className="py-20">
        <Container>
          <AnimatedSection animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto p-12 bg-primary-700/30 backdrop-blur-sm border border-primary-600/30 rounded-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Ready to Get Started?</span>
              </h2>
              <p className="text-lg text-primary-400 mb-8">
                Contact us today to discuss your project requirements and discover how our services can help your business succeed.
              </p>
              <Button href="/contact" size="large">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </div>
  );
}
