'use client';

import { motion } from 'framer-motion';
import Container from './Container';

export default function Hero({ 
  title, 
  subtitle, 
  children,
  backgroundImage = false,
  className = ""
}) {
  return (
    <section className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 -z-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              {subtitle}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}