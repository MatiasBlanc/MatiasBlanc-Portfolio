module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ms: ['Montserrat', 'sans-serif'],
      rb: ['Rubik', 'sans-serif'],
    },
    colors: {
      dark: '#0E0E25',
      secondaryDark: '#181E34',
      primary: '#7765E3',
      secondary: '#364FAB',
      secondaryInactive: '#364fab9f',
      white: {
        100: '#ffffff',
        200: '#e6e4ee',
        300: '#d6d4dd',
        400: '#c6c4cc',
      },
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