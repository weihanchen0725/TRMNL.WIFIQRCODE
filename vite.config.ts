import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Base public path for GitHub Pages
  base: '/TRMNL.WIFIQRCODE/',
  
  // Server configuration
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable for production
    minify: 'esbuild', // Faster than terser, built-in
    target: 'esnext', // Modern browsers
    rollupOptions: {
      output: {
        manualChunks: undefined, // Simple single bundle for small apps
      },
    },
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
})
