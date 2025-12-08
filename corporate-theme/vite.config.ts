import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['node_modules'],
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

