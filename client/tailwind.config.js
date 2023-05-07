/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    colors: {
      main: "#001529",
      mainLight: "#1890ff",
      white: "#ffffff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#25282b",
      "gray-light": "#d3dce6",
      red: "#eb3627",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        inner: "inset -27px 0px 24px -26px rgba(150, 151, 161, 0.2)",
      },
    },
  },
};
