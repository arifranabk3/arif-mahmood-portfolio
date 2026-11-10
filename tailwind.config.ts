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
        bg: {
          dark: "#0B0D0F",
          card: "#15191D",
          cardHover: "#1C2127",
          subtle: "#0F1215",
          border: "#232A31",
          borderSubtle: "#1B2127",
        },
        text: {
          primary: "#F5F5F0",
          secondary: "#9CA3AF",
          muted: "#6B7280",
          highlight: "#C6F36B",
        },
        accent: {
          DEFAULT: "#C6F36B",
          hover: "#B6E759",
          muted: "rgba(198, 243, 107, 0.12)",
          border: "rgba(198, 243, 107, 0.28)",
          glow: "rgba(198, 243, 107, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        bento: "0 20px 40px -15px rgba(0, 0, 0, 0.6)",
        "accent-glow": "0 0 35px -5px rgba(198, 243, 107, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
