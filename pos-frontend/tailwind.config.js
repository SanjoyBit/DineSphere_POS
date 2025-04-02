/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 15px 40px rgba(0, 0, 0, 0.7)', // Custom heavy shadow
      },
      fontFamily: {
        rochester: ["Rochester", "cursive"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
