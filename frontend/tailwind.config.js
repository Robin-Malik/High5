/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide-left 500ms forwards',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        primary: '#5486E3',
        'primary-400': '#93c5fd',
        translucent: 'rgba(84 134 227 / 0.15)',
        'translucent-white': 'rgba(256 256 256 / 0.15)',
      },
      fontFamily: {
        Lato: ['Lato'],
      },
    },
  },
  plugins: [],
}
