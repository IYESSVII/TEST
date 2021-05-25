import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dsv from '@rollup/plugin-dsv'
import svgIcons from 'vite-plugin-svg-icons'
import purgeIcons from 'vite-plugin-purge-icons'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dsv(),
    purgeIcons(),
    svgIcons({
      iconDirs: [
        path.resolve(__dirname, 'src/assets/svg/icon')
      ],
      symbolId: 'svg-icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
      'd2-components': '/src/lib/d2-components',
      'd2-admin-server-mock': '/src/lib/d2-admin-server-mock'
    }
  },
  server: {
    open: true,
  }
})
