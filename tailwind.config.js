/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html",
    "./build/**/*.html"
  ],
  theme: {
    extend: {
      spacing: {
        60: "15rem",   // scroll-mt-60
        98: "24.5rem", // scroll-mt-98
      },
    },
  },
  plugins: [],
};