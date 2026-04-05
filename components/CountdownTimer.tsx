'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  isDarkTheme?: boolean;
}

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function CountdownTimer({ isDarkTheme = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-04-06T18:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / DAY),
          hours: Math.floor((difference % DAY) / HOUR),
          minutes: Math.floor((difference % HOUR) / MINUTE),
          seconds: Math.floor((difference % MINUTE) / SECOND),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const TimeUnitBox = ({
    label,
    value,
  }: {
    label: string;
    value: number;
  }) => {
    const [ref, animate] = useAnimate();
    const prevValueRef = useRef(value);

    useEffect(() => {
      if (prevValueRef.current !== value) {
        (async () => {
          await animate(
            ref.current,
            { y: ['0%', '-100%'], opacity: [1, 0] },
            { duration: 0.4, ease: 'easeInOut' }
          );
          prevValueRef.current = value;
          await animate(
            ref.current,
            { y: ['100%', '0%'], opacity: [0, 1] },
            { duration: 0.4, ease: 'easeInOut' }
          );
        })();
      }
    }, [value, animate]);

    const displayValue = String(value).padStart(2, '0');

    return (
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-20 h-24 md:w-24 md:h-28 flex items-center justify-center overflow-hidden border-2 border-ink" style={{
          backgroundColor: isDarkTheme ? '#1A1815' : '#F7F4ED',
          transition: 'background-color 1.2s ease-in-out'
        }}>
          <motion.div
            ref={ref}
            className="absolute text-2xl md:text-4xl font-black"
            style={{
              color: isDarkTheme ? '#F7F4ED' : '#0D1117',
              transition: 'color 1.2s ease-in-out'
            }}
          >
            {displayValue}
          </motion.div>
        </div>
        <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-ink">
          {label}
        </p>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        <TimeUnitBox label="Days" value={timeLeft.days} />
        <TimeUnitBox label="Hours" value={timeLeft.hours} />
        <TimeUnitBox label="Minutes" value={timeLeft.minutes} />
        <TimeUnitBox label="Seconds" value={timeLeft.seconds} />
      </div>

      {/* Event Details */}
      <div
        className="space-y-4 border-2 border-ink p-6"
        style={{
          backgroundColor: isDarkTheme ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
          boxShadow: '4px 4px 0 #1A1815',
          transition: 'background-color 1.2s ease-in-out'
        }}
      >
        <div>
          <p className="text-xs uppercase tracking-wider font-bold mb-2" style={{ color: '#C5A059' }}>
            Event Details
          </p>
          <p className="text-xs" style={{
            color: isDarkTheme ? '#A8BCC1' : '#5A4A3A',
            transition: 'color 1.2s ease-in-out'
          }}>
            Monday, 6th April 2026 at 6:00 PM IST
          </p>
          <p className="text-xs" style={{
            color: isDarkTheme ? '#A8BCC1' : '#5A4A3A',
            transition: 'color 1.2s ease-in-out'
          }}>
            Location: If you don't know by now, 25 Rounds
          </p>
        </div>

        <div style={{ height: '1px', backgroundColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold mb-4" style={{
            color: isDarkTheme ? '#A8BCC1' : '#5A4A3A',
            transition: 'color 1.2s ease-in-out'
          }}>
            Contact Information
          </p>
          <motion.div
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-4xl md:text-5xl font-black mb-3" style={{ color: '#C44536' }}>
              +91 73031 77805
            </p>
          </motion.div>
          <p className="text-sm font-semibold leading-relaxed" style={{
            color: isDarkTheme ? '#F7F4ED' : '#0D1117',
            transition: 'color 1.2s ease-in-out'
          }}>
            Contact only the <span style={{ color: '#C44536', fontWeight: 'bold' }}>Research Head</span> for any queries. <span className="text-xs" style={{ color: '#A8BCC1' }}>(do not DM your seniors — just kidding, you should actually reach out to them)</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
