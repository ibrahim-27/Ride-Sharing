/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        customGreen: '#75BF7A',
        customGray: '#9E9DA2'
      }
    },
  },
  plugins: [],
}

