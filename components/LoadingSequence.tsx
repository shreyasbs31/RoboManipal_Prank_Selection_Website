'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOADING_MESSAGES } from '@/lib/constants';

interface LoadingSequenceProps {
  onComplete: () => void;
}

export default function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    LOADING_MESSAGES.forEach(({ text, delay }) => {
      const t = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, text]);
      }, delay);
      timeouts.push(t);
    });

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 2400);
    timeouts.push(completeTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {visibleMessages.map((msg, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-bold text-ink"
          >
            {msg}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
