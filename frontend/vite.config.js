import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import url from '@rollup/plugin-url'; // Импорт плагина для обработки изображений
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), url()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend/src'), // Убедитесь, что указали правильный путь
    },
  },
})
