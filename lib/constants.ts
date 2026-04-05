export const COLORS = {
  bg: '#F7F4ED',
  ink: '#1A1815',
  gold: '#C5A059',
  green: '#2D5A27',
  brown: '#8B7355',
  red: '#C44536',
} as const;

export const MAX_ATTEMPTS = 3;

export const ATTEMPT_MESSAGES: Record<number, string> = {
  1: '✗ VERIFICATION FAILED — Code does not match any known result hash. Re-evaluate the document.',
  2: '✗ SECOND MISMATCH — Ensure you are reading Section 4 and Section 5 carefully. One attempt remaining.',
};

export const LOADING_MESSAGES = [
  { text: '> Connecting to evaluation server...', delay: 0 },
  { text: '> Pulling feedback from review committee...', delay: 800 },
  { text: '> Decrypting evaluation report...', delay: 1600 },
  { text: '> Hold on, something doesn\'t look right...', delay: 2200 },
];

export const REVEAL_DELAY = 3000;
