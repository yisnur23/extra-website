import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#683995",
        "primary-dark": "#5A2F80",
        "background-light": "#F8F8FA",
        "background-dark": "#0F172A",
        "card-light": "#FFFFFF",
        "card-dark": "#1E293B",
        "text-light": "#1F2937",
        "text-dark": "#F3F4F6",
        "subtext-light": "#6B7280",
        "subtext-dark": "#9CA3AF",
        "navy-accent": "#1e3a8a",
        "navy-dark": "#172554",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
