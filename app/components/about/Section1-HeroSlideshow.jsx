'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'slide-1.png',
    title: 'MANIFA OIL FIELD PROJECT',
    subtitle: 'Mechanical services for offshore oil operations'
  },
  {
    image: 'slide-5.png',
    title: 'KAUST UNIVERSITY PROJECTS',
    subtitle: 'Large-scale construction and inspection services'
  },
  {
    image: 'slide-3.png',
    title: 'JEDDAH STORM WATER DRAINAGE PROGRAM',
    subtitle: 'Infrastructure execution for complex urban systems'
  },
  {
    image: 'slide-4.png',
    title: 'JIZAN IGCC POWER PROJECT',
    subtitle: 'Major power generation and industrial support works'
  },
  {
    image: 'slide-2.png',
    title: 'SADAF PETROCHEMICAL FACILITIES',
    subtitle: 'Fabrication and mechanical works for petrochemical plants'
  }
];

// Preload the first slide image for better performance
if (typeof window !== 'undefined') {
  const firstImage = new Image();
  firstImage.src = `/images/about/hero/${slides[0].image}`;
}

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden group/slideshow"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `url(/images/about/hero/${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#1a1f2e'
          }}
        >
          {/* Dark blue overlay */}
          <div className="absolute inset-0 bg-primary-900/70"></div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center sm:justify-end px-4 sm:px-6 lg:px-16">
            <div className="max-w-2xl text-center sm:text-left w-full sm:w-auto px-2">
              <h1
                className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 uppercase transition-all duration-[1200ms] ease-out leading-tight ${
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
                className={`text-sm sm:text-base md:text-lg lg:text-xl text-primary-200 transition-all duration-[1200ms] ease-out ${
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

      {/* Navigation Arrows - Hidden on mobile, visible on hover for desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full opacity-0 group-hover/slideshow:opacity-100 touch-manipulation"
        style={{ backgroundColor: 'rgba(64, 64, 64, 0.1)' }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 hover:scale-110 transition-transform text-neutral-700" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full opacity-0 group-hover/slideshow:opacity-100 touch-manipulation"
        style={{ backgroundColor: 'rgba(64, 64, 64, 0.1)' }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 hover:scale-110 transition-transform text-neutral-700" />
      </button>

      {/* Slide Indicators - Larger tap targets for mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-2.5">
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
            className={`h-2.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide ? 'w-10 sm:w-8' : 'w-2.5 sm:w-2 hover:bg-white/70'
            }`}
            style={{
              backgroundColor: index === currentSlide ? '#f9b233' : 'rgba(255, 255, 255, 0.5)',
              minWidth: '10px',
              minHeight: '10px'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
