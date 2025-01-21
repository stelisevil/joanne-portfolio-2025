// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        400: "100rem",
      },
      fontFamily: {
        sans: ["brown", ...defaultTheme.fontFamily.sans],
        bold: ["brownBold"],
      },
    },
  },
  plugins: [],
};
