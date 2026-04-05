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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="space-y-4">
        {/* Terminal Header */}
        <div
          className="bg-white border-2 border-ink p-5 md:p-6"
          style={{ boxShadow: '8px 8px 0 #1A1815' }}
        >
          <div className="space-y-5">
            {/* Terminal title bar */}
            <div className="flex items-center justify-between border-b border-ink/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red border border-ink/20" />
                <div className="w-3 h-3 rounded-full bg-gold border border-ink/20" />
                <div className="w-3 h-3 rounded-full bg-green border border-ink/20" />
              </div>
              <span className="text-[10px] text-brown uppercase tracking-widest">
                verification_terminal v2.1
              </span>
            </div>

            {/* Instructions */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-ink flex items-center gap-2">
                <span style={{ animation: 'blink 1.2s step-end infinite' }}>▌</span>
                ENTER VERIFICATION CODE
              </h3>
              <p className="text-xs text-brown leading-relaxed">
                Read the research document carefully. Identify the <strong>convergence constant</strong> (numeric)
                and the <strong>system layer sequence</strong> (alphabetic), then combine them to form your code.
              </p>
            </div>

            {/* Input */}
            <div>
              <label className="text-[10px] text-brown uppercase tracking-widest mb-1 block">
                Code Input (5 characters expected)
              </label>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="TYPE YOUR CODE HERE"
                maxLength={10}
                className="w-full px-4 py-3 border-2 border-ink bg-bg text-ink font-bold uppercase tracking-widest focus:outline-none focus:border-gold text-base"
                style={{ fontFamily: "'Courier Prime', monospace" }}
              />
            </div>

            {/* Attempt Indicator */}
            <div className="flex items-center gap-3">
              <AttemptIndicator attempts={attempts} />
              <span className="text-[10px] text-brown uppercase tracking-wider">
                {MAX_ATTEMPTS - attempts} of {MAX_ATTEMPTS} attempts remaining
              </span>
            </div>

            {/* Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-3 border-2 border-red bg-red/5 text-sm font-bold text-red"
              >
                {message}
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <BrutalistButton
                onClick={handleSubmit}
                disabled={isSubmitting || attempts >= MAX_ATTEMPTS}
              >
                SUBMIT CODE
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

        {/* Warning Card — separate from terminal */}
        <div
          className="border-2 border-ink p-4 bg-white"
          style={{ boxShadow: '4px 4px 0 #C44536' }}
        >
          <h4 className="text-xs font-bold uppercase tracking-wider text-red mb-2 flex items-center gap-1">
            ⚠ Important Notice
          </h4>
          <div className="text-[11px] leading-relaxed text-brown space-y-1">
            <p>You have exactly <strong className="text-ink">3 attempts</strong> to enter the correct verification code.</p>
            <p>It is <strong className="text-ink">strongly recommended</strong> to submit only when you are confident in your answer.</p>
            <p>Exhausting all attempts will <strong className="text-ink">permanently lock your result</strong> and trigger automatic evaluation.</p>
            <p className="text-red font-bold pt-1">This action cannot be undone.</p>
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
