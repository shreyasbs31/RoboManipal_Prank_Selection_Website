import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F7F4ED',
        ink: '#1A1815',
        gold: '#C5A059',
        green: '#2D5A27',
        brown: '#8B7355',
        red: '#C44536',
      },
      fontFamily: {
        mono: ['"Courier Prime"', 'monospace'],
      },
      boxShadow: {
        'brutal': '8px 8px 0 #1A1815',
        'brutal-gold': '6px 6px 0 #C5A059',
        'brutal-lg': '16px 16px 0 #1A1815',
      },
    },
  },
  plugins: [],
}
export default config
