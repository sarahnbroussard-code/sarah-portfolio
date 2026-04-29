import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo name for GitHub Pages: https://sarahnbroussard-code.github.io/sarah-portfolio/
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sarah-portfolio/',
  server: {
    port: 5174,
  },
})
