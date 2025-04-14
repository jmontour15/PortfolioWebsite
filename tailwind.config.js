/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'special-gothic': ['"Special Gothic Expanded One"', 'sans-serif'],
        },
        backgroundImage: {
          'landscapeMountain': "url('./assets/landscape-mountain.jpg')",
        },
      },
    },
    plugins: [],
  }