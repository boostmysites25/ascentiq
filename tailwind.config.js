/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#041936",
        secondary: "#e6b02b",
        tertiary: "#f1f2f4",
        background: "#22AAD2",
        tertiarytwo: "#0A1828",
        secondarytwo: "#060F1A",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
