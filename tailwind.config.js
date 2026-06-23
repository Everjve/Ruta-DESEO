/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50:  '#FDFAF5',
          100: '#FAF5EB',
          200: '#F5EDD8',
          300: '#EDE0C4',
        },
        terra: {
          300: '#E0A882',
          400: '#D4905E',
          500: '#C87A4F',
          600: '#B06840',
          700: '#8B5232',
        },
        earth: {
          400: '#A07850',
          500: '#8B6844',
          600: '#6B5035',
          700: '#4A3525',
          800: '#2E2018',
        },
        sage: {
          300: '#A8B89A',
          400: '#8FA882',
          500: '#7A9470',
        },
        gold: {
          300: '#D4B96A',
          400: '#C4A84E',
          500: '#B09538',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
