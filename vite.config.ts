import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const localhost = "http://localhost:3000";
const hosting = localhost;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['@tailwindcss/vite'], // Prevents Vite from caching the plugin logic
  },
  server: {
    proxy: {
      "/api": {
        target: hosting,
      },
    },
  },
  build: {
    outDir: "./dist",
  },
})
