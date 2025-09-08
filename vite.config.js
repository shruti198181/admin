import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // enable SPA fallback so React Router handles all routes
    historyApiFallback: true,
  },
});
