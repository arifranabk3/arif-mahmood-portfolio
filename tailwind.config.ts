import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#090A0C",
          900: "#0F1115",
          850: "#14171D",
          800: "#1A1E24",
          700: "#242933",
          600: "#363D4B",
          500: "#525C6E",
          400: "#7E8B9E",
          300: "#A9B4C4",
        },
        sand: {
          50: "#FAFAF8",
          100: "#F5F5F0",
          200: "#EBEBE3",
          300: "#DCDCD2",
          400: "#B8B8AB",
          800: "#2C2D2A",
          900: "#181917",
        },
        lime: {
          400: "#C4F135",
          500: "#B2E620",
          600: "#9ECE0D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.04em",
        widest: "0.08em",
      },
      boxShadow: {
        editorial: "0 20px 40px -15px rgba(0, 0, 0, 0.4)",
        "lime-glow": "0 0 35px -5px rgba(196, 241, 53, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
