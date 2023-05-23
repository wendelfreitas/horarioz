import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  colors: {
    ...colors,
    black: '#262626',
  },
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
};
export const plugins = [
  require('tailwindcss-animated'),
  require('@tailwindcss/forms'),
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('tailwindcss-radix')(),
];
