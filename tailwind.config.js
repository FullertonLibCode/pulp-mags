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
          cyan: '#00ffff',
          purple: '#a78bfa',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(15, 23, 42, 0.9)',
        },
        primary: {
          DEFAULT: '#00ffff',
          hover: '#00cccc',
        },
        secondary: {
          DEFAULT: '#e2e8f0',
          muted: '#94a3b8',
        },
        background: {
          DEFAULT: '#0f172a',
          hover: '#1e293b',
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 255, 0.5)',
        'neon-strong': '0 0 30px rgba(0, 255, 255, 0.7)',
        'neon-glow': '0 0 40px rgba(0, 255, 255, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 255, 0.3)',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [
        'text-[#00eeff]',
        'bg-[#00eeff]',
        'border-[#00eeff]',
        'bg-[#0a1128]',
        'bg-[#132347]',
        'border-[#1e3a8a]',
      ],
    },
  },
};