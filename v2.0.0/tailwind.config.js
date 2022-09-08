/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "bitter",
        "Cambria",
        "Georgia",
        "serif",
        ...defaultTheme.fontFamily.sans
      ]
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px"
    },
    extend: {
      colors: {
        "brand-white": "#f4f4f8",
        "brand-green": {
          DEFAULT: "#20bf55",
          dark: "#091619"
        },
        "brand-blue": {
          DEFAULT: "#1663fe",
          dark: "#4985fe"
        },
        "brand-black": "#050c0e"
      }
    }
  },
  plugins: []
};
