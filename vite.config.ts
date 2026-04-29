import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Netlify hosts at root (and dev runs at root)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5174,
  },
})
