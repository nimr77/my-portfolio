/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(139, 2, 133, 255)",
          "0 0px 65px rgba(139, 2, 133, 255)",
        ],
      },
      profile: {},
      colors: {
        "bg-1-color": "#1B1B1B",
        "nav-color": "#171717",
        "nav-glow": "#8B0285",
      },
    },
    fontFamily: {
      fontFamily: ["Inter"],
    },
  },
  plugins: [],
};
