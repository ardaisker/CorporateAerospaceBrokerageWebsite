import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// The Figma Make export shipped a `figmaAssetResolver` plugin that mapped
// `figma:asset/<hash>.png` imports onto files in src/assets. The imports now
// point at src/assets directly, so the plugin is gone — nothing in this build
// depends on Figma's module protocol any more.

export default defineConfig({
  // Relative base so the built site also works when served from a subpath.
  base: '/',

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
