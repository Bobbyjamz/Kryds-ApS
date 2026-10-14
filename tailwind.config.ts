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
        // Farver taget direkte fra logoet
        black:  "#17181D",
        black2: "#1C1D23",
        gray:   "#222329",
        gray2:  "#2C2D34",
        gold:   "#C8A45A",
        gold2:  "#DDBF7E",
        cream:  "#F3EEE4",
        muted:  "#9A968C",
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
