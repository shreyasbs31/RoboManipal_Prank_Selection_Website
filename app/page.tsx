'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import GridBackground from '@/components/GridBackground';
import BrutalistCard from '@/components/BrutalistCard';
import BrutalistButton from '@/components/BrutalistButton';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      <GridBackground />

      <BrutalistCard className="p-10 md:p-14 max-w-2xl w-full relative z-10">
        {/* Top right session + timestamp */}
        <div className="absolute top-4 right-4 text-right text-xs text-brown space-y-1">
          <div>SESSION ID: RX-23A</div>
          <div>REF: RM/RES/2025-Q1</div>
        </div>

        {/* Top left — Classification mark */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] px-2 py-1 border border-brown text-brown uppercase tracking-widest">
            Confidential
          </span>
        </div>

        <div className="space-y-8 mt-6">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
              ROBOMANIPAL RESEARCH SUBSYSTEM TASKPHASE RESULTS
            </h1>
            <div className="w-16 h-1 bg-gold mt-3" />
          </motion.div>

          {/* Description Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm leading-relaxed text-brown space-y-3"
          >
            <p>
              We have thoroughly reviewed your Taskphase performance, including Phase 1, Phase 2, and your final evaluations. Complete a brief verification task to proceed and access your results.
            </p>
          </motion.div>

          {/* Status Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-2 border-ink p-4 space-y-3"
            style={{ boxShadow: '4px 4px 0 #C5A059' }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 bg-green rounded-full"
                style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
              />
              <span className="text-sm uppercase tracking-wider font-bold">
                STATUS: RESULT AVAILABLE
              </span>
            </div>
            <div className="text-xs text-brown space-y-1">
              <div className="flex justify-between">
                <span>Evaluation Stage:</span>
                <span className="font-bold text-ink">FINAL</span>
              </div>
              <div className="flex justify-between">
                <span>Verification Required:</span>
                <span className="font-bold text-ink">YES</span>
              </div>
              <div className="flex justify-between">
                <span>Attempts Permitted:</span>
                <span className="font-bold text-ink">3</span>
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[11px] text-brown leading-relaxed"
          >
            ⚠ This portal is restricted to shortlisted RoboManipal Taskphase candidates. By proceeding, you consent to your responses being recorded, analysed, and used for final evaluation. This is a monitored environment, so no pressure, just a few systems (and a couple of RoboManipal seniors) quietly assessing your brilliance.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <BrutalistButton onClick={() => router.push('/task')}>
              PROCEED TO VERIFICATION →
            </BrutalistButton>
          </motion.div>
        </div>
      </BrutalistCard>
    </div>
  );
}
