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
          bg: "#F5F3F0",
          sand: "#D6D3CE",
          sandLight: "#EBE8E3",
          hairline: "rgba(8, 8, 8, 0.10)",
          hairlineDark: "rgba(8, 8, 8, 0.25)",
          black: "#080808",
          muted: "#6A6567",
          stone: "#6A6567",
          bronze: "#6A6567",
          clay: "#B23A22",
          terracotta: "#B23A22",
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
