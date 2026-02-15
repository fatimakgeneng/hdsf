// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E4A7A",      // deep navy blue – trust, stability
        secondary: "#2E7D32",    // forest green – growth, health
        accent: "#C44536",        // warm terracotta – urgency, compassion
        background: "#F9FAFB",    // light gray – clean
        foreground: "#1F2937",    // dark gray – text
        // Optional: lighter variants for hover states
        primaryLight: "#2A5F9E",
        secondaryLight: "#3B8C42",
        accentLight: "#D35C4A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { transform: "translateY(10px)" }, to: { transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};