'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOADING_MESSAGES, REVEAL_DELAY } from '@/lib/constants';

interface LoadingSequenceProps {
  onComplete: () => void;
}

export default function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);

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
    }, REVEAL_DELAY);
    timeouts.push(completeTimeout);

    // Blinking cursor interval
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  return (
    <div className="space-y-3">
      {/* Terminal header */}
      <div className="flex items-center gap-2 pb-3 border-b border-ink/10 mb-4">
        <div className="w-3 h-3 rounded-full bg-red border border-ink/20" />
        <div className="w-3 h-3 rounded-full bg-gold border border-ink/20" />
        <div className="w-3 h-3 rounded-full bg-green border border-ink/20" />
        <span className="ml-auto text-[10px] text-brown uppercase tracking-widest">
          feedback_client
        </span>
      </div>

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

      {/* Blinking cursor */}
      <p className="text-sm font-bold text-ink">
        <span style={{ opacity: showCursor ? 1 : 0 }}>▌</span>
      </p>
    </div>
  );
}
