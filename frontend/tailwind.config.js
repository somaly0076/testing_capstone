/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'sm': {'max' : '576px'},
      // => @media (min-width: 576px) { ... }
      'lg': {'min' : '1004px'},
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
