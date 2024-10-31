/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'dark-pattern': "url('../public/dark-pattern.webp')",
        'light-pattern': "url('../public/light-pattern.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

