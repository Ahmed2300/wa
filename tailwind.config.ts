import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F3EEE7",
          sand: "#E8E0D5",
          sandLight: "#F8F5F0",
          hairline: "rgba(36, 33, 29, 0.12)",
          hairlineDark: "rgba(36, 33, 29, 0.25)",
          black: "#24211D",
          muted: "#7A7369",
          bronze: "#8A7A5C",
          clay: "#B08968",
        },
      },
      fontFamily: {
        serif: ["var(--font-eb-garamond)", "EB Garamond", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "Hanken Grotesk", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.22em",
        subtle: "0.08em",
        wide: "0.15em",
        monograph: "0.28em",
      },
      borderRadius: {
        none: "0px",
        sharp: "0px",
      },
    },
  },
  plugins: [],
} satisfies Config;
