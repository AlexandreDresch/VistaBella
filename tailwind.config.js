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
        primaryHover: "#6E8AE9",
        secondary: "#F3F3FA",
        tertiary: "#DDDDDD",
        primaryText: "#141B2D",
      },
      borderRadius: {
        primary: "4px",
      },
    },
  },
  plugins: [],
};
