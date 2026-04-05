'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BrutalistButton from './BrutalistButton';

export default function HonorCodePopup() {
  const [isOpen, setIsOpen] = useState(true);

  // Close popup when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(26,24,21,0.9)' }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            className="bg-white border-4 border-ink p-8 md:p-10 max-w-2xl w-full"
            style={{ boxShadow: '12px 12px 0 #1A1815' }}
          >
            {/* Header with emoji */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-4xl">🤐</span>
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
                HONOR CODE AGREEMENT
              </h2>
            </motion.div>

            <div className="h-px bg-ink/10 mb-6" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="space-y-4 text-sm leading-relaxed mb-6"
            >
              <p className="text-brown">
                <strong>Here's the deal:</strong> Don't discuss the answers to this test with your teammates. Let them figure it out on their own.
              </p>

              <p className="text-brown">
                This isn't just about fairness, it's about integrity. Think through the problem yourself, work it out, and submit your answer.
              </p>

              <div className="border-l-4 border-gold bg-gold/5 p-4 text-xs md:text-sm">
                <p className="font-bold text-ink mb-2">⚠ Serious Talk (In a Fun Way):</p>
                <p className="text-brown">
                  If we find out you've been comparing notes before submission, there will be consequences. We're not joking about this one, but we're also keeping it light because you're all smart enough to know better.
                </p>
              </div>

              <p className="text-xs text-brown italic">
                Good luck. Trust yourself. And please, keep it to yourself. 🙏
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <BrutalistButton
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                I UNDERSTAND & AGREE
              </BrutalistButton>
            </motion.div>

            <motion.p
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center text-[10px] text-brown/60 uppercase tracking-widest mt-4"
            >
              (Or press ESC to dismiss)
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
