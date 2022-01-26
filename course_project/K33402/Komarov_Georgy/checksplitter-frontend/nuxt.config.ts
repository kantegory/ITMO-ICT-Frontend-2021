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
    '@nuxtjs/auth-next',
    '@nuxtjs/style-resources',

    'bootstrap-vue/nuxt',
  ],

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/',
    },
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/login/', method: 'post' },
          logout: { url: '/auth/logout/', method: 'post' },
          user: { url: '/users/profile', method: 'get' },
        }
      }
    },
  },

  router: {
    middleware: ['auth'],

    extendRoutes(routes: NuxtRouteConfig[], resolve: (...pathSegments: string[]) => string) {
      routes.push(
        {
          path: '/',
          name: 'IndexView',
          component: resolve(__dirname, 'pages/IndexView')
        },
        {
          path: '/login',
          name: 'LoginView',
          component: resolve(__dirname, 'pages/auth/LoginView')
        },
        {
          path: '/register',
          name: 'RegisterView',
          component: resolve(__dirname, 'pages/auth/RegisterView')
        },
        {
          path: '/profile',
          name: 'ProfileView',
          component: resolve(__dirname, 'pages/auth/ProfileView')
        },
        {
          path: '/profile/password',
          name: 'PasswordChangeView',
          component: resolve(__dirname, 'pages/auth/PasswordChangeView')
        },
        {
          path: '/password-reset',
          name: 'PasswordResetView',
          component: resolve(__dirname, 'pages/auth/PasswordResetView')
        },
        {
          path: '/receipts',
          name: 'ReceiptsListView',
          component: resolve(__dirname, 'pages/receipts/ReceiptsListView')
        },
        {
          path: '/receipts/:id',
          name: 'ReceiptInstanceView',
          component: resolve(__dirname, 'pages/receipts/ReceiptInstanceView')
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
