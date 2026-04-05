'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface CheekyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  attempt: 1 | 2;
}

export default function CheekyPopup({
  isOpen,
  onClose,
  attempt,
}: CheekyPopupProps) {
  const messages = {
    1: {
      main: "You could just GIVE UP.",
      sub: "It's okay. Really.",
      emoji: "😌",
      color: "gold",
    },
    2: {
      main: "PLEASE just press the GIVE UP button",
      sub: "Do us both a favor.",
      emoji: "🙏",
      color: "red",
    },
  };

  const msg = messages[attempt];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(26,24,21,0.85)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 30 }}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            className={`border-4 border-ink p-12 max-w-2xl w-full text-center ${
              attempt === 1 ? 'bg-gold/10' : 'bg-red/10'
            }`}
            style={{
              boxShadow: attempt === 1 ? '12px 12px 0 #C5A059' : '12px 12px 0 #C44536',
              animation: attempt === 2 ? 'pulse-heavy 0.6s ease-in-out infinite' : undefined,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Emoji */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              className="text-7xl mb-6"
            >
              {msg.emoji}
            </motion.div>

            {/* Main Message */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-3"
              style={{ color: attempt === 1 ? '#C5A059' : '#C44536' }}
            >
              {msg.main}
            </motion.h2>

            {/* Sub Message */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brown mb-8"
            >
              {msg.sub}
            </motion.p>

            {/* Click to close */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-sm text-brown/70 uppercase tracking-wider"
            >
              Click anywhere to dismiss
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
