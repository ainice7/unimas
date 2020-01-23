
import path from 'path'
import SpritesmithPlugin from 'webpack-spritesmith'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap' }

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    'assets/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    { src: './plugins/select.js', ssr: false },
    { src: './plugins/validate.js', ssr: false },
    { src: './plugins/tabs.js', ssr: false },
    { src: './plugins/d3Funnel.js', ssr: false },
    { src: './plugins/vueSvgGauge.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/router'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    host: 'localhost',
    port: '8080'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    plugins: [
      new SpritesmithPlugin({
        src: {
          cwd: path.resolve(__dirname, 'assets/images/sprites_icons'),
          glob: '*.png'
        },
        target: {
          image: path.resolve(__dirname, 'assets/images/sprite.png'),
          css: path.resolve(__dirname, 'assets/sprites/_sprite.scss')
        },
        apiOptions: {
          cssImageRef: '~assets/images/sprite.png'
        }
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
