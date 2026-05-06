/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gman-purple': {
          50: '#f5ebf9',
          100: '#e5d1f0',
          200: '#b99dc5',
          300: '#9d7ba8',
          400: '#684078',
          500: '#5d2b7a',
          600: '#4d2366',
          700: '#3d1c52',
          800: '#2e153d',
          900: '#1f0e29',
        },
        'gman-gold': {
          50: '#faf8f3',
          100: '#f5f0e5',
          200: '#d9c18f',
          300: '#caa14d',
          400: '#b88d3a',
          500: '#a67929',
          600: '#7d5a22',
          700: '#644719',
          800: '#4a3513',
          900: '#31230d',
        }
      }
    },
  },
  plugins: [],
}

