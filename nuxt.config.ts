// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt'
  ],
  unocss: {
    preflight: true,
  },
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      NUXT_PUBLIC_API_BASE: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  }
})
