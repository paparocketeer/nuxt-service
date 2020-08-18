
require('dotenv').config()
const axios = require('axios') // we'll need this later for our dynamic routes
const collect = require('collect.js')
export default {
  loading: false,
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Ремонт - 861 | Монтажные и отделочные работы в Анапе',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Монтажные и отделочные работы в Анапе' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/filters.js',
    '@/plugins/observer.client.js',
    '@/plugins/mask.client.js',
    '@/plugins/click-outside.client.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxt/http',
    'nuxt-responsive-loader'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  generate: {
    routes: async () => {
      let { data } = await axios.post(process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        })

      const collection = collect(data.entries)

      let navs = collection.map(({ title, title_slug }) => ({
        title,
        title_slug,
      }))

      let posts = collection.map(post => {
        return {
          route: post.title_slug,
          payload: { post: post, navs: navs }
        }
      }).all()

      return posts
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.URL,
    cacheTime: 1000 * 60 * 15,
    async routes() {
      let { data } = await axios.post(process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        })

      const collection = collect(data.entries)

      let posts = collection.map(post => post.title_slug).all()

      return posts
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: ['vue-agile']
  },
  publicRuntimeConfig: {
    ASSETS_URL: '${ASSETS_URL}',
    CAROUSEL_URL: '${CAROUSEL_URL}',
    POSTS_URL: '${POSTS_URL}',
    BASE_URL: '${BASE_URL}',
    MAILER_URL: '${MAILER_URL}'
  },
  responsiveLoader: {
    name: 'img-srcset/[hash:7]-[width].[ext]',
    steps: 3,
    placeholder: true,
    quality: 85,
    sizes: [540, 1024, 1920],
  },
}
