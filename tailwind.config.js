/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gabarito: [
          "Gabarito-Regular", "sans-serif"
        ],
        "gabarito-medium": [
          "Gabarito-Medium", "sans-serif"
        ],
        "gabarito-bold": [
          "Gabarito-Bold", "sans-serif"
        ]
      },
      dropShadow: {
        'lg': '0 0 100px #d2f56a',
        'sm': '1px 1px 3px #d2f56a',
        'neon': [
          '0 0 40px theme("#d3eac8")', 
          '0 0 150px theme("#3d692c")'
        ]
      },
      colors: {
        "green": "#d2f56a",
        "red": "#e94e2d",
        "gray": "#3a3a3a",
        "dark": "#1c1c1c",
        "darker": "#151515",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
