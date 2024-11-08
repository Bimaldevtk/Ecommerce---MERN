/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        foreground: '#333333', // Replace with your desired color for foreground text
        primary: '#1D4ED8', // Replace with your desired primary color
      },
    },
  },
  plugins: [],
}
