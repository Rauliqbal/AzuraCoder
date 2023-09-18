/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
   content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
   theme: {
      fontFamily: {
         plusJakartaPlus: ["Plus Jakarta Sans", "sans-serif"],
      },
      container: {
         center: true,
         padding: "1rem",
         screens: {
            md: "920px",
            lg: "1024px",
            xl: "1060px",
            1440: "1280px",
         },
      },
      extend: {},
   },
   plugins: [],
};
