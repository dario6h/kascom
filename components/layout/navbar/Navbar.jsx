'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import NavbarLogo from './NavbarLogo';
import DesktopMenu from './DesktopMenu';
import MobileControls from './MobileControls';
import MobileMenuPanel from './MobileMenuPanel';

const MENU_ITEMS = [
  { name: 'About', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { toggleLanguage } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a route is active
  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-hidden ${
    isScrolled
      ? 'bg-neutral-600/30 backdrop-blur-lg'
      : 'bg-neutral-600/30 backdrop-blur-md'
  }`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-20">
            <NavbarLogo />

            <DesktopMenu
              menuItems={MENU_ITEMS}
              isActive={isActive}
              onLanguageToggle={toggleLanguage}
            />

            <MobileControls
              isMenuOpen={isMobileMenuOpen}
              onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onLanguageToggle={toggleLanguage}
            />
          </div>
        </div>
      </nav>

      <MobileMenuPanel
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={MENU_ITEMS}
        currentPath={pathname}
      />
    </>
  );
}
