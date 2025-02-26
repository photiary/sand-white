import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: (config) => {
    config.server = {
      ...config.server,
      hmr: true, // `Can't find variable: __VUE_HMR_RUNTIME__` 해결 전까지 미사용 HMR
    };
    return config;
  },
};
export default config;
