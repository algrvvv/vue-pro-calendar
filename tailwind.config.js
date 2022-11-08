/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: false,
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "14-165-233": "rgb(14, 165, 233)",
      },
    },
    colors: {
      white: "white",
      black: "black",
      "2062F6": "#2062F6",
      "18181B": "#18181B",
      "09101D": "#09101D",
      "006A52": "#006A52",
      E07A2C: "#E07A2C",
      E0E0E0: "#E0E0E0",
      FAFAFA: "#FAFAFA",
      "71717A": "#71717A",
      F4F4F5: "#F4F4F5",
      A1A1AA: "#A1A1AA",
      "005743": "#005743",
      F7F7F7: "#F7F7F7",
      "6D7580": "#6D7580",
      "3B82F6": "#3B82F6",
      DD4816: "#DD4816",
      "0EA5E9": "#0EA5E9",
      "0369A1": "#0369A1",
    },
  },
  plugins: [],
};
