/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))'
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
        'span-14': 'span 14 / span 14',
        'span-20': 'span 20 / span 20',
      }
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
