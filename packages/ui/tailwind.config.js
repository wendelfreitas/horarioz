/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: {
        50: '#f2f3fc',
        100: '#e2e4f7',
        200: '#cbcef2',
        300: '#a8b0e8',
        400: '#7f88db',
        500: '#6064d1',
        600: '#504cc4',
        700: '#473ea8',
        800: '#453b92',
        900: '#393375',
        950: '#272348',
      },
      content: '#FAFAFA',
      white: '#FFFFFF',
      black: '#262626',
    },
  },
};
export const plugins = [
  require('tailwindcss-animated'),
  require('@tailwindcss/forms'),
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('tailwindcss-radix')(),
];
