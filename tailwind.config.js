/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#EBC500",
        header: "#2D2B2B",
        normal: "#666565",
      },
    },

    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
