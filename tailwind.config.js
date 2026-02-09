/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hype-red': '#FF3300',
        'acid-yellow': '#EBFF00',
        'void-black': '#0F0F0F',
        'paper-white': '#FAFAFA',
      },
      fontFamily: {
        head: ['Unbounded', 'sans-serif'],
        body: ['Golos Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
