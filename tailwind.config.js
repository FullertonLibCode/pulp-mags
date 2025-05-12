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
          cyan: '#22d3ee',
          purple: '#a78bfa',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(15, 23, 42, 0.7)',
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(96, 165, 250, 0.5)',
        'neon-strong': '0 0 30px rgba(96, 165, 250, 0.7)',
        'neon-glow': '0 0 40px rgba(34, 211, 238, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(96, 165, 250, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'circuit-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.9h-2.77zm22.628 0L53.8 8.829 52.385 10.243 41.8 0h3.17zm-16.97 0L36.8 8.829 35.385 10.243 24.8 0h3.17zm11.314 0L48.8 9.114 47.385 10.53 35.8 0h3.17zm-16.97 0L30.8 9.114 29.385 10.53 17.8 0h3.17zM13.715 0L5.8 7.914 7.215 9.33 16.8 0h-3.085zM0 0l.828.828-1.415 1.415L0 2.243V0zm0 5.373l.828.828-1.415 1.415L0 8.544V5.374zm0 5.656l.828.828-1.415 1.415L0 14.2v-3.17zm0 5.657l.828.828-1.415 1.415L0 19.857v-3.17zm0 5.657l.828.828-1.415 1.415L0 25.514v-3.17zm0 5.657l.828.828-1.415 1.415L0 31.17v-3.17zm0 5.657l.828.828-1.415 1.415L0 36.828v-3.17zm0 5.657l.828.828-1.415 1.415L0 42.485v-3.17zm0 5.657l.828.828-1.415 1.415L0 48.143v-3.17zm0 5.657l.828.828-1.415 1.415L0 53.8v-3.17zm0 5.657l.828.828-1.415 1.415L0 59.457v-3.17zm0 5.657l.828.828-1.415 1.415L0 65.114v-3.17z\' fill=\'rgba(96, 165, 250, 0.1)\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};