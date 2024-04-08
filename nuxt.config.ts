// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@hypernym/nuxt-gsap',
    '@nuxtjs/google-fonts',
    'vue3-carousel-nuxt',
    "@nuxt/image"
  ],
  googleFonts: {
    base64: true,
    families: {
      Lato: [400, 700],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      text: true,
    },
  },
});