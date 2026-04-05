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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="min-h-screen relative py-8 md:py-12"
      style={{
        backgroundColor: isLoading ? '#F7F4ED' : '#0D1117',
        transition: 'background-color 0.8s ease-in-out',
      }}
    >
      {isLoading && <GridBackground />}

      {/* Dark mode subtle grid when revealed */}
      {!isLoading && (
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      )}

      <div className="relative z-10 max-w-3xl w-full mx-auto px-4">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[80vh]">
            <BrutalistCard className="p-10 w-full max-w-lg">
              <LoadingSequence onComplete={handleLoadingComplete} />
            </BrutalistCard>
          </div>
        ) : (
          <>
            <ConfettiEffect />
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* ===== MAIN REVEAL CARD ===== */}
              <motion.div variants={fadeUp}>
                <div
                  className="border-2 p-8 md:p-12 relative overflow-hidden"
                  style={{
                    backgroundColor: '#161B22',
                    borderColor: '#2D5A27',
                    boxShadow: '8px 8px 0 #2D5A27',
                  }}
                >
                  {/* Celebration watermark */}
                  <div
                    className="absolute top-1/2 left-1/2 pointer-events-none select-none"
                    style={{
                      transform: 'translate(-50%, -50%) rotate(-20deg)',
                      fontSize: '100px',
                      fontWeight: 'bold',
                      color: 'rgba(45, 90, 39, 0.06)',
                      letterSpacing: '15px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    WELCOME
                  </div>

                  <div className="relative z-10 space-y-6">
                    {/* Top badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring', damping: 10 }}
                      className="inline-block"
                    >
                      <span
                        className="text-[10px] px-3 py-1 uppercase tracking-widest font-bold"
                        style={{
                          backgroundColor: '#2D5A27',
                          color: '#ffffff',
                          border: '2px solid #3d7a37',
                        }}
                      >
                        ✓ Status Updated
                      </span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, type: 'spring', damping: 12 }}
                      className="text-3xl md:text-4xl font-bold leading-tight"
                      style={{ color: '#F7F4ED' }}
                    >
                      RELAX. THIS WAS A PRANK 😂
                    </motion.h1>

                    {/* Sub heading */}
                    <motion.h2
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-xl md:text-2xl font-bold"
                      style={{ color: '#4ADE80' }}
                    >
                      YOU&apos;RE IN. WELCOME TO THE RESEARCH TEAM. 🎉
                    </motion.h2>

                    <div className="h-px" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />

                    {/* Body */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="space-y-3 text-sm"
                      style={{ color: '#8B949E' }}
                    >
                      <p>
                        Everything you just went through was completely designed to test your character.
                      </p>
                      <p style={{ color: '#4ADE80', fontWeight: 'bold' }}>
                        The fact that you tried, analyzed, and cared? That&apos;s exactly who we want.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* ===== THE TRUTH CARD ===== */}
              <motion.div variants={fadeUp}>
                <div
                  className="border-2 p-6 md:p-8"
                  style={{
                    backgroundColor: '#161B22',
                    borderColor: '#C5A059',
                    boxShadow: '6px 6px 0 #C5A059',
                  }}
                >
                  <h3
                    className="font-bold text-sm uppercase tracking-wider mb-6"
                    style={{ color: '#C5A059' }}
                  >
                    🎭 The Setup
                  </h3>
                  <div className="space-y-3 text-sm" style={{ color: '#8B949E' }}>
                    <div className="flex items-start gap-3">
                      <span style={{ color: '#C5A059', fontSize: '20px' }}>📄</span>
                      <p>Rigged task with <strong>no correct answer</strong> — tested your resilience</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span style={{ color: '#C5A059', fontSize: '20px' }}>🚫</span>
                      <p>Rejection page — to see if you&apos;d keep going</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span style={{ color: '#4ADE80', fontSize: '20px' }}>✓</span>
                      <p>You were <strong>already selected</strong> before you started</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ===== TWO-COLUMN LISTS ===== */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* List 1 — What you went through */}
                <div
                  className="border-2 p-5 md:p-6"
                  style={{
                    backgroundColor: '#161B22',
                    borderColor: '#C44536',
                    boxShadow: '4px 4px 0 #C44536',
                  }}
                >
                  <h3
                    className="font-bold text-sm mb-4 uppercase tracking-wider"
                    style={{ color: '#C44536' }}
                  >
                    😰 You just experienced
                  </h3>
                  <div className="space-y-2 text-sm" style={{ color: '#8B949E' }}>
                    <div>✗ Overthinking every detail</div>
                    <div>✗ The panic of rejection</div>
                    <div>✗ Self-doubt</div>
                    <div style={{ color: '#4ADE80', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      ✓ But you kept trying
                    </div>
                  </div>
                </div>

                {/* List 2 — Welcome to research */}
                <div
                  className="border-2 p-5 md:p-6"
                  style={{
                    backgroundColor: '#161B22',
                    borderColor: '#2D5A27',
                    boxShadow: '4px 4px 0 #2D5A27',
                  }}
                >
                  <h3
                    className="font-bold text-sm mb-4 uppercase tracking-wider"
                    style={{ color: '#4ADE80' }}
                  >
                    🔬 Welcome to research
                  </h3>
                  <div className="space-y-2 text-sm" style={{ color: '#8B949E' }}>
                    <div>✓ Things will break (a lot)</div>
                    <div>✓ Questions matter more than answers</div>
                    <div>✓ Failure is just learning</div>
                    <div style={{ color: '#F7F4ED', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <strong>You belong here</strong>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ===== FINAL MESSAGE ===== */}
              <motion.div variants={fadeUp}>
                <div
                  className="border-2 p-6 md:p-10 text-center"
                  style={{
                    backgroundColor: '#161B22',
                    borderColor: 'rgba(255,255,255,0.1)',
                    boxShadow: '6px 6px 0 rgba(255,255,255,0.05)',
                  }}
                >
                  <motion.div
                    style={{ animation: 'float 3s ease-in-out infinite' }}
                    className="text-5xl mb-4"
                  >
                    🚀
                  </motion.div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: '#F7F4ED' }}
                  >
                    LET&apos;S BUILD SOMETHING AMAZING.
                  </h3>
                  <p className="text-sm" style={{ color: '#8B949E' }}>
                    See you at our first meeting. Bring curiosity — that&apos;s all you need.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
