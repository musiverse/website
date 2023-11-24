/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Orbitron", "sans-serif"],
        new: ["Kdam Thmor Pro", "sans-serif"],
        primary: "Rajdhani",
        secondary: "Aldrich",
        tertiary: "Poppins",
      },
      colors: {
        thBlue: "#35EEED",
        thOrannge: "#F9A23F",
        thPurple: "#ED02FF",
        accent: "#F13024",
        primary: "0a0a0a",
      },
      backgroundImage: {
        videoBg: "url('/src/assets/video-bg.png')",
      },
    },
  },
  plugins: [],
};
