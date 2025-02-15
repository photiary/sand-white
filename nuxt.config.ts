// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/storybook',
  ],
  devtools: { enabled: true },
  devServer: {
    port: 3050,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      // prettier를 사용하므로 `stylistic` 설정을 사용하지 않는다.
    },
  },
});