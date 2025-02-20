/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        azeretMono: ["AzeretMono", "monospace"],
        dmSans: ["DMSans"],
        dosis: ["Dosis"],
      },
      colors: {
        darkText: "#242124",
        darkTextOpacity: "#262626",
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
        // "custom-1280": { min: "1280px", max: "1439px" },
        "custom-1280": "1280px",
        "above-1280": { min: "1281px" },
        "above-1024": "1025px",
        "custom-1440": { min: "1440px", max: "1919px" },
        "above-1440": "1441px",
        "custom-1920": "1920px",
        "max-1024": { max: "1024px" },
        "1024-1279": { min: "1024px", max: "1279px" },
        "1024-1439": { min: "1024px", max: "1439px" },
        "below-1024": { max: "1023px" },
        "below-430": { max: "430px" },
      },
    },
  },
  plugins: [],
};
