import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  //base: "/qmavite/",
  assetsInclude: ["./src/assets/", '**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.jpeg'],
  css: {
    postcss: '/postcss.config.js',
  },
  build: {
    outDir: 'dist', // ✅ Ensures output goes to 'dist'
    sourcemap: true
  },
  server: {
    port: 3000
  }
})
