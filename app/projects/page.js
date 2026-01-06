'use client';

import { Section, ImagePlaceholder, AnimatedSection, Button } from '@/components/ui';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    description: "Complete platform overhaul resulting in 150% increase in conversions and improved user experience.",
    date: "2024",
    image: "E-Commerce Project"
  },
  {
    title: "Enterprise CRM System",
    category: "Software Development",
    description: "Custom CRM solution streamlining operations for a Fortune 500 company with 10,000+ users.",
    date: "2024",
    image: "CRM System"
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application serving 500,000+ active users with 99.9% uptime.",
    date: "2023",
    image: "Mobile Banking"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "Data Analytics",
    description: "Real-time analytics platform leveraging machine learning for predictive insights.",
    date: "2023",
    image: "Analytics Dashboard"
  },
  {
    title: "Healthcare Management System",
    category: "Healthcare",
    description: "Comprehensive patient management system improving operational efficiency by 40%.",
    date: "2023",
    image: "Healthcare System"
  },
  {
    title: "Supply Chain Optimization",
    category: "Enterprise Solutions",
    description: "End-to-end supply chain solution reducing costs by 25% and improving delivery times.",
    date: "2022",
    image: "Supply Chain"
  }
];

export default function Projects() {
  return (
    <div className="bg-gradient-radial min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Our Projects</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-400 leading-relaxed">
                Explore our portfolio of successful projects and see how we've helped businesses transform and grow.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <Section background="dark" className="py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <div className="p-6 bg-primary-700/30 backdrop-blur-sm border border-primary-600/30 rounded-2xl hover:bg-primary-700/50 hover:border-accent-orange/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <ImagePlaceholder
                    width="400"
                    height="300"
                    label={project.image}
                    className="w-full h-48 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-bar px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-primary-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors">
                  {project.title}
                </h3>

                <p className="text-primary-400 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center text-accent-orange font-medium group-hover:gap-2 transition-all">
                  View Project
                  <ExternalLink className="w-4 h-4 ml-1 group-hover:ml-0" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" className="py-20">
        <AnimatedSection animation="fadeInUp">
          <div className="max-w-3xl mx-auto text-center p-12 bg-primary-700/30 backdrop-blur-sm border border-primary-600/30 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Have a Project in Mind?</span>
            </h2>
            <p className="text-lg text-primary-400 mb-8">
              Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
            </p>
            <Button href="/contact" size="large">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}
