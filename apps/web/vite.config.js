import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// Membangun aset (CSS/JS) langsung ke apps/api/public agar dapat
// disajikan Express (views EJS + express.static).
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: '../api/public',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        styles: 'src/styles.css',
        main: 'src/main.js',
      },
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
