'use client';

import { useState, useEffect, useRef } from 'react';
import { Hero, Section, Card, Button, AnimatedSection } from '@/components/ui';
import { ArrowRight, Zap, Shield, Users, TrendingUp, Wrench, Settings, Cog, ShoppingCart, Truck, Building, Globe, CheckCircle2 } from 'lucide-react';

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

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Team Members" },
  { number: "15+", label: "Years Experience" }
];

const services = [
  {
    icon: Wrench,
    title: "Fabrication, Erection & Maintenance",
    description: "Comprehensive fabrication, erection, and maintenance services for industrial facilities.",
    features: [
      "Custom steel fabrication",
      "On-site installation",
      "Preventive maintenance",
      "Safety compliance"
    ]
  },
  {
    icon: Settings,
    title: "Valve Repairing",
    description: "Specialized valve repair and maintenance services ensuring optimal performance.",
    features: [
      "Valve diagnostics",
      "All valve types",
      "On-site service",
      "Performance optimization"
    ]
  },
  {
    icon: Cog,
    title: "Machining Works",
    description: "Precision machining services delivering quality components and custom parts.",
    features: [
      "CNC machining",
      "Custom parts",
      "Quality inspection",
      "Prototype development"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Trading & Supply",
    description: "Reliable supply chain solutions for industrial materials and equipment.",
    features: [
      "Industrial supplies",
      "Spare parts sourcing",
      "Quality products",
      "Fast delivery"
    ]
  },
  {
    icon: Users,
    title: "Manpower Supply",
    description: "Professional manpower solutions tailored to your industrial requirements.",
    features: [
      "Skilled technicians",
      "Certified welders",
      "Maintenance staff",
      "Project deployment"
    ]
  },
  {
    icon: Truck,
    title: "Equipment & Transport Rental",
    description: "Comprehensive rental services for heavy equipment and transportation.",
    features: [
      "Heavy machinery",
      "Material handling",
      "Transport vehicles",
      "Flexible periods"
    ]
  },
  {
    icon: Building,
    title: "Workshop & Facilities",
    description: "Fully equipped workshop facilities with modern tools and equipment.",
    features: [
      "Modern machinery",
      "Fabrication bays",
      "Quality testing",
      "Secure storage"
    ]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web development solutions tailored to your business needs.",
    features: [
      "Responsive design",
      "Modern frameworks",
      "SEO optimized",
      "Performance focused"
    ]
  }
];

// Counter component with count-up animation
function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5, rootMargin: '0px' }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const endValue = parseInt(end);
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smoother easing function (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.round(easeOutExpo * endValue);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasAnimated, end, duration]);

  return (
    <span ref={counterRef}>
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-radial">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/backgrounds/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-900/85"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Transform Your Business</span>
                <br />
                <span className="text-white">with KASCOM</span>
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

      {/* Stats Section */}
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

      {/* Services Section */}
      <Section background="dark" className="py-20">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-lg text-primary-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your business needs across automotive, technology, and digital transformation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <div className="p-8 bg-[#0a1628]/80 backdrop-blur-lg border border-primary-600/20 rounded-3xl hover:bg-[#0a1628]/90 hover:border-primary-500/30 transition-all duration-300 group h-full flex flex-col">
                {/* Icon at top */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-primary-800/50 rounded-2xl flex items-center justify-center group-hover:bg-primary-700/50 transition-all duration-300">
                    <service.icon className="w-10 h-10 text-accent-orange" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-primary-400/80 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list with checkmarks */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-accent-orange flex-shrink-0" strokeWidth={2} />
                      <span className="text-primary-400/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Features Section */}
      <Section background="dark" className="py-20">
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
      </Section>

      {/* CTA Section */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/backgrounds/cta-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability (optional - remove if not needed) */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-transparent to-primary-900/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Ready to Transform Your Business?</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-200 mb-10 max-w-3xl mx-auto">
                Join hundreds of successful companies that trust KASCOM for their digital transformation journey.
              </p>
              <Button href="/contact" size="large">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
