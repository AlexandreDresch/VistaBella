/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: "Merriweather",
        opensans: "Open Sans",
      },
      colors: {
        primary: "#1C3988",
        secondary: "#F3F3FA",
        primaryText: "#141B2D",
      },
    },
  },
  plugins: [],
};
