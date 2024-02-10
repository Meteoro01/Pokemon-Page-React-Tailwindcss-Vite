/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Nunito': ['Nunito', 'sans-serif'],
      'w': ['Nunito-VariableFont_wght', 'sans-serif'],
      'Nunito-Italic': ['Nunito-Italic', 'sans-serif'],
      'Nunito-Italic-VariableFont_wght': ['Nunito-Italic-VariableFont_wght', 'sans-serif'],
      'Nunito-VariableFont_wght': ['Nunito-VariableFont_wght', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

