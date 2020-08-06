
require('dotenv').config()
const axios = require('axios') // we'll need this later for our dynamic routes
const collect = require('collect.js')
export default {
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
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/filters.js',
    '@/plugins/vue-agile'
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
          sort: {_created:-1},
          populate: 1
        }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
  
      const collection = collect(data.entries)
  
      let tags = collection.map(post => post.tags)
      .flatten()
      .unique()
      .map(tag => {
        let payload = collection.filter(item => {
          return collect(item.tags).contains(tag)
        }).all()
  
        return {
          route: `category/${tag}`,
          payload: payload
        }
      }).all()
  
      let posts = collection.map(post => {
        return {
          route: post.title_slug,
          payload: post
        }
      }).all()
  
      return posts.concat(tags)
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.URL,
    cacheTime: 1000 * 60 * 15,
    async routes () {
      let { data } = await axios.post(process.env.POSTS_URL,
      JSON.stringify({
          filter: { published: true },
          sort: {_created:-1},
          populate: 1
        }),
      {
        headers: { 'Content-Type': 'application/json' }
      })
  
      const collection = collect(data.entries)
  
      let tags = collection.map(post => post.tags)
      .flatten()
      .unique()
      .map(tag => `category/${tag}`)
      .all()
  
      let posts = collection.map(post => post.title_slug).all()
  
      return posts.concat(tags)
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: ['vue-agile']
  }
}