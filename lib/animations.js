// Reusable Framer Motion animation variants

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const fadeIn = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slideInLeft = (isRTL = false) => ({
  hidden: { 
    opacity: 0, 
    x: isRTL ? 40 : -40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
});

export const slideInRight = (isRTL = false) => ({
  hidden: { 
    opacity: 0, 
    x: isRTL ? -40 : 40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    }
  }
});