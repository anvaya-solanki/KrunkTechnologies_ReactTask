/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: '#EFF3FD',
        textColor: '#4C82EF', 
        grayone: '#B1B1B1', 
        graytwo: '#7A7F8C',
        borderColor: '#E3ECFF'
      },
    },
  },
  plugins: [],
}

