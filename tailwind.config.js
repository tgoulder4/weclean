/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}","./App.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        afa:['AfacadRegular'],
        afaIt:['AfacadItalic'],
        afaB:['AfacadBold'],
        rubik:["rubik"]
      },
      fontSize:{
        base:['12px','16px'],
        lg: ['16px','20px']
      },
      gridTemplateColumns: {

        // Complex site-specific column configuration
        'levelUpPerk': '100% 50px 50px',
      }
      // boxShadow:{
      //   incentiveInset: 'inset_0px_8px_6px_0px_rgba(255,255,255,1)'
      // }
    },
  },
  plugins: [],
}

