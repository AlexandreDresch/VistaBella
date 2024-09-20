/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  fontSize: {
    sm: ['8px', '10px'],
    lg: ['20px', '28px'],
    xl: ['24px', '32px'],
  }
}