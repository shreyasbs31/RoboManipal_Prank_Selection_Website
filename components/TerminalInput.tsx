'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import BrutalistButton from './BrutalistButton';
import AttemptIndicator from './AttemptIndicator';
import ConfirmationModal from './ConfirmationModal';
import { ATTEMPT_MESSAGES, MAX_ATTEMPTS } from '@/lib/constants';

export default function TerminalInput() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toUpperCase().trim());
  };

  const handleSubmit = useCallback(() => {
    if (input === '' || isSubmitting) return;

    setIsSubmitting(true);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (newAttempts >= MAX_ATTEMPTS) {
      setTimeout(() => {
        router.push('/result');
      }, 500);
      return;
    }

    setMessage(ATTEMPT_MESSAGES[newAttempts] || '');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 500);
  }, [input, attempts, isSubmitting, router]);

  const handleGiveUp = () => {
    setShowModal(true);
  };

  const handleConfirmGiveUp = () => {
    setShowModal(false);
    router.push('/result');
  };

  return (
    <>
      <div
        className="bg-white border-2 border-ink p-6"
        style={{ boxShadow: '8px 8px 0 #1A1815' }}
      >
        <div className="space-y-6">
          {/* Header */}
          <h3 className="text-sm font-bold text-ink">
            {'>'} ENTER VERIFICATION CODE
          </h3>

          {/* Input */}
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="ENTER CODE"
            className="w-full px-4 py-3 border-2 border-ink bg-bg text-ink font-bold uppercase tracking-wider focus:outline-none focus:border-gold"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          />

          {/* Attempt Indicator */}
          <AttemptIndicator attempts={attempts} />

          {/* Warning Text */}
          <div className="text-xs leading-relaxed text-brown space-y-1">
            <p>You have 3 attempts.</p>
            <p>It is recommended to submit only if you are confident.</p>
            <p>Exhausting all attempts may lock your result permanently.</p>
          </div>

          {/* Message */}
          {message && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm font-bold text-red"
            >
              {message}
            </motion.p>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <BrutalistButton
              onClick={handleSubmit}
              disabled={isSubmitting || attempts >= MAX_ATTEMPTS}
            >
              SUBMIT
            </BrutalistButton>
            <BrutalistButton
              variant="secondary"
              onClick={handleGiveUp}
            >
              GIVE UP
            </BrutalistButton>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirmGiveUp}
      />
    </>
  );
}
