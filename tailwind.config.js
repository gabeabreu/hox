module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#ec2450",
      secondary: "#fafafa",
      tertiary: "#0a0a0a",
      soft: "#303030",
      transparent: "#ffffff00",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
