import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './'  // مهم للـ GitHub Pages مع المسارات النسبية
})
