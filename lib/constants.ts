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
  1: 'Incorrect code. Re-evaluate the paper.',
  2: 'Code mismatch. Check assumptions.',
};

export const LOADING_MESSAGES = [
  { text: '> Loading feedback...', delay: 0 },
  { text: '> Reviewing evaluation...', delay: 800 },
  { text: '> Wait a second...', delay: 1600 },
];

export const REVEAL_DELAY = 2400;
