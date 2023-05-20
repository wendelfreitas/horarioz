import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': './src',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@locales': '/src/locales',
      '@assets': '/src/assets',
    },
  },
});
