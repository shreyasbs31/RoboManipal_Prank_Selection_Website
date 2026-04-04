'use client';

import { motion, AnimatePresence } from 'framer-motion';
import BrutalistButton from './BrutalistButton';

interface ConfirmationModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({
  isOpen,
  onCancel,
  onConfirm,
}: ConfirmationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(26,24,21,0.6)' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white border-2 border-ink p-8 max-w-md"
            style={{ boxShadow: '8px 8px 0 #1A1815' }}
          >
            <p className="text-sm leading-relaxed mb-6">
              Are you sure you want to give up? This will finalize your evaluation.
            </p>

            <div className="flex gap-3">
              <BrutalistButton variant="secondary" onClick={onCancel}>
                Cancel
              </BrutalistButton>
              <BrutalistButton onClick={onConfirm}>
                Confirm Give Up
              </BrutalistButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
