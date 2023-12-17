/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}","./App.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        afa:['AfacadRegular'],
        afaItalic:['AfacadItalic'],
        rubik:["rubik"]
      }
    },
  },
  plugins: [],
}

