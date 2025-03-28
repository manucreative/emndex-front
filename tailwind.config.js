const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        zoomIn: "zoomIn 1s ease-in-out",
      },

      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      fontSize: {
        "title-2xl": ["72px", "90px"],
        "title-xl": ["60px", "72px"],
        "title-lg": ["48px", "60px"],
        "title-md": ["36px", "44px"],
        "title-sm": ["30px", "38px"],
        "theme-xl": ["20px", "30px"],
        "theme-sm": ["14px", "20px"],
        "theme-xs": ["12px", "18px"],
      },
      // boxShadow: {
      //   "theme-md":
      //     "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      //   "theme-lg":
      //     "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",

      //   "theme-sm":
      //     "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
      //   "theme-xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      //   "theme-xl":
      //     "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
      //   datepicker: "-5px 0 0 #262d3c, 5px 0 0 #262d3c",
      //   "focus-ring": "0px 0px 0px 4px rgba(70, 95, 255, 0.12)",
      //   "slider-navigation":
      //     "0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      //   tooltip:
      //     "0px 4px 6px -2px rgba(16, 24, 40, 0.05), -8px 0px 20px 8px rgba(16, 24, 40, 0.05)",
      // },
      // dropShadow: {
      //   "4xl": [
      //     "0 35px 35px rgba(0, 0, 0, 0.25)",
      //     "0 45px 65px rgba(0, 0, 0, 0.15)",
      //   ],
      // },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },
      // spacing: {
      //   4.5: "1.125rem",
      //   5.5: "1.375rem",
      //   6.5: "1.625rem",
      //   7.5: "1.875rem",
      //   8.5: "2.125rem",
      //   9.5: "2.375rem",
      //   10.5: "2.625rem",
      //   11.5: "2.875rem",
      //   12.5: "3.125rem",
      //   13: "3.25rem",
      //   13.5: "3.375rem",
      //   14.5: "3.625rem",
      //   15: "3.75rem",
      // },
    },
  },
  // plugins: [require("@tailwindcss/forms"), require("autoprefixer")],
};

