/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#726ac8',
          400: '#6057c1',
          500: '#4F46BA',
          600: '#473ea8',
          700: '#3f3795',
        },
        content: '#FAFAFA',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
