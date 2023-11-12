/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        'yellow-1': '#FFFF00',
        'violet-1': '#9446E2',
        'blue-1': '#9BCEE4',
        'red-1': '#FF4A5D',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sync': ['Syncopate', 'sans-serif'],
        'neo': ['Neonderthaw', 'cursive']
      },
      backgroundImage: {
        'banner': "url('./assets/banner.png')"
      }
    },
  },
  plugins: [],
}