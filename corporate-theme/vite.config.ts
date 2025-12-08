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
  build: {
    outDir: 'dist', // mặc định, giữ nguyên
    assetsDir: 'assets', // thư mục assets bên trong dist
    rollupOptions: {
      output: {
        // Cấu trúc file tương tự template tĩnh: assets/js, assets/css, assets/img...
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: ({ name }) => {
          // Phân loại theo ext: css/js/img/fonts/svg...
          if (!name) return 'assets/[name].[ext]';
          const ext = name.split('.').pop()?.toLowerCase();
          if (ext === 'css') return 'assets/css/[name].[ext]';
          if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'avif'].includes(ext || '')) return 'assets/img/[name].[ext]';
          if (['woff', 'woff2', 'ttf', 'eot', 'otf'].includes(ext || '')) return 'assets/fonts/[name].[ext]';
          return 'assets/[name].[ext]';
        },
      },
    },
  },
})

