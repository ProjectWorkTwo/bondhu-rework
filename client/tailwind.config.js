/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primaryColor: "#132A13",
        secondaryColor: "#31572C",
        grayColor: "#464646",
        whiteColor: "#ffffff",
      },
      fontFamily: {
        primaryFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
