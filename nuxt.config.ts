// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         meta: [{ name: "google-site-verification", content: "Dh5WebMpXLjyWXTl9crOY7Y3rTQ7c1Bgfxyvvz6p1XM" }],
         link: [
            {
               href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono&display=swap",
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
   modules: ["@nuxt/content", "@nuxt/image", "nuxt-swiper"],
});
