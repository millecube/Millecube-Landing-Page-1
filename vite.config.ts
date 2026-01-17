import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increases the chunk size warning limit to 1600KB (default is 500KB)
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        // detailed manual chunks configuration to split large libraries
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});