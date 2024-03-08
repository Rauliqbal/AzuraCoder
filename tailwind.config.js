/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
   theme: {
      fontFamily: {
         plusJakartaPlus: ["Plus Jakarta Sans", "sans-serif"],
         JetBrainsMono: ["JetBrains Mono", "monospace"],
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
      keyframes: {
         floating: {
            "0%": { transform: "translateY(0px) scale(1)" },
            "50%": { transform: "translate(16px) scale(1.1)" },
            "100%": { transform: "translate(14px, 20px) scale(1)" },
         },
      },
      animation: {
         floating: "floating 5s infinite alternate",
      },

      extend: {},
   },
   plugins: [],
};
