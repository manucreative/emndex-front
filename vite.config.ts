import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['b46d-41-215-28-2.ngrok-free.app'],
    port: 3001,
    strictPort: true,
  },
})
