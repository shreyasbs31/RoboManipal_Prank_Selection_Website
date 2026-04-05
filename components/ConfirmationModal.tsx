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
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(26,24,21,0.7)' }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white border-2 border-ink p-8 max-w-md w-full"
            style={{ boxShadow: '8px 8px 0 #C44536' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red text-lg">⚠</span>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Confirm Withdrawal
              </h3>
            </div>

            <p className="text-sm leading-relaxed mb-2">
              Are you sure you want to give up?
            </p>

            <p className="text-xs text-brown leading-relaxed mb-6">
              This will finalize your evaluation immediately and your result will be
              processed as-is. You will not be able to return to the verification task.
            </p>

            <div className="flex gap-3">
              <BrutalistButton variant="secondary" onClick={onCancel}>
                Go Back
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
