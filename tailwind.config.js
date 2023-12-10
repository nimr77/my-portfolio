/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      profile:{
        
      },
      colors:{
        "bg-1-color": "#1B1B1B",
        "nav-color": "#171717",
        "nav-glow": "#8B0285",
      }
    },
        fontFamily: {

              'fontFamily': ['Inter',]

    },
  },
  plugins: [],
};