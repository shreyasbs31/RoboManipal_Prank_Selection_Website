'use client';

import { MAX_ATTEMPTS } from '@/lib/constants';

interface AttemptIndicatorProps {
  attempts: number;
}

export default function AttemptIndicator({ attempts }: AttemptIndicatorProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
        <div
          key={i}
          className="w-5 h-5 border-2 border-ink"
          style={{
            backgroundColor: i < attempts ? '#C44536' : '#1A1815',
          }}
        />
      ))}
    </div>
  );
}
