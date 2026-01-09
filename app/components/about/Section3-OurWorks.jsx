'use client';

import Link from 'next/link';
import { Section } from '@/components/ui';
import { ArrowRight, MapPin, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'jizan-igcc',
    title: 'Jizan IGCC Power Project',
    location: 'Jizan, Saudi Arabia',
    image: '/images/about/projects/project-1.png',
  },
  {
    id: 'kaust-university',
    title: 'KAUST University Projects',
    location: 'Thuwal, Saudi Arabia',
    image: '/images/about/projects/project-2.png',
  },
  {
    id: 'sadaf-petrochemical',
    title: 'SADAF Petrochemical Facilities',
    location: 'Jubail Industrial City',
    image: '/images/about/projects/project-3.png',
  },
  {
    id: 'manifa-oilfield',
    title: 'Manifa Oil Field Project',
    location: 'Eastern Province, Saudi Arabia',
    image: '/images/about/projects/project-4.png',
  },
];

export default function OurWorks() {
  return (
    <Section
      className="py-10 sm:py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0">
          <div>
            <p className="text-neutral-800 text-base sm:text-lg md:text-xl uppercase tracking-wide sm:tracking-wider mb-2 sm:mb-3 font-medium" style={{ fontFamily: '"Black Ops One", sans-serif' }}>Our Works</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight" style={{ color: '#f9b233' }}>
              LATEST PROJECTS
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-neutral-800 hover:text-neutral-900 transition-colors duration-200 ease-out group font-medium touch-manipulation"
            style={{ fontFamily: '"Black Ops One", sans-serif' }}
          >
            <span>More Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group cursor-pointer h-full touch-manipulation">
                  {/* Image Container */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden bg-cover bg-center shadow-md rounded-sm"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundColor: '#1a1f2e',
                    }}
                  >
                    {/* Hover Overlay with Icon */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 sm:w-10 sm:h-10 text-white scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                    </div>

                    {/* Thick Bottom Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ backgroundColor: '#f9b233' }}></div>
                  </div>

                  {/* Project Info */}
                  <div className="mt-3 space-y-2 px-1">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-start gap-2 text-neutral-700 text-xs">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{project.location}</span>
                    </div>
                  </div>
                </div>
            </Link>
          ))}
        </div>

        {/* Mobile "More Projects" Button */}
        <div className="mt-8 sm:mt-10 flex justify-center md:hidden">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-6 py-3 text-neutral-800 hover:text-neutral-900 transition-colors duration-200 ease-out group font-medium touch-manipulation"
            style={{ fontFamily: '"Black Ops One", sans-serif' }}
          >
            <span>More Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
