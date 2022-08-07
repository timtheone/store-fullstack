/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      width: {
        700: "700px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
