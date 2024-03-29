/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontFamily: {
      sans: [
        // "bitter",
        "Cambria",
        "Georgia",
        "serif",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1739px",
    },
    extend: {
      colors: {
        "brand-white": "#f4f4f8",
        "brand-green": {
          DEFAULT: "#20bf55",
          light: "rgba(244,244,248,0.2)",
          dark: "#091619",
        },
        "brand-blue": {
          DEFAULT: "#1663fe",
          dark: "#4985fe",
        },
        "brand-black": "#050c0e",
      },
    },
  },
};
