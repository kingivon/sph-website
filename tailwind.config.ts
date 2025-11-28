import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F7931E",
          50: "#FEF5EC",
          100: "#FDEBD9",
          200: "#FBD7B3",
          300: "#F9C38D",
          400: "#F8AF56",
          500: "#F7931E",
          600: "#E67A05",
          700: "#B45E04",
          800: "#824303",
          900: "#502802",
        },
        charcoal: {
          DEFAULT: "#2D2D2D",
          50: "#F5F5F5",
          100: "#E8E8E8",
          200: "#D1D1D1",
          300: "#BABABA",
          400: "#8C8C8C",
          500: "#5E5E5E",
          600: "#474747",
          700: "#2D2D2D",
          800: "#1F1F1F",
          900: "#0F0F0F",
        },
      },
    },
  },
  plugins: [],
};

export default config;
