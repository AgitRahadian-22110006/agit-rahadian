import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure build finds your files
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  // For better error tracking if build issues persist
  build: {
    sourcemap: true
  }
});