import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Base colors
        white: "hsla(0, 0%, 100%, 1)",
        black: "hsla(0, 0%, 0%, 1)",

        // Grays
        "gray-medium": "hsla(0, 0%, 23%, 1)",
        "gray-dark": "hsla(0, 0%, 25%, 1)",
        "gray-light": "hsla(252, 5%, 36%, 1)",
        "neutral-500": "hsla(0, 0%, 45%, 1)",
        "stone-100": "hsla(60, 5%, 96%, 1)",

        // Text
        "text-primary": "hsla(0, 0%, 23%, 1)",

        // Strokes
        "stroke-primary": "hsla(0, 0%, 23%, 1)",
        "stroke-secondary": "hsla(0, 0%, 56%, 1)",

        // Surfaces
        "surface-secondary": "hsla(0, 0%, 93%, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
