module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ms: ['Montserrat', 'sans-serif'],
      rb: ['Rubik', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '8rem',
      }
    },
  },
  plugins: [],
}