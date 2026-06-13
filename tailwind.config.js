/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        brand: {
          green: "#16a34a",
          "green-dark": "#15803d",
          navy: "#0f1f3d",
          "navy-light": "#1a2f54",
          blue: "#1d4ed8",
          cyan: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -15px rgba(22,163,74,0.45)",
        "glow-blue": "0 20px 60px -15px rgba(29,78,216,0.5)",
        soft: "0 10px 40px -12px rgba(15,31,61,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(30px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "bounce-dot": {
          "0%,80%,100%": { transform: "translateY(0)", opacity: "0.4" },
          "40%": { transform: "translateY(-5px)", opacity: "1" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "75%,100%": { transform: "scale(2)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drive: {
          "0%": { transform: "translateX(-12vw)" },
          "100%": { transform: "translateX(100vw)" },
        },
        "road-dash": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "-80px 0" },
        },
        "wheel-bob": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        shimmer: "shimmer 2.2s infinite",
        "bounce-dot": "bounce-dot 1.4s infinite ease-in-out",
        "ping-slow": "ping-slow 2.5s cubic-bezier(0,0,0.2,1) infinite",
        marquee: "marquee 28s linear infinite",
        drive: "drive 9s linear infinite",
        "road-dash": "road-dash 0.6s linear infinite",
        "wheel-bob": "wheel-bob 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
