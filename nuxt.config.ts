// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0'
    // port: ...
  },
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  unocss: {
    preflight: true,
  },
  build: {
    transpile: ['gsap'],
  },
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      NUXT_PUBLIC_API_BASE: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },
})
