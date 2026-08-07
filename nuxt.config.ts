// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;700&family=Cinzel:wght@500;600;700&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@ant-design-vue/nuxt'
    // '@coremyslo/nuxt-icon-font'
  ]
})