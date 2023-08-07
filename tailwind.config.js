/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./client/**/*.html", "./client/**/*.js", "./client/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9e17e8",
          "secondary": "#fcb0bf",
          "accent": "#c4b0fc",
          "neutral": "#171f27",
          "base-100": "#e8e8e8",
          "info": "#61a1e5",
          "success": "#20a250",
          "warning": "#f2bb64",
          "error": "#f65d5a",
        },
      },
      "cupcake", "dark",
    ],
  },
};
