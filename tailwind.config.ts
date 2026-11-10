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
        // Master Prompt Light Design System Palette
        canvas: {
          DEFAULT: "#F8F9F6", // Main background
          pure: "#FFFFFF",    // Secondary / pure card background
          soft: "#EEF2EA",    // Soft section background
          border: "#E2E7DF",  // Subtle divider borders
          borderSoft: "#ECEFEA",
          dark: "#17251E",    // Dark contrast section background
          darkCard: "#1D2D25",
        },
        ink: {
          primary: "#202923",   // Primary typography
          secondary: "#68736C", // Secondary typography
          muted: "#8A948E",     // Micro labels & captions
          inverse: "#F8F9F6",   // Text on dark sections
        },
        accent: {
          green: "#A7D46F",     // Accent green
          greenHover: "#96C65D",
          greenDark: "#315C45", // Accent dark green for badges & contrast
          greenDarkHover: "#264835",
          lavender: "#ECE9FA",  // Soft lavender pastel
          lavenderBorder: "#DDD8F5",
          peach: "#F8E8DD",     // Soft peach pastel
          peachBorder: "#F2D8C7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(32, 41, 35, 0.04), 0 2px 6px -1px rgba(32, 41, 35, 0.02)",
        card: "0 10px 30px -4px rgba(32, 41, 35, 0.06), 0 4px 12px -2px rgba(32, 41, 35, 0.03)",
        elevated: "0 20px 40px -6px rgba(32, 41, 35, 0.08), 0 8px 16px -4px rgba(32, 41, 35, 0.04)",
        glowGreen: "0 0 35px -5px rgba(167, 212, 111, 0.35)",
        pill: "0 2px 10px rgba(32, 41, 35, 0.04)",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
