// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  app: {
    baseURL: 'https://github.com/aliibneimran/demonuxt/' // ⚠️ Must match your GitHub repo name
  },
  nitro: {
    prerender: {
      routes: ['/'] // Add other routes you want to pre-render
    }
  }
})