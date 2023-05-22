const tailwind = require('@horarioz/ui/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: tailwind.theme,
  plugins: tailwind.plugins,
};
