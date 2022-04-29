module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          // default: '#3699ff',
          1: '#a9a9a9',
        },
      },
    },
  },
  plugins: [],
}
