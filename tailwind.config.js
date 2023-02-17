/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "p-green": "#47A920",
        "s-green": "#4FC123",
        "t-green": "#80D261",
        "p-orange": "#FAC600",
        "s-orange": "#FED402",
        "p-cream": "#FAE2C0",
        "s-cream": "#FEF1DA",
      },
    },
  },
  plugins: [],
};
