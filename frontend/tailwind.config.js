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
      },
      fontFamily: { raleway: ["Raleway", "sans-serif"] },
    },
  },
  plugins: [],
};
