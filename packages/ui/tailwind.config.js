/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9ec',
          100: '#fff2d2',
          200: '#ffe1a4',
          300: '#ffca6b',
          400: '#ffa82f',
          500: '#ff8b07',
          600: '#f96f00',
          700: '#e05a00',
          800: '#a34109',
          900: '#83370b',
          950: '#471a03',
        },
        content: '#FAFAFA',
        white: '#FFFFFF',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-radix')(),
  ],
};
