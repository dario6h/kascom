'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function MobileMenu({ isOpen, onClose, menuItems, currentPath }) {
  const [expandedItem, setExpandedItem] = useState(null);
  const { language, toggleLanguage } = useLanguage();

  const isActive = (href) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedItem(null);
  };

  const toggleExpand = (name) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-20 right-0 bottom-0 w-80 bg-primary-800/95 backdrop-blur-lg shadow-2xl z-50 lg:hidden overflow-y-auto border-l border-primary-600/30"
          >
            <div className="p-6 space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      {/* Services with Dropdown */}
                      <button
                        onClick={() => toggleExpand(item.name)}
                        className="relative w-full flex items-center justify-between px-4 py-3 font-medium transition-all text-primary-400 hover:text-white group"
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: expandedItem === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-bar transition-all duration-300 ${
                            isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        ></span>
                      </button>

                      {/* Dropdown Items */}
                      <AnimatePresence>
                        {expandedItem === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-2 space-y-1">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={handleLinkClick}
                                  className="relative block px-4 py-2 text-sm text-primary-400 hover:text-white transition-all group"
                                >
                                  <span className="relative z-10">{subItem.name}</span>
                                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-bar group-hover:w-full transition-all duration-300"></span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="relative block px-4 py-3 font-medium transition-all text-primary-400 hover:text-white group"
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
                onClick={() => {
                  toggleLanguage();
                  onClose();
                }}
                className="relative w-full px-4 py-3 text-primary-400 font-medium hover:text-white transition-all mt-4 group"
              >
                ع
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-bar group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}