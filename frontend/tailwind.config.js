/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseVignette: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.1 },
        },
      },
      animation: {
        'pulse-vignette': 'pulseVignette 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};