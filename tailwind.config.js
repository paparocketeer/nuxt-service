/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      height: theme => ({
        "h-25-screen": "25vh",
      "h-33-screen": "33vh",
      "h-50-screen": "50vh",
      "h-75-screen": "75vh",
      }),
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    height: {
      "h-25-screen": "25vh",
      "h-33-screen": "33vh",
      "h-50-screen": "50vh",
      "h-75-screen": "75vh",
    },
    maxHeight: {
      "max-h-25-screen": "25vh",
      "max-h-33-screen": "33vh",
      "max-h-50-screen": "50vh",
      "max-h-75-screen": "75vh",
      'max-h-xs': '20rem',
      'max-h-sm': '24rem',
      'max-h-md': '28rem',
      'max-h-lg': '32rem',
      'max-h-xl': '36rem',
      'max-h-2xl': '42rem',
      'max-h-3xl': '48rem',
      'max-h-4xl': '56rem',
      'max-h-5xl': '64rem',
      'max-h-6xl': '72rem',
    },
    minHeight: {
      "min-h-25-screen": "25vh",
      "min-h-33-screen": "33vh",
      "min-h-50-screen": "50vh",
      "min-h-75-screen": "75vh",
      'min-h-xs': '20rem',
      'min-h-sm': '24rem',
      'min-h-md': '28rem',
      'min-h-lg': '32rem',
      'min-h-xl': '36rem',
      'min-h-2xl': '42rem',
      'min-h-3xl': '48rem',
      'min-h-4xl': '56rem',
      'min-h-5xl': '64rem',
      'min-h-6xl': '72rem',
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
}
