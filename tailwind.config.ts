import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Farverne ligger som CSS-variabler i app/globals.css, så de skifter med sort/hvid-tema
        black:  "rgb(var(--c-black) / <alpha-value>)",
        black2: "rgb(var(--c-black2) / <alpha-value>)",
        gray:   "rgb(var(--c-gray) / <alpha-value>)",
        gray2:  "rgb(var(--c-gray2) / <alpha-value>)",
        gold:   "rgb(var(--c-gold) / <alpha-value>)",
        gold2:  "rgb(var(--c-gold2) / <alpha-value>)",
        cream:  "rgb(var(--c-cream) / <alpha-value>)",
        muted:  "rgb(var(--c-muted) / <alpha-value>)",
        danger: "rgb(var(--c-danger) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans:  ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeup: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeup: "fadeup 1s cubic-bezier(.2,.7,.2,1) forwards",
        ticker: "ticker 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
