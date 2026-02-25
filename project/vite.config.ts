import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dhaya-portfolio/",   // <-- exactly your repo name here
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})