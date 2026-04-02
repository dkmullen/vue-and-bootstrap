import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'i',
          enabledCollections: ['bi'],
        }),
      ],
    }),
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: 'i',
          enabledCollections: ['bi'],
        }),
      ],
      dts: false,
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
      collections: ['bi'],
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'mixed-decls', 'color-functions', 'global-builtin'],
      },
    },
  },
})

/* Note: Sass deprecation warnings are shown when compiling source Sass files with the
   latest versions of Dart Sass. This does not prevent compilation or usage of Bootstrap.
   Bootstrap is working on a long-term fix, but in the meantime these deprecation notices
   can be ignored.
*/
