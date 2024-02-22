import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss: './postcss.config.js',
  },
  // Oprava RollupError v procesu sestavení 
  resolve: {
    mainFields: ['browser'],
  },
})
