/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // add
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      fontSize: {
        fluid: ["calc(0.8vh + 1vmin + 1vmax)", "1.5"],
        "fluid-4xl": ["calc(4.8vh + 1.1vmin + 0.9vmax)", "1.5"],
      },
      colors: {
        lsgreen: "#33b3a6",
      },
      screens: {
        ll: {
          raw: "(min-aspect-ratio:1.65)",
        },
        sl: {
          raw: "(max-aspect-ratio:1.65) and (min-aspect-ratio: 1)",
        },
        lp: {
          raw: "(min-aspect-ratio: 0.65) and (max-aspect-ratio: 1)",
        },
        sp: {
          raw: "(max-aspect-ratio: 0.65)",
        },
        sq:{
          raw : '(aspect-ratio: 1)'
        }
      },
    },
  },
  plugins: [],
};
