/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '980px'}, // Mobile-first approach for max-width
      'lg': {'min': '1007px'}, // Desktop-first approach for min-width
    },
    extend: {
      spacing: {
        '10': '10px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '80': '80px',
        '100': '100px',
      },
      maxWidth: {
        'container': '886px',
      },
      fontSize: {
        'h1'  : '2.75rem',
        'h1p' : '2.375rem',
        'h2'  : '2rem',
        'h3'  : '1.75rem',
        'h4'  : '1.4375rem',
        'h4p' : '1.3125rem',
        'h5'  : '1.25rem',
        'h6'  : '1.125rem',
        'p'   : '1rem',
        'pp'  : '0.75rem',
      },
    },
  },
  variants: {},
  plugins: [],
}