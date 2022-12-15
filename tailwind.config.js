/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      trasparent: 'trasparent',
      'PRIMARY': '#e2e8f0',
      'SECONDARY':'#7239AB',
      'THIRD':'#321450',
      'textResumeFirst':'#8386F5',
      'textResumeSecondary':'#321450',
      'offline':'#FFB039',
      'online':'#1AFE49',
      'WHITE':'#FFFFFF',
      'textButton':'#E9D9D9',
      'FOUR':"#D9D6D6"
    },
    extend: {
      fontFamily:{
        "roboto": ['Roboto']
      }
    },
  },
  plugins: [],
}
