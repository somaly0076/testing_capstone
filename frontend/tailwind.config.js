/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'h1': '2.75rem',
        'h1p': '2.375rem',
        'h2': '2rem',
        'h3': '1.75rem',
        'h4': '1.4375rem',
        'h4p': '1.3125rem',
        'h5': '1.25rem',
        'h6': '1.125rem',
        'p': '1rem',
        'pp': '0.75rem',
      },
    },
    screens: {
      'sm': {'max': '980px'}, // Mobile-first approach for max-width
      'lg': {'min': '1004px'}, // Desktop-first approach for min-width
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

