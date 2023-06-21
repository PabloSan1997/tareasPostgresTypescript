/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'miama':'#F2DC18',
        'miama2':"#F7F8DA"
      },
      fontFamily:{
        'inter':"'Inter', sans-serif"
      },
      colors:{
        'miama':'#1B1A02'
      }
    },
  },
  plugins: [],
}