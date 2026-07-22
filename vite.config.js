import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: base tem que ser o nome do repositório para GitHub Pages
  base: '/wing-ia/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
