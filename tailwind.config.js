/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      height: {
        "25-screen": "25vh",
        "33-screen": "33vh",
        "50-screen": "50vh",
        "75-screen": "75vh",
      },
      minHeight: {
        "25-screen": "25vh",
        "33-screen": "33vh",
        "50-screen": "50vh",
        "75-screen": "75vh",
      },
      maxHeight: {
        "25-screen": "25vh",
        "33-screen": "33vh",
        "50-screen": "50vh",
        "75-screen": "75vh",
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
