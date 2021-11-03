const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gcinavy: "#000818",
      },
      spacing: {
        half: "50%",

        twoq: "75%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
