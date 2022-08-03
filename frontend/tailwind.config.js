/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        melon: "#F9ADA0",
        bright_pink: "#F9627D",
        purple: "#9C7CA5",
        bgdark: "#202124",
        txtgrey: "#979797",
        govtblue: "#093C7C",
        bgblue: "#2C67B2",
        logoblue: "#282C83"
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        league: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
