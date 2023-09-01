export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  components: [{ path: '~/components', extensions: ['.vue'] }],
  css: ['assets/css/global.css', '@unocss/reset/normalize.css'],
});
