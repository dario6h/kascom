'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedSection({ 
  children, 
  className = "",
  animation = "fadeInUp",
  delay = 0
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animations = {
    fadeInUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 }
    },
    slideInRight: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeInUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}