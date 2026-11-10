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
        // Master Balanced Visual System (45% Warm Neutral / 25% Deep Green & Charcoal / 20% White / 10% Accent)
        surface: {
          canvas: "#F1F0E9",       // Main warm neutral background
          pure: "#FFFFFF",         // Crisp white card surface
          soft: "#E7E9E1",         // Soft neutral surface
          charcoal: "#202923",     // Dark charcoal surfaces & cards
          charcoalDark: "#18201A", // Deeper charcoal for accents
          forest: "#193A2D",       // Deep forest green section & card surface
          forestDark: "#132820",   // Dark forest green base
          border: "#D8DDD4",       // Crisp divider border on light surfaces
          borderSoft: "#E2E6DF",   // Soft border
          borderDark: "#2B473A",   // Border on deep forest surfaces
          borderCharcoal: "#303E35", // Border on dark charcoal surfaces
        },
        ink: {
          primary: "#202923",      // Primary dark typography on light backgrounds
          secondary: "#58645D",    // Secondary text on light backgrounds (WCAG AAA)
          muted: "#7A877F",        // Subdued labels and micro-text
          onDark: "#FFFFFF",       // Pure white text on dark surfaces
          onDarkMuted: "#D1DAD3",  // Secondary text on dark surfaces
          forest: "#193A2D",       // Forest green headings on light surfaces
          forestSecondary: "#315C45", // Secondary green headings
        },
        accent: {
          lime: "#B7D878",         // Primary energetic accent lime
          limeHover: "#A5C765",
          forest: "#193A2D",       // Deep green buttons & badges
          forestHover: "#234D3D",
          greenSecondary: "#315C45", // Secondary green
          lavender: "#E9E5F4",     // Muted lavender for subtle bento tags
          lavenderBorder: "#D5CEEB",
          peach: "#F2E2D7",        // Muted peach for challenge bento tags
          peachBorder: "#E5C8B4",
        },
        // Backwards compatibility aliases for existing components
        canvas: {
          DEFAULT: "#F1F0E9",
          pure: "#FFFFFF",
          soft: "#E7E9E1",
          border: "#D8DDD4",
          borderSoft: "#E2E6DF",
          dark: "#202923",
          darkCard: "#193A2D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 10px -1px rgba(32, 41, 35, 0.05), 0 1px 3px -1px rgba(32, 41, 35, 0.03)",
        card: "0 10px 25px -4px rgba(32, 41, 35, 0.07), 0 4px 10px -2px rgba(32, 41, 35, 0.04)",
        elevated: "0 20px 40px -6px rgba(32, 41, 35, 0.10), 0 8px 16px -4px rgba(32, 41, 35, 0.05)",
        darkCard: "0 20px 40px -8px rgba(0, 0, 0, 0.35), 0 8px 16px -4px rgba(0, 0, 0, 0.20)",
        limeGlow: "0 0 25px -2px rgba(183, 216, 120, 0.45)",
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
