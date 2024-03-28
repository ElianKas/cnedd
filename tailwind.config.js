/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      primary: '#0CC31E',
      lightGreen: '#D8F8CA',
      darkGreen: '#194D03',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: ['"Lato"'],
      },
    },
  },
  plugins: [],
};
