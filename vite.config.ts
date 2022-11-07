import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $styles: path.join(__dirname, 'src/styles'),
      $types: path.join(__dirname, 'src/types'),
      $data: path.join(__dirname, 'src/data'),
      $context: path.join(__dirname, 'src/context'),
      $assets: path.join(__dirname, 'src/assets'),
      $components: path.join(__dirname, 'src/components'),
      $routes: path.join(__dirname, 'src/routes')
    }
  },
  publicDir: path.join(__dirname, 'src/assets'),
  server: {
    host: '::',
    port: 3000,
    strictPort: true
  }
});
