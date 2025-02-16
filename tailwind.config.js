/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        azeretMono: ["AzeretMono"],
        dmSans: ["DMSans"],
        dosis: ["Dosis"],
      },
      colors: {
        darkText: "#242124",
        darkTextOpacity: "#242424",
        orangePrimary: "#FE3402",
        whiteText: "#EAEAEA",
        whiteTextSecond: "#EDEDED",
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
        "circle-gradient": "radial-gradient(circle, #000000 50%, #3D3B3B 100%)",
      },
      screens: {
        "custom-1024": "1024px",
        "above-1024": "1025px",
        "above-1440": "1441px",
      },
    },
  },
  plugins: [],
};
