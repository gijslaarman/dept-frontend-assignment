export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Dept | Gijs Laarman's frontend assignment",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Frontend Assignment for Dept Agency, created by Gijs Laarman',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/cropped-cropped-d-2-192x192.png',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources', '@nuxtjs/svg-sprite'],

  // Add styleResources to be able to use scss in components
  // Only use 'scss:' for adding variables & mixins, otherwise the styles will be duplicated.
  styleResources: {
    scss: ['./assets/scss/variables-mixins.scss'],
    css: ['./assets/scss/main.scss'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Expose server to external connections (mobile testing purposes f.e.)
  server: {
    host: '0.0.0.0',
  },
}
