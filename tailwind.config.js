/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'sand-white': {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#ede2cf', // sand-white
          300: '#d8bf99',
          400: '#c8a06f',
          500: '#bc8853',
          600: '#af7547',
          700: '#915d3d',
          800: '#764c36',
          900: '#60402e',
          950: '#332017',
        },
      },
    },
  },
  plugins: [],
  important: true, // Tailwind css 우선 https://tailwindcss.com/docs/configuration#important
};
