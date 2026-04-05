'use client';

import ConfettiEffect from '@/components/ConfettiEffect';
import CountdownTimer from '@/components/CountdownTimer';
import LoadingSequence from '@/components/LoadingSequence';
import GridBackground from '@/components/GridBackground';
import BrutalistButton from '@/components/BrutalistButton';
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
              {/* HERO - The Reveal */}
              <PremiumCard delay={0} borderColor="#4ADE80" accentColor="#4ADE80">
                <div className="space-y-6 relative z-10">
                  <div className="space-y-3">
                    <h1 className="text-5xl md:text-6xl font-black leading-tight" style={{ color: '#4ADE80' }}>
                      RELAX.
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#F7F4ED' }}>
                      THIS WAS A PRANK.
                    </h2>
                  </div>

                  <div style={{ height: '1px', background: 'linear-gradient(90deg, #4ADE80, transparent)' }} />

                  <div className="space-y-4">
                    <p className="text-lg font-bold" style={{ color: '#F7F4ED' }}>
                      Yeah… we saw that.
                    </p>
                    <p className="text-lg font-bold" style={{ color: '#4ADE80' }}>
                      But you're in.
                    </p>
                  </div>
                </div>
              </PremiumCard>

              {/* TENSION BREAK */}
              <PremiumCard delay={0.08} borderColor="#C44536" accentColor="#C44536">
                <div className="space-y-5 relative z-10">
                  <h2 className="text-2xl font-black uppercase tracking-wider" style={{ color: '#C44536' }}>
                    That Verification Test?
                  </h2>

                  <div className="space-y-3 text-base">
                    <p style={{ color: '#F7F4ED' }}>
                      <span style={{ color: '#C44536', fontWeight: 'bold' }}>Completely rigged.</span>
                    </p>
                    <p style={{ color: '#F7F4ED' }}>
                      There was no correct answer.
                    </p>
                  </div>

                  <div style={{ height: '1px', backgroundColor: 'rgba(196, 69, 54, 0.3)' }} />

                  <div className="space-y-3 text-base">
                    <p style={{ color: '#A8BCC1' }}>
                      We weren't testing your answers.
                    </p>
                    <p style={{ color: '#A8BCC1' }} className="font-semibold">
                      We were watching how you deal with not having one.
                    </p>
                  </div>
                </div>
              </PremiumCard>

              {/* EMOTIONAL PAYOFF */}
              <PremiumCard delay={0.16} borderColor="#C5A059" accentColor="#C5A059">
                <div className="space-y-6 relative z-10">
                  <p className="text-lg" style={{ color: '#F7F4ED' }}>
                    Everything you just went through was completely designed to test your character.
                  </p>

                  <div
                    className="border-l-4 p-6"
                    style={{
                      borderColor: '#4ADE80',
                      backgroundColor: 'rgba(74, 222, 128, 0.1)',
                    }}
                  >
                    <p className="text-base leading-relaxed font-bold" style={{ color: '#4ADE80' }}>
                      The fact that you tried, analyzed, and cared? That's exactly who we want.
                    </p>
                  </div>
                </div>
              </PremiumCard>

              {/* WHAT YOU EXPERIENCED */}
              <PremiumCard delay={0.24} borderColor="#C44536" accentColor="#C44536">
                <div className="space-y-6 relative z-10">
                  <h2 className="text-2xl font-black uppercase tracking-wider" style={{ color: '#C44536' }}>
                    You Just Experienced
                  </h2>

                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(196, 69, 54, 0.1)' }}>
                      <div className="text-lg font-bold" style={{ color: '#C44536' }}>✗</div>
                      <p style={{ color: '#F7F4ED' }}>Overthinking every detail</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(196, 69, 54, 0.1)' }}>
                      <div className="text-lg font-bold" style={{ color: '#C44536' }}>✗</div>
                      <p style={{ color: '#F7F4ED' }}>The panic of rejection</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(196, 69, 54, 0.1)' }}>
                      <div className="text-lg font-bold" style={{ color: '#C44536' }}>✗</div>
                      <p style={{ color: '#F7F4ED' }}>Self-doubt</p>
                    </div>
                  </div>

                  <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

                  <div className="flex items-start gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)' }}>
                    <div className="text-lg font-bold" style={{ color: '#4ADE80' }}>✓</div>
                    <p style={{ color: '#F7F4ED' }}>But you kept trying</p>
                  </div>
                </div>
              </PremiumCard>

              {/* WHY YOU PASSED */}
              <PremiumCard delay={0.32} borderColor="#4ADE80" accentColor="#4ADE80">
                <div className="space-y-6 relative z-10">
                  <h2 className="text-2xl font-black uppercase tracking-wider" style={{ color: '#4ADE80' }}>
                    Why You Passed
                  </h2>

                  <div className="border-2 p-6" style={{ borderColor: '#4ADE80', backgroundColor: 'rgba(74, 222, 128, 0.05)' }}>
                    <p className="text-lg font-bold" style={{ color: '#F7F4ED' }}>
                      You passed. You're in the Research Subsystem.
                    </p>
                  </div>

                  <div className="space-y-3 text-base">
                    <p style={{ color: '#A8BCC1' }}>
                      We don't pick people who always get things right.
                    </p>
                    <p style={{ color: '#A8BCC1' }}>
                      We pick people who don't shut down when things don't make sense.
                    </p>
                    <p style={{ color: '#A8BCC1' }}>
                      People who stay, think, and push anyway.
                    </p>
                  </div>
                </div>
              </PremiumCard>

              {/* BEHAVIORAL ANALYSIS REPORT */}
              <PremiumCard delay={0.40} borderColor="#C5A059" accentColor="#C5A059">
                <div className="space-y-5 relative z-10">
                  <h2 className="text-2xl font-black uppercase tracking-wider" style={{ color: '#C5A059' }}>
                    Behavioral Analysis Report
                  </h2>

                  <div style={{ height: '1px', background: 'linear-gradient(90deg, #C5A059, transparent)' }} />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2" style={{ color: '#A8BCC1' }}>
                      <span>Time spent staring at screen:</span>
                      <span style={{ color: '#C44536', fontWeight: 'bold' }}>Concerning</span>
                    </div>
                    <div className="flex justify-between p-2" style={{ color: '#A8BCC1' }}>
                      <span>Number of re-reads:</span>
                      <span style={{ color: '#C44536', fontWeight: 'bold' }}>We counted</span>
                    </div>
                    <div className="flex justify-between p-2" style={{ color: '#A8BCC1' }}>
                      <span>Attempts to reverse-engineer:</span>
                      <span style={{ color: '#4ADE80', fontWeight: 'bold' }}>Respectable</span>
                    </div>
                    <div className="flex justify-between p-2" style={{ color: '#A8BCC1' }}>
                      <span>Emotional damage:</span>
                      <span style={{ color: '#C44536', fontWeight: 'bold' }}>Non-zero</span>
                    </div>
                    <div className="flex justify-between p-2" style={{ color: '#A8BCC1' }}>
                      <span>Confidence before submit:</span>
                      <span style={{ color: '#C44536', fontWeight: 'bold' }}>Unstable</span>
                    </div>
                    <div className="flex justify-between p-2" style={{ color: '#A8BCC1' }}>
                      <span>Thought "this is a trick":</span>
                      <span style={{ color: '#4ADE80', fontWeight: 'bold' }}>Correct, still suffered</span>
                    </div>
                  </div>
                </div>
              </PremiumCard>

              {/* PERSONALITY CLASSIFICATION */}
              <PremiumCard delay={0.48} borderColor="#4ADE80" accentColor="#4ADE80">
                <div className="space-y-5 relative z-10">
                  <h2 className="text-2xl font-black uppercase tracking-wider" style={{ color: '#4ADE80' }}>
                    Personality Classification
                  </h2>

                  <p style={{ color: '#A8BCC1' }}>
                    You have been classified as:
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(74, 222, 128, 0.06)' }}>
                      <span style={{ color: '#A8BCC1' }}>☐</span>
                      <span style={{ color: '#A8BCC1' }}>Calm under pressure</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(74, 222, 128, 0.06)' }}>
                      <span style={{ color: '#A8BCC1' }}>☐</span>
                      <span style={{ color: '#A8BCC1' }}>Mildly confused</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(74, 222, 128, 0.06)' }}>
                      <span style={{ color: '#A8BCC1' }}>☐</span>
                      <span style={{ color: '#A8BCC1' }}>Overthinking</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded" style={{ backgroundColor: 'rgba(74, 222, 128, 0.06)' }}>
                      <span style={{ color: '#A8BCC1' }}>☐</span>
                      <span style={{ color: '#A8BCC1' }}>Questioning life decisions</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded border-2" style={{ borderColor: '#4ADE80', backgroundColor: 'rgba(74, 222, 128, 0.15)' }}>
                      <span style={{ color: '#4ADE80' }}>☑</span>
                      <span style={{ color: '#4ADE80', fontWeight: 'bold' }}>Exactly what we were looking for</span>
                    </div>
                  </div>
                </div>
              </PremiumCard>

              {/* Welcome to Research */}
              <PremiumCard delay={0.56} borderColor="#4ADE80" accentColor="#2D5A27">
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
              <PremiumCard delay={0.64} borderColor="#C5A059" accentColor="#C5A059">
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
              <PremiumCard delay={0.72} borderColor="#C44536" accentColor="#C44536">
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
              <PremiumCard delay={0.80} borderColor="#4ADE80" accentColor="#C5A059">
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

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.88, duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                <BrutalistButton
                  onClick={() => {
                    // Action can be added here (e.g., navigate to next page)
                    console.log('Entering Research System');
                  }}
                  className="text-lg py-4"
                  style={{
                    backgroundColor: '#4ADE80',
                    color: '#0D1117',
                    fontWeight: 'bold',
                    borderColor: '#4ADE80',
                  }}
                >
                  ENTER RESEARCH SYSTEM →
                </BrutalistButton>
                <p className="text-center text-sm" style={{ color: '#A8BCC1' }}>
                  No more emotional damage. Probably.
                </p>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.96, duration: 0.5 }}
                className="text-center py-8"
              >
                <p className="text-xs tracking-widest font-bold" style={{ color: '#A8BCC1' }}>
                  DESIGNED TO STRESS YOU. BUILT TO SELECT YOU.
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
