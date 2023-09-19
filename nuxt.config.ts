// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         meta: [{ name: "google-site-verification", content: "Dh5WebMpXLjyWXTl9crOY7Y3rTQ7c1Bgfxyvvz6p1XM" }],
         link: [
            {
               href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap",
               rel: "stylesheet",
            },
         ],
         script: [
            {
               src: "https://unpkg.com/akar-icons-fonts",
            },
         ],
      },
      pageTransition: { name: "page", mode: "out-in" },
   },
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   modules: ["@nuxt/content", "@nuxt/image", "nuxt-swiper", "@nuxtjs/color-mode"],
   colorMode: {
      classSuffix: "",
      preference: "light",
      fallback: "light",
   },
});
