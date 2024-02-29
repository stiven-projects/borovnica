/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#451952",
          hover: "#A33BC2",
          focus: "#381442",
          light: "rgb(173, 79, 201, 0.3)",
        },
        secondary: "#E8BCB9",
        details: "#1D1A39"
      },
      keyframes: {
        'fade-in': {
          '0%': {opacity: 0, transform: `translateX(-2rem)`},
          '100%': {opacity: 1, transform: `translateX(0)`}
        },
        'appear-k': {
          '0%' : {opacity: 0, transform: `scale(0)`},
          '50%': {opacity: 1, transform: `scale(1.25)`},
          '100%': {opacity: 1, transform: `scale(1)`}
        }
      },
      animation: {
        'fade-in-right': 'fade-in 0.5s both',
        'appear': 'appear-k 0.25s both',
      }
    },
  },
}

