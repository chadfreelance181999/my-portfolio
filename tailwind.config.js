/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.sky,
        secondary: colors.fuchsia,
        // Custom light and dark mode colors
        lightBackground: "#ffffff", // Light mode background
        lightBackgroundShade: "#f3f3f3", // Light mode background
        lightText: "#121212",       // Light mode text
        darkBackground: "#121212",  // Dark mode background
        darkText: "#ffffff",        // Dark mode text
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
