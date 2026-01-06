'use client';

import { useParams } from 'next/navigation';
import { Section, Container, AnimatedSection } from '@/components/ui';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Project data
const projectsData = {
  'king-salman-convention-center': {
    title: 'King Salman International Convention Center',
    location: 'Madinah Al Munawwarah',
    description: 'A world-class convention center project in Madinah Al Munawwarah.',
  },
  'jazan-grain-silos': {
    title: 'Jazan Grain Silos And Ancillary Facilities',
    location: 'Jazan',
    description: 'Large-scale grain storage and processing facilities in Jazan.',
  },
  'thuwal-town-development': {
    title: 'Thuwal Town Urban Development',
    location: 'Thuwal',
    description: 'Comprehensive urban development project in Thuwal.',
  },
  'king-abdullah-sports-city': {
    title: 'King Abdullah Sports City',
    location: 'Jeddah',
    description: 'State-of-the-art sports complex in Jeddah.',
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;
  const project = projectsData[projectId];

  // If project not found, show 404-like message
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-radial flex items-center justify-center">
        <Section background="dark" className="py-20">
          <Container>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Project Not Found</span>
              </h1>
              <p className="text-primary-400 mb-8">
                The project you're looking for doesn't exist.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-bar text-white rounded-xl hover:shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </Link>
            </div>
          </Container>
        </Section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-radial">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeInUp">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">{project.title}</span>
              </h1>
              <div className="flex items-center gap-2 text-primary-400 text-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {project.location}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="bg-primary-700/30 backdrop-blur-sm border border-primary-600/30 rounded-3xl p-8 md:p-12">
              <p className="text-xl text-primary-400 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-8 text-primary-400">
                <p className="italic">Project details coming soon...</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
