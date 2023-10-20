import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(5173),
    hmr: {
      host: "0.0.0.0",
      protocol: "ws",
    }
  },
})
