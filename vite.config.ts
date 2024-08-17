import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      cssInjectedByJsPlugin(),
  ],
  resolve: {
    alias: {
      '@orderSummary': path.resolve(__dirname, './order-summary-component-main/images'),
      '@blogPreview': path.resolve(__dirname, './blog-preview-card-main/assets/images'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
})
