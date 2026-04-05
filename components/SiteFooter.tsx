'use client';

import { motion } from 'framer-motion';

export default function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <span className="text-[10px] text-brown/50 uppercase tracking-widest">
          Made by Shreyas
        </span>

        <div className="flex items-center gap-2 pointer-events-auto">
          <span className="text-[11px] text-brown uppercase tracking-widest">
            For queries:
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-ink">
            Contact your seniors on DM
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
