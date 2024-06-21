/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "network-error": "url('../public/images/newBackground.jpg')",
        "about-bg": "url('../public/images/aboutBackground3.jpg')",
        "about-bg4": "url('../public/images/aboutBackground4.jpg')",

      },
    },
  },
  plugins: [],
};
