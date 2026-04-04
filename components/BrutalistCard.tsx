'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
  rotate?: number;
  shadowSize?: 'default' | 'large';
}

export default function BrutalistCard({
  children,
  className = '',
  rotate = 0,
  shadowSize = 'default',
}: BrutalistCardProps) {
  const shadow = shadowSize === 'large' ? '16px 16px 0 #1A1815' : '8px 8px 0 #1A1815';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`bg-white border-2 border-ink relative ${className}`}
      style={{
        boxShadow: shadow,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </motion.div>
  );
}
