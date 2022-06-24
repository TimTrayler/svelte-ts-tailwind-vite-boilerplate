/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral
      }
    },
  },
  plugins: [],
}
