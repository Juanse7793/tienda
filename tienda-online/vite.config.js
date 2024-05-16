import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg'], // Asegúrate de incluir tus tipos de archivos de imagen
});
