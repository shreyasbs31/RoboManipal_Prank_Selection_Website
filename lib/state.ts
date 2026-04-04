'use client';

import { useState } from 'react';

export function useAttempts() {
  const [attempts, setAttempts] = useState<number>(0);

  const incrementAttempts = () => {
    setAttempts((prev) => prev + 1);
  };

  const resetAttempts = () => {
    setAttempts(0);
  };

  return { attempts, incrementAttempts, resetAttempts };
}
