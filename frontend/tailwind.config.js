/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'max': '980px'}, // Mobile-first approach for max-width
      'lg': {'min': '1004px'}, // Desktop-first approach for min-width
      'md': {'min': '768px'}, 

    },
    extend: {},
  },
  plugins: [],
};

