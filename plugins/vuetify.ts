// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#70a4cb', // 👈 원하는 색상으로 변경
        },
      },
    },
  },
});

export default defineNuxtPlugin((app) => {
  app.vueApp.use(vuetify);
});
