/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logoone: '#571B97',
        logotwo : "#9C1DE8",
        basecolor: '#423465',
        customYellow: '#FAEE5A',
        ButtonColor: "#0D153A",
        ShinyColor: "#571B97",
        BgColor: "#CBBBE8"
      },
    },
  },
  plugins: [],
}

