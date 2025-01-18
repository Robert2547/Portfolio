/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda",
        secondary: "#6e6aff",
        background: "#0f0c29",
        "background-light": "#1a1a3a",
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
      },
      backgroundImage: {
        "nebula-1":
          "linear-gradient(180deg, rgba(15, 12, 41, 0.9), rgba(48, 43, 99, 0.3), rgba(36, 36, 62, 0.9))",
        "nebula-2":
          "linear-gradient(180deg, rgba(15, 12, 41, 0.9), rgba(100, 255, 218, 0.1), rgba(36, 36, 62, 0.9))",
      },
    },
  },
  plugins: [],
};
