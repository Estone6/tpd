/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'text-gold',
    'hover:text-gold',
    'text-gray',
    'hover:text-gray',
    'text-secondary',
    'hover:text-secondary',
    'opacity-0',
    'opacity-100',
    'transition-opacity',
    'animate-fadeInUp'
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["var(--font-tuesday)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 1.25s ease forwards 0.5s',
      },
    },
  },
  plugins: [],
} 