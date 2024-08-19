import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue'
      ],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: false,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'pwa/apple-touch-icon.png', 'pwa/mask-icon.svg'],
      manifest: {
        name: 'AppStore-Demo',
        short_name: 'AppStore',
        description: 'AppStore Demo',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icons/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5001
  }
})
