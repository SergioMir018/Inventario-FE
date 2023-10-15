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
        'lg': '0 0 100px theme("colors.purple.700")',
        'neon': [
          '0 0 40px theme("colors.purple.200")', 
          '0 0 150px theme("colors.purple.700")'
        ]
      }
    },
  },
  plugins: [],
}
