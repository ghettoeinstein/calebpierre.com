import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'resume.html'),
        glossary: resolve(__dirname, 'glossary.html'),
        tools: resolve(__dirname, 'tools.html'),
        insights: resolve(__dirname, 'insights.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
      },
    },
  },
})
