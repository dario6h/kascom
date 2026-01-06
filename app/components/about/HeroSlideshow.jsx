'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'manifa-oilfield.png',
    title: 'MANIFA OIL FIELD PROJECT',
    subtitle: 'Mechanical services for offshore oil operations'
  },
  {
    image: 'sadaf-petrochemical.png',
    title: 'SADAF PETROCHEMICAL FACILITIES',
    subtitle: 'Fabrication and mechanical works for petrochemical plants'
  },
  {
    image: 'jeddah-drainage.png',
    title: 'JEDDAH STORM WATER DRAINAGE PROGRAM',
    subtitle: 'Infrastructure execution for complex urban systems'
  },
  {
    image: 'jizan-igcc.png',
    title: 'JIZAN IGCC POWER PROJECT',
    subtitle: 'Major power generation and industrial support works'
  },
  {
    image: 'kaust-project.png',
    title: 'KAUST UNIVERSITY PROJECTS',
    subtitle: 'Large-scale construction and inspection services'
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1500);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1500);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden group/slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `url(/images/projects/${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#1a1f2e'
          }}
        >
          {/* Dark blue overlay */}
          <div className="absolute inset-0 bg-primary-900/70"></div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-end px-4 sm:px-6 lg:px-16">
            <div className="max-w-2xl text-left">
              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 uppercase transition-all duration-[1200ms] ease-out ${
                  index === currentSlide
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-20 opacity-0'
                }`}
                style={{
                  transitionDelay: index === currentSlide ? '300ms' : '0ms'
                }}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl lg:text-2xl text-primary-200 transition-all duration-[1200ms] ease-out ${
                  index === currentSlide
                    ? 'opacity-100'
                    : 'opacity-0'
                }`}
                style={{
                  transitionDelay: index === currentSlide ? '600ms' : '0ms'
                }}
              >
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full opacity-0 group-hover/slideshow:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full opacity-0 group-hover/slideshow:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 1500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
