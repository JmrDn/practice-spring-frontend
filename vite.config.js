import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getApiUrl } from './src/Util';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:4000,
    
  }
})
