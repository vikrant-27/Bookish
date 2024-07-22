import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:'/Bookish/',   //getting blank screen while deployment so removed 
  plugins: [react()],
})
