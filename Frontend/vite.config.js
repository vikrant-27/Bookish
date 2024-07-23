import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Bookish/',  // Repository name should be reflected here
  plugins: [react()],
});
