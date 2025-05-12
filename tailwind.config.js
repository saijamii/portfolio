/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F2F5F3", // Gray 01
          100: "#E4EBE6", // Gray 2
          200: "#B6BFB8", // Gray 3
          300: "#909692", // Gray 4
          400: "#909692", // Gray 5
          500: "#08872B", // Mint
          600: "#104C35", // Green 2
          700: "#08872B", // Green 3
          800: "#08872B", // Green 4
          900: "#104C35", // Green 5
        },
        secondary: {
          50: "#F2F5F3", // Gray 01
          100: "#E4EBE6", // Gray 2
          200: "#B6BFB8", // Gray 3
          300: "#909692", // Gray 4
          400: "#909692", // Gray 5
          500: "#101411", // Gray 6
          600: "#08872B", // Green 6
          700: "#232925", // Gray 5
          800: "#101411", // Gray 6
          900: "#000000", // Black
        },
        accent: {
          50: "#F2F5F3", // Gray 01
          500: "#08872B", // Mint
          700: "#5FED83", // Green 3
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Helvetica",
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
      },
      animation: {
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
