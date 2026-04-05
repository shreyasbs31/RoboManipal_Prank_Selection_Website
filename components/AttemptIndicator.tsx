'use client';

import { motion } from 'framer-motion';
import { MAX_ATTEMPTS } from '@/lib/constants';

interface AttemptIndicatorProps {
  attempts: number;
}

export default function AttemptIndicator({ attempts }: AttemptIndicatorProps) {
  return (
    <div className="flex gap-2 items-center">
      {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
        <motion.div
          key={i}
          animate={
            i < attempts
              ? { backgroundColor: '#C44536', scale: [1, 1.2, 1] }
              : { backgroundColor: '#1A1815', scale: 1 }
          }
          transition={{ duration: 0.3 }}
          className="w-5 h-5 border-2 border-ink"
        />
      ))}
    </div>
  );
}
