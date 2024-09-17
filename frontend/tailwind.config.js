/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'max': '980px'},  // Mobile-first approach for max-width
      'lg': {'min': '1004px'}, // Desktop-first approach for min-width
    },
    extend: {},
  },
  plugins: [],
});
