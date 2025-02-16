import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { vuetify } from '../plugins/vuetify';

setup((app) => {
  app.use(vuetify);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
