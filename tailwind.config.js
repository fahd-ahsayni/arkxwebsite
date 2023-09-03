/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#fff3ec",
          100: "#ffe4d3",
          200: "#ffc6a5",
          300: "#ff9e6d",
          400: "#ff6932",
          500: "#ff420a",
          600: "#ff2600",
          700: "#cc1602",
          800: "#a1130b",
          900: "#82130c",
          950: "#460504",
        },

        red: {
          50: "#FFE5E5",
          100: "#FFCCCC",
          200: "#FF9999",
          300: "#FF6666",
          400: "#FF3333",
          500: "#FF0000",
          600: "#CC0000",
          700: "#990000",
          800: "#660000",
          900: "#330000",
          950: "#190000",
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
