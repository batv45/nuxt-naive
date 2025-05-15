// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  build: {
  },
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/eslint', '@nuxt/icon', 'nuxtjs-naive-ui', '@unocss/nuxt'],
  app: {
    head: {

      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '—', // Use an em dash instead of |
        siteName: 'Nuxt+Naive'
      },
      htmlAttrs: {
        lang: 'tr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  }
})
