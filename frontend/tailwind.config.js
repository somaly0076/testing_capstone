/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "980px" }, // => @media (max-width: 980px) { ... }
        lg: { min: "1004px" }, // => @media (min-width: 1004px) { ... }
      },
    },
  },
  plugins: [],
};
