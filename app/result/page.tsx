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
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      <GridBackground />

      <div className="relative z-10 max-w-xl w-full">
        <AnimatePresence mode="wait">
          {phase === 1 ? (
            <motion.div
              key="phase1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <BrutalistCard className="p-10 md:p-14 text-center">
                <motion.h1
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="text-2xl md:text-4xl font-bold mb-6"
                >
                  YOU COULDN&apos;T FIND THAT?
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-brown text-sm"
                >
                  That was… not ideal.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="mt-6 text-xs text-brown"
                >
                  Processing evaluation...
                </motion.div>
              </BrutalistCard>
            </motion.div>
          ) : (
            <motion.div
              key="phase2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BrutalistCard className="p-10 md:p-12 relative overflow-hidden">
                {/* REJECTED watermark stamp */}
                <div
                  className="absolute top-1/2 left-1/2 pointer-events-none select-none"
                  style={{
                    transform: 'translate(-50%, -50%) rotate(-12deg)',
                    fontSize: '80px',
                    fontWeight: 'bold',
                    color: 'rgba(196, 69, 54, 0.08)',
                    letterSpacing: '8px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  REJECTED
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Status Header */}
                  <div className="flex items-center gap-2 text-xs text-brown uppercase tracking-widest">
                    <div className="w-2 h-2 bg-red rounded-full" />
                    Result Finalized
                  </div>

                  <h1 className="text-xl md:text-2xl font-bold">
                    APPLICATION STATUS: NOT SELECTED
                  </h1>

                  <div className="h-px bg-ink/10" />

                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Your performance did not meet the threshold required for admission.
                    </p>
                    <p className="text-xs text-brown">
                      You may reapply in future cycles if positions become available.
                    </p>
                  </div>

                  <div className="h-px bg-ink/10" />

                  {/* Evaluation Summary */}
                  <div className="border-2 border-ink p-4" style={{ boxShadow: '4px 4px 0 #C44536' }}>
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-3">
                      Evaluation Summary
                    </h3>
                    <div className="space-y-2 text-xs text-brown">
                      <div className="flex justify-between">
                        <span>Verification Task:</span>
                        <span className="font-bold text-red">FAILED</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Code Accuracy:</span>
                        <span className="font-bold text-red">0%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Overall Rating:</span>
                        <span className="font-bold text-red">BELOW THRESHOLD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Decision:</span>
                        <span className="font-bold text-red">FINAL — NOT SELECTED</span>
                      </div>
                    </div>
                  </div>

                  {/* Feedback prompt */}
                  <p className="text-xs text-brown">
                    View detailed feedback and what happened →
                  </p>

                  <BrutalistButton onClick={() => router.push('/reveal')}>
                    VIEW DETAILED FEEDBACK →
                  </BrutalistButton>

                  <p className="text-[10px] text-brown">
                    Ref: RM/EVAL/2025-FINAL · This decision is binding.
                  </p>
                </div>
              </BrutalistCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
