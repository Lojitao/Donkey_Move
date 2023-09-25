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
  app: {
    head: {
      viewport: "width=500, initial-scale=1",
      title: "小驢行",
      meta: [
        { "name": "description", "content": "小驢行開發「長照交通車輛派遣系統」的資訊化叫車系統，用共享經濟的理念，迅速媒合長者或家屬對接送交通服務的需求" },
        { "property": "og:title", "content": "小驢行- 長照交通接送平台" },
        { "property": "og:url", "content": "https://www.donkeymove.com/" },
        { "property": "og:description", "content": "小驢行開發「長照交通車輛派遣系統」的資訊化叫車系統，用共享經濟的理念，迅速媒合長者或家屬對接送交通服務的需求" },
        { "property": "og:image", "content": "https://www.donkeymove.com/images/logo.png" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "donkeymove.ico" }
      ]
    }
  },   
})
