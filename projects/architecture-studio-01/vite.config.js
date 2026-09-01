import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 5171,
    strictPort: true,
  },

  preview: {
    host: '0.0.0.0',
    port: 4171,
    strictPort: true,
  },

  build: {
    sourcemap: false,
    cssCodeSplit: true,
  },
})