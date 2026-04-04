'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import GridBackground from '@/components/GridBackground';
import BrutalistCard from '@/components/BrutalistCard';
import BrutalistButton from '@/components/BrutalistButton';

export default function ResultPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<1 | 2>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase(2);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <GridBackground />

      <div className="relative z-10 max-w-xl w-full px-4">
        <AnimatePresence mode="wait">
          {phase === 1 ? (
            <motion.div
              key="phase1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BrutalistCard className="p-10 text-center">
                <motion.h1
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold mb-4"
                >
                  YOU COULDN&apos;T FIND THAT?
                </motion.h1>
                <p className="text-brown text-sm">
                  That was… not ideal.
                </p>
              </BrutalistCard>
            </motion.div>
          ) : (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BrutalistCard className="p-10">
                <div className="space-y-6">
                  <h1 className="text-xl font-bold">
                    APPLICATION STATUS: NOT SELECTED
                  </h1>

                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>In all seriousness,</p>
                    <p>
                      we regret to inform you that you have not been selected for the Research Team.
                    </p>
                    <p>
                      We hope you found the task engaging and meaningful.
                    </p>
                  </div>

                  <BrutalistButton onClick={() => router.push('/reveal')}>
                    GET FEEDBACK
                  </BrutalistButton>
                </div>
              </BrutalistCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
