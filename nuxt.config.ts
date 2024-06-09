// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", '@pinia/nuxt'],
  alias: {
    "@Components": "./components",
    "@Store": "./store",
  }
})
