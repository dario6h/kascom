'use client';

import { Section, AnimatedSection } from '@/components/ui';
import { Wrench, Settings, Cog, ShoppingCart, Truck, Building, Globe, CheckCircle2, Users } from 'lucide-react';

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

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-radial">
      <Section background="dark" className="py-20 pt-32">
        <div>
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
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-primary-800/50 rounded-2xl flex items-center justify-center group-hover:bg-primary-700/50 transition-all duration-300">
                      <service.icon className="w-10 h-10 text-accent-orange" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-primary-400/80 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

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
        </div>
      </Section>
    </div>
  );
}
