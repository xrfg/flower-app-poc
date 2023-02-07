/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { mint: "#D3EFBD", wine: "#8B2635" },
        secondary: { lightSand: "#E0E2DB", sand: "#D2D4C8" },
      },
    },
  },
  plugins: [],
};
