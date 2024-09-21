import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  server: {
    host: true,
    port: 4000
  },
  test:{ 
    /*
     * this is for unit testing purposes
     */
    globals: true,
    environment: "jsdom",
    css: true,
  }
})
