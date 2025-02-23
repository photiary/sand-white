import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'github-pages',
  },
  app: {
    // robots.txt 파일 생성은 '/'로 설정과 커스텀 도메인 설정(구매)이 필요.
    baseURL: '/sand-white/',
  },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/storybook',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
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
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  site: {
    url: 'https://photiary.github.io',
    name: 'My Nuxt Website!',
  },
  robots: {
    // robots.txt 생성은 커스텀 도메인 필요.
    robotsTxt: false,
    allow: ['/'],
    sitemap: '/sand-white/sitemap.xml',
    debug: true,
  },
});
