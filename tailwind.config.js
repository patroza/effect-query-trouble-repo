/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: true,
    styled: true,
    themes: [
      // Dark there
      "coffee",
      "dracula",
      "black",
      "sunset",
      "luxury",

      // Light themes
      "cupcake",
      "halloween",
      "lemonade",
      "aqua",

      // Special themes
      "cyberpunk",
      "synthwave",
    ],
  },
};
