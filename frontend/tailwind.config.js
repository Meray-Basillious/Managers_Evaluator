/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        'primary-light': '#E6F2FF',
        'primary-dark': '#003D99',
        secondary: '#0099FF',
        success: '#00AA44',
        warning: '#FF8800',
        error: '#DD0000',
        info: '#0099FF',
      },
      spacing: {
        'xs': '4px',
        's': '8px',
        'm': '12px',
        'l': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-sm': ['12px', { lineHeight: '18px', fontWeight: '400' }],
        'caption': ['11px', { lineHeight: '16px', fontWeight: '400' }],
        'button': ['14px', { lineHeight: '20px', fontWeight: '600' }],
      },
      borderRadius: {
        'sm': '4px',
        'base': '6px',
        'md': '8px',
        'lg': '12px',
      },
    },
  },
  plugins: [],
};
