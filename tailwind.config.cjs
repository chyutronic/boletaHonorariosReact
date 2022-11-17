/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {
        sm: "8px",
        md: "16px",
        lg: "30px",
        xl: "48px",
        principal: "64px",
      },
    },
  },
  plugins: [],
};
