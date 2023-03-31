const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        brand: {
          '50': '#fff3f1',
          '100': '#ffe4e1',
          '200': '#ffcdc7',
          '300': '#ffaba0',
          '400': '#ff7a6a',
          '500': '#f84f3a',
          '600': '#e6321c',
          '700': '#c12714',
          '800': '#a02314',
          '900': '#842418',
        },
      },
    },
  },
  plugins: [],
}

