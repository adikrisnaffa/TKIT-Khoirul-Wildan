import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFBF2",
        ink: "#1F3347",
        sky: { 50: "#EFF8FF", 100: "#DCEFFD", 200: "#BDE1FA", 400: "#5BB5EF", 500: "#2E9BE6", 600: "#1B7FC7", 700: "#1666A2" },
        sun: { 100: "#FFF1BF", 300: "#FFDC5E", 400: "#FFCF33" },
        coral: { 100: "#FFE1D1", 400: "#FF9B62", 500: "#F5783A", 600: "#D9591D" },
        leaf: { 100: "#D9F3DF", 400: "#5CC97A", 600: "#2E9E52" },
      },
      fontFamily: { display: ["var(--font-display)", "system-ui", "sans-serif"], body: ["var(--font-body)", "system-ui", "sans-serif"] },
      boxShadow: { soft: "0 10px 30px -12px rgba(46,155,230,.25)", card: "0 14px 40px -18px rgba(31,51,71,.25)" },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } } },
      animation: { float: "float 6s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
