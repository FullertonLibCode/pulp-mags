/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Titillium Web', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#60a5fa',
          cyan: '#00ffff', // Updated for better contrast
          purple: '#a78bfa',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(15, 23, 42, 0.9)', // Increased opacity for better contrast
        },
        primary: {
          DEFAULT: '#00ffff', // Brighter cyan
          hover: '#00cccc',
        },
        secondary: {
          DEFAULT: '#e2e8f0', // Lighter gray
          muted: '#94a3b8',
        },
        background: {
          DEFAULT: '#0f172a', // Darker background
          hover: '#1e293b',
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 255, 0.5)',
        'neon-strong': '0 0 30px rgba(0, 255, 255, 0.7)',
        'neon-glow': '0 0 40px rgba(0, 255, 255, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};