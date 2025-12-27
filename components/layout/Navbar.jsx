'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Fabrication, Erection & Maintenance', href: '/services#fabrication' },
        { name: 'Valve Repairing', href: '/services#valve-repairing' },
        { name: 'Machining Works', href: '/services#machining' },
        { name: 'Trading & Supply', href: '/services#trading' },
        { name: 'Manpower Supply', href: '/services#manpower' },
        { name: 'Equipment & Transport Rental', href: '/services#equipment-rental' },
        { name: 'Workshop & Facilities', href: '/services#workshop' },
      ],
    },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-800/70 backdrop-blur-lg'
            : 'bg-primary-800/40 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-bar rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold gradient-text">KASCOM</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.dropdown && setIsServicesOpen(false)}
                >
                  {item.dropdown ? (
                    <>
                      <Link
                        href={item.href}
                        className="relative flex items-center gap-1 px-4 py-2 font-medium transition-all text-primary-400 hover:text-white group"
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-bar transition-all duration-300 ${
                            isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        ></span>
                      </Link>
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 bg-primary-800/95 backdrop-blur-lg rounded-xl shadow-xl border border-primary-600/30 py-2 z-50">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="relative block px-4 py-3 text-primary-400 hover:text-white transition-all group"
                            >
                              <span className="relative z-10">{subItem.name}</span>
                              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-bar group-hover:w-full transition-all duration-300"></span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 font-medium transition-all text-primary-400 hover:text-white group"
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-bar transition-all duration-300 ${
                          isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="relative px-4 py-2 text-primary-400 font-medium hover:text-white transition-all group"
                aria-label="Toggle language"
              >
                ع
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-bar group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary-400 hover:text-white transition-all"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
        currentPath={pathname}
      />
    </>
  );
}