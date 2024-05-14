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
        'black-orange': '#B64500',
        'hover-bg': '#EDEDED',
        'main': '#252525',
        'secondary': '#464646',
        'header-top-text': '#6B6B6B',
        'main-orange': '#DD6A24',
        'hover-orange': '#DC7535',
        'active-orange': '#C65A18',
        'gray-section': '#ECECEC',
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