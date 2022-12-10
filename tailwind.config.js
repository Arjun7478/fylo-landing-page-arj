/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "hsl(243, 87%, 12%)",
        "desaturated-blue": "hsl(238, 22%, 44%)",
        "Bright-Blue": "hsl(224, 93%, 58%)",
        "Moderate-Cyan": "hsl(170, 45%, 43%)",
        "Light-Grayish-Blue": "hsl(240, 75%, 98%)",
        "Light-Gray": "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
