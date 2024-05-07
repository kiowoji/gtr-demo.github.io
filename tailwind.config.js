/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors:{
        'link-money':'#EDEDED',
        'header-top':'#F7F9FA',
        'menu-active':'#FFECE1',
        'bggrey':'#F3F3F3',
        'x':'#D80000',
        'black-orange':'#B64500'

      }
    },
    screens: {
      'sm': '280px',
      'md': '768px',
      'lg': '1440px',
    },
  },
  plugins: [],
}