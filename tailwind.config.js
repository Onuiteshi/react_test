/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#1A345F",
        },
        primary: {
          DEFAULT: "#446FDB",
          light: "#EEF0FC",
        },
      },
      boxShadow: {
        card: "0 3px 10px rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [],
};
