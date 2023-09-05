// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
  ],
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      NUXT_PUBLIC_API_BASE: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
  css: ['@/assets/styles.css'],
  build: {
    transpile: ['gsap'],
  },
})
