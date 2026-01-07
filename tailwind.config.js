
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '##FFD800',
        'brand-secondary': '#69388B',
        'brand-tertiary': '#A076C4',
      },
    },
  },
  plugins: [],
}
