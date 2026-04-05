'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiEffect() {
  useEffect(() => {
    // Initial burst from center
    confetti({
      particleCount: 100,
      spread: 360,
      origin: { x: 0.5, y: 0.4 },
      colors: ['#2D5A27', '#4ADE80', '#C5A059', '#F7F4ED', '#ffffff'],
    });

    // Left side burst
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ['#2D5A27', '#4ADE80', '#C5A059'],
      });
    }, 300);

    // Right side burst
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ['#2D5A27', '#4ADE80', '#C5A059'],
      });
    }, 500);

    // Delayed extra sparkle
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 360,
        origin: { x: 0.5, y: 0.3 },
        gravity: 0.8,
        scalar: 1.2,
        colors: ['#C5A059', '#F7F4ED', '#4ADE80'],
      });
    }, 900);
  }, []);

  return null;
}
