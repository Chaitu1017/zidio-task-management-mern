module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00ffcc", // optional neon highlight
        primary: "#10B981", // emerald green
        secondary: "#F472B6", // soft pink
        darkBg: "#111827", // dark mode background
        glass: "rgba(255, 255, 255, 0.05)", // glass effect
        background: "#fdfdfd", // light mode background
      },
      boxShadow: {
        neon: "0 0 15px #00ffcc", // updated to greenish neon
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)", // subtle soft shadow
        glow: "0 0 12px rgba(244, 114, 182, 0.7)", // pink glow effect
      },
      backdropBlur: {
        sm: "4px", // small blur for glassmorphism
      },
      animation: {
        gradient: "gradient 6s ease infinite", // longer, smoother gradient
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      darkMode: "class", // enable class-based dark mode
    },
  },

  plugins: [],
};
