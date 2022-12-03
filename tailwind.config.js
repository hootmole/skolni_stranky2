/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_black: '#000000',
        main_white: '#ffffff',
        main_gray: '#e5e5e5',
        main_orange: '#fca311',
        main_blue: '#14213d',

      }
    },
  },
  plugins: [],
}
