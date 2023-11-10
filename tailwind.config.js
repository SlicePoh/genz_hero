/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-1': '#FFFF00',
        'violet-1': '#9446E2',

      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'stencil': ['Saira Stencil One', 'sans-serif'],
      },
      backgroundImage: {
        'banner': "url('./assets/banner.png')"
      }
    },
  },
  plugins: [],
}