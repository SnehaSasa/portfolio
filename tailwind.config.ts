import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "SF Pro Display", "system-ui", "sans-serif"],
      },
      colors: {
        aurora: {
          deep: "#020617",
          navy: "#0b0f2a",
          indigo: "#1e1b4b",
          violet: "#312e81",
        },
        navy: {
          950: "#020617",
          900: "#0b0f2a",
          800: "#151c30",
          700: "#1a2340",
          600: "#242d4a",
        },
        glow: {
          violet: "rgba(139, 92, 246, 0.25)",
          indigo: "rgba(99, 102, 241, 0.25)",
          blue: "rgba(59, 130, 246, 0.22)",
          cyan: "rgba(34, 211, 238, 0.22)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #0f1424 0%, #1a1f3a 40%, #151c30 70%, #0a0e1a 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        "gradient-text": "linear-gradient(135deg, #a78bfa 0%, #818cf8 25%, #60a5fa 50%, #22d3ee 100%)",
        "gradient-button": "linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #2563eb 100%)",
      },
      boxShadow: {
        "glow-violet": "0 0 40px rgba(139, 92, 246, 0.22)",
        "glow-indigo": "0 0 45px rgba(99, 102, 241, 0.22)",
        "glow-cyan": "0 0 30px rgba(34, 211, 238, 0.2)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.2)",
        "glass-lg": "0 16px 48px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        "float": "float 20s ease-in-out infinite",
        "float-slow": "float 25s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xl: "24px",
        "2xl": "40px",
      },
    },
  },
  plugins: [],
};

export default config;
