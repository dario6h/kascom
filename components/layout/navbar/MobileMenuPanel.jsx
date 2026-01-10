'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenuItem from './MobileMenuItem';

export default function MobileMenuPanel({ isOpen, onClose, menuItems, currentPath }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const isActive = (href) => {
    if (href === '/') return currentPath === '/';
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
            className="fixed top-20 right-0 bottom-0 w-80 bg-neutral-600/30 backdrop-blur-lg shadow-2xl z-50 lg:hidden overflow-y-auto border-l border-primary-600/30"
          >
            <div className="p-6 space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <MobileMenuItem
                    item={item}
                    isActive={isActive(item.href)}
                    isExpanded={expandedItem === item.name}
                    onToggleExpand={toggleExpand}
                    onLinkClick={handleLinkClick}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
