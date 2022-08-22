/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundColor: theme => ({
      'brand-color': '#5d3ebc'
    }),
    extend: {},
  },
  plugins: [],
}
