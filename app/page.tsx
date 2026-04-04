'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import GridBackground from '@/components/GridBackground';
import BrutalistCard from '@/components/BrutalistCard';
import BrutalistButton from '@/components/BrutalistButton';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <GridBackground />

      <BrutalistCard className="p-10 max-w-lg w-full relative z-10">
        {/* Top right session ID */}
        <div className="absolute top-4 right-4 text-xs text-brown">
          SESSION ID: RX-23A
        </div>

        <div className="space-y-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold tracking-tight"
          >
            RESEARCH SELECTION PORTAL
          </motion.h1>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-green rounded-full" />
            <span className="text-sm text-brown uppercase tracking-wider">
              STATUS: RESULT AVAILABLE
            </span>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <BrutalistButton onClick={() => router.push('/task')}>
              ACCESS RESULT
            </BrutalistButton>
          </motion.div>
        </div>
      </BrutalistCard>
    </div>
  );
}
