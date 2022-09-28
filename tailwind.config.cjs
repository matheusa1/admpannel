/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html", "./src/assets/**/*.svg"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      dropShadow: {
        login: "5px 3px 20px rgba(255, 255, 255, 0.4)",
      },
      colors: {
        subtitle: "#9FA2B4",
        "bg-black": "#101010",
        icon: "#5459EA",
        black: "#2E3A59",
        bgGreen: "rgba(36, 193, 143, 0.1)",
        bgGreenActive: "#24C18F",
      },
      backgroundImage: {
        shs: "linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 66.67%);",
      },
    },
  },
  plugins: [],
};
