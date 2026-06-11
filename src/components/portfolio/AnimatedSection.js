'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = memo(function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
});

export default AnimatedSection;
