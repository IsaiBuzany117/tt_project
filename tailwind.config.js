module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   'background': '#5600c8',
    // },
  },
  plugins: [require("@tailwindcss/forms")],
};
