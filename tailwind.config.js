/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0012FF",
        dark: "#363853",
        green: "#67D4CA",
        red: "#F28080",
        "dark-light": "#F8FAFB",
      },
    },
  },
  plugins: [],
};
