import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@utils': path.resolve(__dirname, '/src/utils'),
      '@locales': path.resolve(__dirname, '/src/locales'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@pages': path.resolve(__dirname, '/src/pages'),
    },
  },
  plugins: [react()],
});
