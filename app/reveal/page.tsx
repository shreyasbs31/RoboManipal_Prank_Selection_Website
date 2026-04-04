'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import GridBackground from '@/components/GridBackground';
import BrutalistCard from '@/components/BrutalistCard';
import LoadingSequence from '@/components/LoadingSequence';
import ConfettiEffect from '@/components/ConfettiEffect';

export default function RevealPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative py-12">
      <GridBackground />

      <div className="relative z-10 max-w-2xl w-full px-4">
        {isLoading ? (
          <BrutalistCard className="p-10">
            <LoadingSequence onComplete={handleLoadingComplete} />
          </BrutalistCard>
        ) : (
          <>
            <ConfettiEffect />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BrutalistCard className="p-10">
                <div className="space-y-8">
                  {/* Heading */}
                  <div className="space-y-2">
                    <motion.h1
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold"
                    >
                      RELAX. THIS WAS A PRANK 😂
                    </motion.h1>
                    <motion.h2
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg font-bold text-green"
                    >
                      YOU&apos;RE IN. WELCOME TO RESEARCH.
                    </motion.h2>
                  </div>

                  {/* Body */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-4 text-sm leading-relaxed"
                  >
                    <p>
                      We wanted to have a little fun before officially welcoming you.
                    </p>
                    <p>
                      If you tried solving it seriously,<br />
                      you&apos;re exactly the kind of person we want here.
                    </p>
                  </motion.div>

                  {/* Lists */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {/* List 1 */}
                    <div
                      className="border-2 border-ink p-4"
                      style={{ boxShadow: '4px 4px 0 #C5A059' }}
                    >
                      <h3 className="font-bold text-sm mb-3 uppercase">
                        What you just went through
                      </h3>
                      <ul className="space-y-1 text-sm text-brown">
                        <li>• Overthinking</li>
                        <li>• Self-doubt</li>
                        <li>• Mild panic</li>
                      </ul>
                    </div>

                    {/* List 2 */}
                    <div
                      className="border-2 border-ink p-4"
                      style={{ boxShadow: '4px 4px 0 #2D5A27' }}
                    >
                      <h3 className="font-bold text-sm mb-3 uppercase">
                        Welcome to research
                      </h3>
                      <ul className="space-y-1 text-sm text-brown">
                        <li>• Things rarely work the first time</li>
                        <li>• Debugging is a lifestyle</li>
                        <li>• Chaos is normal</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </BrutalistCard>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
