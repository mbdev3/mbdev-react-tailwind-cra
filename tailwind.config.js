/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.2xl'),
        },
        h2: {
          fontSize: theme('fontSize.xl'),
        },
      });
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        },
        '.btn': {
          padding: '10px 24px 10px 24px',
          borderRadius: '6px',
          fontWeight: '600',
          transition: '0.3s ease all',
          lineHeight: '1.5',
          letterSpacing: '-0.01em',
        },
        '.btn-main': {
          backgroundColor: '#FF1FAA',
          color: '#fff',
          fontWeight: '600',
          border: '2px solid transparent',
          '&:hover': {
            backgroundColor: '#E5008E',
          },
          '&:focus': {
            backgroundColor: '#FF1FAA',
            border: '2px solid #FFC3E9',
          },
          '&:disabled': {
            backgroundColor: '#FF6AC6',
          },
        },
        '.btn-second': {
          backgroundColor: '#FBEFF6',
          color: '#E5008E',
          fontWeight: '600',
          border: '1px solid transparent',
          '&:hover': {
            backgroundColor: '#FFC3E9',
          },
          '&:focus': {
            backgroundColor: '#FFC3E9',
            border: '2px solid #FFC3E9',
          },
          '&:disabled': {
            color: '#FF6AC6',
            backgroundColor: '#FFC3E9',
          },
        },
        '.flex-c': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        },
      });
    }),
  ],
};
