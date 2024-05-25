/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Bgmain: "#303033",

        main: "#AE5630",

        // Tints
        mainTint1: "#b66745",
        mainTint2: "#be7859",
        mainTint3: "#c6896e",
        mainTint4: "#ce9a83",
        mainTint5: "#d7ab98",
        mainTint6: "#e7ccc1",
        mainTint7: "#efddd6",

        // Shades
        mainShade1: "#9d4d2b",
        mainShade2: "#8b4526",
        mainShade3: "#7a3c22",
        mainShade4: "#68341d",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
