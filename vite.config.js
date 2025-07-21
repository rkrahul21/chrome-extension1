import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));



export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  "jsx": "react-jsx",
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html'),
      },
      
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
})