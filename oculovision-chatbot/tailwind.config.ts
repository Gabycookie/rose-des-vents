import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "oculo-blue": "#0075C9",
        "oculo-blue-dark": "#005A9E",
        "oculo-blue-light": "#E8F4FD",
        "oculo-gray": "#ACADAE",
        "oculo-dark": "#1A1A2E",
        "oculo-bg": "#F8F9FA",
        "oculo-white": "#FFFFFF",
        "oculo-text": "#333333",
        "oculo-text-light": "#767676",
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "Roboto", "system-ui", "sans-serif"],
      },
      boxShadow: {
        chat: "0 8px 32px rgba(0, 117, 201, 0.15)",
        bubble: "0 4px 16px rgba(0, 117, 201, 0.3)",
      },
      animation: {
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "slide-up": "slideUp 0.3s ease-out",
        "fade-in": "fadeIn 0.2s ease-out",
      },
      keyframes: {
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
