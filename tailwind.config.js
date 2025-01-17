/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: "#88d8ea",
          DEFAULT: "#1e90ff",
          dark: "#001440",
        },
        sand: {
          light: "#f2d0a4",
          DEFAULT: "#e8b27d",
          dark: "#c17f59",
        },
      },
    },
  },
  plugins: [],
};
