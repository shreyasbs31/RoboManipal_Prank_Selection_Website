'use client';

import GridBackground from '@/components/GridBackground';
import HonorCodePopup from '@/components/HonorCodePopup';
import PaperContent from '@/components/PaperContent';
import TerminalInput from '@/components/TerminalInput';
import { motion } from 'framer-motion';

export default function TaskPage() {
  return (
    <div className="min-h-screen relative">
      <GridBackground />
      <HonorCodePopup />

      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3"
        >
          <div>
            <h1 className="text-lg font-bold uppercase tracking-wider">
              VERIFICATION TASK
            </h1>
            <p className="text-xs text-red uppercase tracking-wider">
              Read the document below and extract the verification code.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-brown uppercase tracking-wider">
            <span className="border border-ink/20 px-2 py-1">
              STAGE: VERIFICATION
            </span>
            <span className="border border-ink/20 px-2 py-1">
              DOC: RM-2026-TEST
            </span>
          </div>
        </motion.div>

        <div className="h-px bg-ink/10 mb-6" />

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-12rem)]">
          {/* Left side - 60% */}
          <div className="lg:w-[60%] flex items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <PaperContent />
            </motion.div>
          </div>

          {/* Right side - 40% */}
          <div className="lg:w-[40%] flex items-start lg:sticky lg:top-8 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full"
            >
              <TerminalInput />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
