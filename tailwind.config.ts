import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      colors: {
        neon: {
          cyan: '#00f0ff',
          purple: '#ff00ff',
          green: '#00ff41',
          pink: '#ff006e',
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 240, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 240, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
