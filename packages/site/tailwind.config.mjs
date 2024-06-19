/** @type {import('tailwindcss').Config} */
export default {
  content: [`./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`],
  theme: {
    extend: {
      colors: {
        cream: {
          50: `#fffbeb`,
          100: `#ffefd8`,
          200: `#ffdfb5`,
          300: `#ffcf92`,
          400: `#ffae4d`,
          500: `#ff9d08`,
          600: `#e67d07`,
          700: `#b65d06`,
          800: `#944c05`,
          900: `#7a3f04`,
          950: `#5e2a00`,
        },
      },
      fontFamily: {
        poppins: [`Poppins`, `sans-serif`],
      },
    },
  },
  plugins: [],
};
