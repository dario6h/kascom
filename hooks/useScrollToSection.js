'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollToSection() {
  const pathname = usePathname();

  useEffect(() => {
    // Get hash from URL
    const hash = window.location.hash;
    
    if (hash) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Get navbar height for offset
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [pathname]);
}