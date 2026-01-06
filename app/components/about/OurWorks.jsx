'use client';

import Link from 'next/link';
import { Section, AnimatedSection } from '@/components/ui';
import { ArrowRight, MapPin, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'jizan-igcc',
    title: 'Jizan IGCC Power Project',
    location: 'Jizan, Saudi Arabia',
    image: '/images/projects/jizan-igcc-card.png',
  },
  {
    id: 'kaust-university',
    title: 'KAUST University Projects',
    location: 'Thuwal, Saudi Arabia',
    image: '/images/projects/kaust-card.png',
  },
  {
    id: 'sadaf-petrochemical',
    title: 'SADAF Petrochemical Facilities',
    location: 'Jubail Industrial City',
    image: '/images/projects/sadaf-card.png',
  },
  {
    id: 'manifa-oilfield',
    title: 'Manifa Oil Field Project',
    location: 'Eastern Province, Saudi Arabia',
    image: '/images/projects/manifa-card.png',
  },
];

export default function OurWorks() {
  return (
    <Section
      background="dark"
      className="py-20 relative"
      style={{
        backgroundImage: 'url(/images/backgrounds/our-works-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0a0f1a',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <AnimatedSection animation="fadeInUp">
              <p className="text-primary-300 text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">Our Works</p>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
                <span className="gradient-text">LATEST PROJECTS</span>
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-primary-300 hover:text-white transition-colors duration-200 ease-out group font-medium"
            >
              <span>More Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group cursor-pointer h-full">
                  {/* Image Container */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden mb-4 bg-cover bg-center rounded-xl"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundColor: '#1a1f2e',
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>

                    {/* Hover Overlay with Icon */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                      <ExternalLink className="w-12 h-12 text-white scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors duration-400 ease-in-out leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-start gap-2 text-blue-400 text-sm">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
        </div>

        {/* Mobile "More Projects" Button */}
        <AnimatedSection animation="fadeInUp" delay={0.4}>
          <div className="mt-8 flex justify-center md:hidden">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-primary-300 hover:text-white transition-colors duration-200 ease-out group font-medium"
            >
              <span>More Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
