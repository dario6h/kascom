'use client';

import { useState, useEffect, useCallback } from 'react';
import { Section } from '@/components/ui';
import ClientLogo from './ClientLogo';

const clients = [
  { name: 'Saudi Aramco', logoBase: 'aramco' },
  { name: 'Ibn Zahr', logoBase: 'ibnzahr' },
  { name: 'KAUST', logoBase: 'kaust' },
  { name: 'Royal Commission', logoBase: 'royal-commission' },
  { name: 'China Communications Construction Company', logoBase: 'ccc' },
  { name: 'SATROP Refinery', logoBase: 'satrop' },
  { name: 'Sinohydro', logoBase: 'sino' },
  { name: 'SABIC', logoBase: 'sabic' },
  { name: 'Linde', logoBase: 'linde' },
  { name: 'China Harbour Engineering Company', logoBase: 'hec' },
  { name: 'Baytur', logoBase: 'baytur' }
];

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const itemsPerSlide = 3;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= clients.length) {
        // Reset to beginning after animation completes
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 700);
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const totalSlides = Math.ceil(clients.length / itemsPerSlide);
  const currentSlideIndex = Math.floor(currentIndex / itemsPerSlide);

  const goToSlide = (index) => {
    setCurrentIndex(index * itemsPerSlide);
  };

  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentIndex + i) % clients.length;
      visible.push({ ...clients[index], uniqueKey: `${currentIndex}-${i}` });
    }
    return visible;
  };

  return (
    <Section className="pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-10 md:pb-12 lg:pt-12 lg:pb-14 relative" style={{ backgroundColor: '#f9b233' }}>
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center lg:pr-8">
        {/* Left Side - Partners Slideshow */}
        <div className="flex flex-col space-y-6 sm:space-y-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-neutral-800 tracking-wide sm:tracking-wider uppercase font-normal leading-tight"
              style={{
                fontFamily: '"Black Ops One", sans-serif'
              }}
            >
              OUR CLIENTS
            </h2>

            {/* Slide Indicators */}
            <div className="flex gap-2 sm:gap-2.5">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentSlideIndex
                      ? 'w-8 sm:w-8 h-2.5 bg-neutral-800'
                      : 'w-2.5 h-2.5 bg-neutral-800/50 hover:bg-neutral-800/70'
                  }`}
                  style={{
                    minWidth: index === currentSlideIndex ? '32px' : '10px',
                    minHeight: '10px'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          <div className="relative overflow-hidden max-w-2xl h-20 sm:h-24 mt-2 sm:mt-4">
            <div
              className="flex gap-3 sm:gap-4 h-full"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / itemsPerSlide)}% - ${currentIndex * 16}px))`,
                transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none'
              }}
            >
              {[...clients, ...clients.slice(0, itemsPerSlide)].map((partner, index) => {
                const isRoyalCommission = partner.name === 'Royal Commission';
                const isHEC = partner.name === 'China Harbour Engineering Company';
                const isIbnZahr = partner.name === 'Ibn Zahr';

                // Get size for specific logos
                let logoSize = '100%';
                if (isHEC) logoSize = '90%';
                if (isIbnZahr) logoSize = '130%';

                return (
                  <div
                    key={index}
                    className={`${isRoyalCommission ? 'bg-neutral-800' : 'bg-white'} p-3 sm:p-4 flex items-center justify-center h-20 sm:h-24 flex-shrink-0 rounded-sm`}
                    style={{
                      width: `calc((100% - ${(itemsPerSlide - 1) * 16}px) / ${itemsPerSlide})`
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <ClientLogo
                        name={partner.name}
                        logoBase={partner.logoBase}
                        className="object-contain"
                        style={{
                          maxWidth: logoSize,
                          maxHeight: logoSize,
                          width: logoSize,
                          height: 'auto'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side - Quote with City Background */}
        <div className="relative lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-full mt-4 lg:mt-0">
          <div
            className="relative w-full h-full overflow-hidden flex items-center justify-start px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 rounded-sm lg:rounded-none"
            style={{
              backgroundImage: 'url(/images/about/backgrounds/city-skyline.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-900/50"></div>

            {/* Quote Content */}
            <div className="relative z-10 text-left max-w-xl">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-light leading-relaxed">
                Committed to make a positive difference to the communities in which it operates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
