/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        azeretMono: ["AzeretMono"],
        dmSans: ["DMSans"],
      },
      colors: {
        darkText: "#242124",
        darkTextOpacity: "#242424",
        orangePrimary: "#FE3402",
        whiteText: "#EAEAEA",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDelay: {
        300: "300ms",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #171919e6 -30%, transparent 40.47%)",
      },
    },
  },
  plugins: [],
};