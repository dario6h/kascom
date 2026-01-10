import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function MobileMenuItem({
  item,
  isActive,
  isExpanded,
  onToggleExpand,
  onLinkClick
}) {
  // Handle dropdown items
  if (item.dropdown) {
    return (
      <>
        <button
          onClick={() => onToggleExpand(item.name)}
          className="relative w-full flex items-center justify-between px-4 py-3 font-medium text-white transition-all group"
        >
          <span>{item.name}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
          <span
            className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
              isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
            style={{ backgroundColor: '#f5a623' }}
          />
        </button>

        <AnimatePresence>
          {isExpanded && (
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
                    onClick={onLinkClick}
                    className="relative block px-4 py-2 text-sm text-white transition-all group"
                  >
                    <span className="relative z-10">{subItem.name}</span>
                    <span
                      className="absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: '#f5a623' }}
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Handle regular menu items
  return (
    <Link
      href={item.href}
      onClick={onLinkClick}
      className="relative block px-4 py-3 font-medium text-white transition-all group"
    >
      {item.name}
      <span
        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
        style={{ backgroundColor: '#f5a623' }}
      />
    </Link>
  );
}
