import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer'; // optional, untuk lihat ukuran file
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: false, // ubah ke true jika ingin langsung buka statistik setelah build
      gzipSize: true,
      brotliSize: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // shortcut impor, contoh: @/components/Navbar
    },
    extensions: ['.js', '.jsx', '.json']
  },
  build: {
    sourcemap: false, // matikan jika tidak dibutuhkan di production
    cssCodeSplit: true, // pisahkan CSS per komponen
    minify: 'esbuild', // defaultnya, tapi bisa eksplisitkan
    chunkSizeWarningLimit: 500, // warning jika file > 500kb
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('react-dom')) return 'react-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
});
