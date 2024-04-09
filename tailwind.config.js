/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "system-ui"],
        fraunces: ["Fraunces", "sans-serif"],
      },

      colors: {
        darkCyan: "#3C8067",
        Cream: "#F2EBE3",
        veryDarkBlue: "#1C232B",
        darkGrayishBlue: "#6C7289",
      },
    },
  },
  plugins: [],
};
