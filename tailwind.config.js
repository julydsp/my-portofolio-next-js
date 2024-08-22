/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mons: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        dark: "#0A192F",
      },
    },
  },
  plugins: [],
};

module.exports = config;
