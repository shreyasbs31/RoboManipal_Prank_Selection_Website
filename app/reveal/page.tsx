'use client';

import ConfettiEffect from '@/components/ConfettiEffect';
import CountdownTimer from '@/components/CountdownTimer';
import LoadingSequence from '@/components/LoadingSequence';
import GridBackground from '@/components/GridBackground';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';

export default function RevealPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const PremiumCard = ({
    children,
    delay = 0,
    borderColor = '#C5A059',
    accentColor = '#C5A059',
  }: {
    children: React.ReactNode;
    delay?: number;
    borderColor?: string;
    accentColor?: string;
  }) => {
    const shadowColor1 = accentColor + '30';
    const shadowColor2 = accentColor + '50';
    return (
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay, duration: 0.5, ease: 'easeOut' }}
        className="border-2 p-8 md:p-10 relative overflow-hidden"
        style={{
          borderColor: borderColor,
          backgroundColor: 'rgba(13, 17, 23, 0.8)',
          boxShadow: `0 0 24px ${shadowColor1}, 6px 6px 0 ${shadowColor2}`,
          backdropFilter: 'blur(8px)',
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{
            background: `linear-gradient(90deg, ${accentColor}, transparent)`,
          }}
        />
        {children}
      </motion.div>
    );
  };

  return (
    <div
      className="min-h-screen relative py-12 md:py-16 transition-colors duration-[1.2s]"
      style={{
        background: isLoading
          ? '#F7F4ED'
          : `linear-gradient(135deg, #0D1117 0%, #1a2a2e 25%, #0f1419 50%, #1a1515 75%, #0D1117 100%)`,
      }}
    >
      {!isLoading && (
        <>
          {/* Animated gradient orbs - only on dark theme */}
          <div
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(197, 160, 89, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(74, 222, 128, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(196, 69, 54, 0.04) 0%, transparent 50%)
              `,
            }}
          />

          {/* Grid overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(197, 160, 89, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(197, 160, 89, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 pb-20">
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center min-h-[80vh]"
          >
            <GridBackground />
            <div
              className="p-10 w-full max-w-lg border-2 border-ink relative z-10"
              style={{
                backgroundColor: '#F7F4ED',
                boxShadow: '8px 8px 0 #1A1815',
              }}
            >
              <LoadingSequence onComplete={handleLoadingComplete} />
            </div>
          </motion.div>
        ) : (
          <>
            <ConfettiEffect />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, staggerChildren: 0.12, delayChildren: 0.1 }}
              className="space-y-8"
            >
              {/* WELCOME - Main Reveal */}
              <PremiumCard delay={0} borderColor="#C5A059" accentColor="#C5A059">
                <div className="space-y-6 relative z-10">
                  <div
                    className="absolute top-1/2 left-1/2 pointer-events-none select-none"
                    style={{
                      transform: 'translate(-50%, -50%) rotate(-20deg)',
                      fontSize: '80px',
                      fontWeight: 'bold',
                      color: 'rgba(197, 160, 89, 0.04)',
                      letterSpacing: '10px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    WELCOME
                  </div>

                  <div className="relative z-20 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full" style={{ backgroundColor: 'rgba(197, 160, 89, 0.2)', border: '2px solid #C5A059' }} />
                    <div className="flex-1">
                      <h1 className="text-4xl md:text-5xl font-black leading-tight mb-3" style={{ color: '#C5A059' }}>
                        RELAX. THIS WAS A PRANK 😂
                      </h1>
                      <p className="text-sm font-semibold" style={{ color: '#4ADE80' }}>
                        But you're actually in.
                      </p>
                    </div>
                  </div>

                  <div style={{ height: '2px', background: 'linear-gradient(90deg, #C5A059, transparent)' }} />

                  <p className="text-base leading-relaxed" style={{ color: '#F7F4ED' }}>
                    Everything you just went through was designed to reveal who you are under pressure. Your character. Your response to uncertainty.
                  </p>

                  <p className="text-lg font-bold leading-relaxed" style={{ color: '#4ADE80' }}>
                    You passed. You're in the Research Subsystem.
                  </p>

                  <div
                    className="border-l-4 p-6"
                    style={{
                      borderColor: '#C44536',
                      backgroundColor: 'rgba(196, 69, 54, 0.08)',
                    }}
                  >
                    <p className="text-base leading-relaxed font-medium" style={{ color: '#F7F4ED' }}>
                      Your resilience, analytical thinking, and genuine curiosity—that's the exact profile we're building the team with. Welcome to RoboManipal Research.
                    </p>
                  </div>
                </div>
              </PremiumCard>

              {/* Research Mindset */}
              <PremiumCard delay={0.1} borderColor="#4ADE80" accentColor="#2D5A27">
                <div className="space-y-5 relative z-10">
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-wider" style={{ color: '#4ADE80' }}>
                      Welcome to Research
                    </h2>
                    <p className="text-xs mt-2" style={{ color: '#A8BCC1' }}>
                      Where innovation meets rigor
                    </p>
                  </div>

                  <div style={{ height: '1px', backgroundColor: 'rgba(74, 222, 128, 0.2)' }} />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(74, 222, 128, 0.06)' }}>
                      <div className="text-lg font-bold mt-0.5" style={{ color: '#4ADE80' }}>✓</div>
                      <div>
                        <p style={{ color: '#F7F4ED', fontWeight: '600' }}>Complexity is where growth happens</p>
                        <p className="text-xs mt-1" style={{ color: '#A8BCC1' }}>When systems break, we learn what really matters</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(74, 222, 128, 0.06)' }}>
                      <div className="text-lg font-bold mt-0.5" style={{ color: '#4ADE80' }}>✓</div>
                      <div>
                        <p style={{ color: '#F7F4ED', fontWeight: '600' }}>Questions shape better solutions</p>
                        <p className="text-xs mt-1" style={{ color: '#A8BCC1' }}>The right question unlocks what answers can't</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(74, 222, 128, 0.06)' }}>
                      <div className="text-lg font-bold mt-0.5" style={{ color: '#4ADE80' }}>✓</div>
                      <div>
                        <p style={{ color: '#F7F4ED', fontWeight: '600' }}>Failure is information, nothing more</p>
                        <p className="text-xs mt-1" style={{ color: '#A8BCC1' }}>Use it to iterate. That's the research mindset.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-bold pt-2" style={{ color: '#4ADE80' }}>
                    You belong here.
                  </p>
                </div>
              </PremiumCard>

              {/* What to Bring */}
              <PremiumCard delay={0.2} borderColor="#C5A059" accentColor="#C5A059">
                <div className="space-y-5 relative z-10">
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-wider" style={{ color: '#C5A059' }}>
                      What to Bring
                    </h2>
                    <p className="text-xs mt-2" style={{ color: '#A8BCC1' }}>
                      Physical and otherwise
                    </p>
                  </div>

                  <div style={{ height: '1px', background: 'linear-gradient(90deg, #C5A059, transparent)' }} />

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3 p-3 rounded border-l-2" style={{ borderColor: '#C5A059', backgroundColor: 'rgba(197, 160, 89, 0.05)' }}>
                      <div style={{ color: '#C5A059', fontWeight: 'bold', marginTop: '2px' }}>●</div>
                      <div>
                        <p style={{ color: '#F7F4ED', fontWeight: '600' }}>Your laptop (fully charged)</p>
                        <p className="text-xs" style={{ color: '#A8BCC1' }}>We code with intention</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded border-l-2" style={{ borderColor: '#C5A059', backgroundColor: 'rgba(197, 160, 89, 0.05)' }}>
                      <div style={{ color: '#C5A059', fontWeight: 'bold', marginTop: '2px' }}>●</div>
                      <div>
                        <p style={{ color: '#F7F4ED', fontWeight: '600' }}>Running shoes</p>
                        <p className="text-xs" style={{ color: '#A8BCC1' }}>Research moves fast</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded border-l-2" style={{ borderColor: '#C44536', backgroundColor: 'rgba(196, 69, 54, 0.08)' }}>
                      <div style={{ color: '#C44536', fontWeight: 'bold', marginTop: '2px' }}>●</div>
                      <div>
                        <p style={{ color: '#C44536', fontWeight: '600' }}>Pink top & Green shorts (compulsory)</p>
                        <p className="text-xs" style={{ color: '#A8BCC1' }}>Team colors. Non-negotiable.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded border-l-2" style={{ borderColor: '#C5A059', backgroundColor: 'rgba(197, 160, 89, 0.05)' }}>
                      <div style={{ color: '#C5A059', fontWeight: 'bold', marginTop: '2px' }}>●</div>
                      <div>
                        <p style={{ color: '#F7F4ED', fontWeight: '600' }}>1L Coke if you're late</p>
                        <p className="text-xs" style={{ color: '#A8BCC1' }}>But please, be on time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded border-l-2" style={{ borderColor: '#C44536', backgroundColor: 'rgba(196, 69, 54, 0.08)' }}>
                      <div style={{ color: '#C44536', fontWeight: 'bold', marginTop: '2px' }}>●</div>
                      <div>
                        <p style={{ color: '#C44536', fontWeight: '600' }}>Your genuine ideas & energy</p>
                        <p className="text-xs" style={{ color: '#A8BCC1' }}>This is what we actually need</p>
                      </div>
                    </div>
                  </div>
                </div>
              </PremiumCard>

              {/* Countdown Timer */}
              <PremiumCard delay={0.3} borderColor="#C44536" accentColor="#C44536">
                <div className="space-y-6 relative z-10">
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-wider" style={{ color: '#C44536' }}>
                      Your Team Awaits
                    </h2>
                    <p className="text-xs mt-2" style={{ color: '#A8BCC1' }}>
                      First workshop meeting
                    </p>
                  </div>

                  <div style={{ height: '1px', background: 'linear-gradient(90deg, #C44536, transparent)' }} />

                  <CountdownTimer isDarkTheme={true} />
                </div>
              </PremiumCard>

              {/* Final Message */}
              <PremiumCard delay={0.4} borderColor="#4ADE80" accentColor="#C5A059">
                <div className="space-y-5 text-center relative z-10">
                  <p className="text-xl leading-relaxed font-black" style={{ color: '#4ADE80' }}>
                    This is just the beginning.
                  </p>

                  <p className="text-sm leading-relaxed" style={{ color: '#F7F4ED' }}>
                    Research is where things break, where questions lead to breakthroughs, and where your curiosity becomes your superpower. You're about to build something extraordinary with brilliant people who think like you do.
                  </p>

                  <div
                    className="border-2 p-4 rounded"
                    style={{
                      borderColor: '#C5A059',
                      backgroundColor: 'rgba(197, 160, 89, 0.1)',
                    }}
                  >
                    <p className="text-lg font-black" style={{ color: '#C5A059' }}>
                      Welcome to the team.
                    </p>
                  </div>

                  <p className="text-sm font-semibold" style={{ color: '#4ADE80' }}>
                    Let's build something extraordinary.
                  </p>
                </div>
              </PremiumCard>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
