import type { NuxtConfig } from '@nuxt/types'
import { NuxtRouteConfig } from "@nuxt/types/config/router";

const config: NuxtConfig = {
  target: 'static',
  ssr: false,

  head: {
    title: 'CheckSplitter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CheckSplitter' }
    ],
    link: []
  },

  css: [
    '~/assets/scss/styles.scss',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/_custom.scss',
    ],
  },

  build: {
    loaders: {
      scss: {
        sassOptions: {
          quietDeps: true
        }
      }
    }
  },

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
  ],

  plugins: [

  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',

    'bootstrap-vue/nuxt',
  ],

  router: {
    extendRoutes(routes: NuxtRouteConfig[], resolve: (...pathSegments: string[]) => string) {
      routes.push(
        {
          path: '/',
          name: 'Index',
          component: resolve(__dirname, 'pages/Index')
        },
      )
    }
  },

  // Modules config
  axios: {
    baseURL: process.env.API_URL
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
}

export default config
