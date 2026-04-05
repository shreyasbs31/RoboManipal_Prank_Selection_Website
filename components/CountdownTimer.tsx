'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target: Monday, April 6, 2026 at 6:00 PM IST
      const targetDate = new Date('2026-04-06T18:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ label, value }: { label: string; value: number }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-bold text-2xl md:text-3xl mb-2 rounded-lg"
        style={{
          backgroundColor: '#2D5A27',
          border: '2px solid #4ADE80',
          color: '#4ADE80',
        }}
      >
        {String(value).padStart(2, '0')}
      </div>
      <p
        className="text-xs md:text-sm uppercase tracking-widest font-bold"
        style={{ color: '#4ADE80' }}
      >
        {label}
      </p>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-4xl md:text-5xl"
        >
          ⏱️
        </motion.div>
        <h2
          className="text-2xl md:text-3xl font-bold uppercase tracking-wider"
          style={{ color: '#F7F4ED' }}
        >
          Workshop Meeting Countdown
        </h2>
      </div>

      {/* Countdown boxes */}
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <CountdownBox label="Days" value={timeLeft.days} />
        <CountdownBox label="Hours" value={timeLeft.hours} />
        <CountdownBox label="Minutes" value={timeLeft.minutes} />
        <CountdownBox label="Seconds" value={timeLeft.seconds} />
      </div>

      {/* Date and time */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center space-y-3 border-t-2 pt-6"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <p
          className="text-sm md:text-base font-bold"
          style={{ color: '#4ADE80' }}
        >
          📅 Monday, 6th April, 2026 at 6:00 PM
        </p>
        <p
          className="text-xs md:text-sm italic"
          style={{ color: '#8B949E' }}
        >
          Don&apos;t be late for your first team meeting!
        </p>
      </motion.div>

      {/* Important details */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4 border-t-2 pt-6"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <h3
          className="text-sm md:text-base font-bold uppercase tracking-wider"
          style={{ color: '#C5A059' }}
        >
          📍 Important Details
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span style={{ color: '#4ADE80', fontSize: '18px' }}>📍</span>
            <div>
              <p className="font-bold" style={{ color: '#F7F4ED' }}>
                Location:
              </p>
              <p style={{ color: '#8B949E' }}>
                15 Rounds if you don&apos;t know
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span style={{ color: '#4ADE80', fontSize: '18px' }}>⏰</span>
            <div>
              <p className="font-bold" style={{ color: '#F7F4ED' }}>
                Duration:
              </p>
              <p style={{ color: '#8B949E' }}>
                Now your entire life (:D)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span style={{ color: '#4ADE80', fontSize: '18px' }}>☎️</span>
            <div>
              <p className="font-bold" style={{ color: '#F7F4ED' }}>
                Contact:
              </p>
              <p style={{ color: '#8B949E' }}>
                Research Head (+91 73031 77805)
              </p>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-center pt-3"
        >
          <p
            className="text-sm md:text-base font-bold uppercase tracking-wider"
            style={{ color: '#C44536' }}
          >
            ⚡ Don&apos;t be late!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
