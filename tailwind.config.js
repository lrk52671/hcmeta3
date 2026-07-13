/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066CC",
          light: "#3388DD",
          dark: "#004999",
          bg: "rgba(0, 102, 204, 0.06)",
          "bg-hover": "rgba(0, 102, 204, 0.12)",
        },
        secondary: {
          DEFAULT: "#6600CC",
          light: "#8833DD",
          dark: "#4D0099",
        },
        accent: {
          DEFAULT: "#FF6600",
          light: "#FF8833",
          dark: "#CC5200",
        },
        "bg-main": "#FFFFFF",
        "bg-main-alt": "#F5F7FA",
        "bg-elevated": "#FFFFFF",
        "bg-surface": "#F8F9FB",
        "bg-hero-dark": "#0F1B2D",
        "text-primary": "#111827",
        "text-secondary": "#4B5563",
        "text-tertiary": "#6B7280",
        "text-muted": "#9CA3AF",
        border: "#E5E7EB",
        "border-light": "#D1D5DB",
      },
      fontFamily: {
        display: ["Inter", "Noto Sans SC", "sans-serif"],
        body: ["Inter", "Noto Sans SC", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
      lineHeight: {
        tight: "1.15",
        snug: "1.35",
        normal: "1.7",
        relaxed: "1.8",
      },
      letterSpacing: {
        display: "-0.025em",
        body: "0",
        wide: "0.05em",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.04)",
        md: "0 4px 12px rgba(0, 0, 0, 0.05)",
        lg: "0 10px 24px rgba(0, 0, 0, 0.05)",
        float: "0 20px 40px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 12px 32px rgba(0, 102, 204, 0.10)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
      },
      keyframes: {
        "float-glow": {
          "0%, 100%": { opacity: "0.3", transform: "translateY(0) scale(1)" },
          "50%": { opacity: "0.7", transform: "translateY(-20px) scale(1.1)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "50%": { transform: "scale(1.2)", opacity: "0.1" },
          "100%": { transform: "scale(0.8)", opacity: "0.5" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-glow": "float-glow 4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
