// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "AzuraCoder",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "google-site-verification",
          content: "Wqhi12LxOdL03DLwnoEbTzW9F_mwTrseHwEgfSPc9Pw",
        },
        {
          name: "title",
          content: "AzuraCoder",
        },
        {
          name: "description",
          content:
            "AzuraCoder menyediakan assets website untuk latihan HTML, CSS, dan JavvaScript, Jadi lu ga usah bingung mikirin design buat portfolio lu.",
        },
        {
          name: "keywords",
          content:
            "azuracoder, azura coder, challenge html css, belajar html, belajar css, challenge frontend",
        },
        { property: "og:title", content: "AzuraCoder" },
        {
          property: "og:description",
          content:
            "AzuraCoder menyediakan assets website untuk latihan HTML, CSS, dan JavaScript, Jadi lu ga usah bingung mikirin design buat portfolio lu.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://azuracoder.vercel.app/" },
        {
          property: "og:image",
          content: "https://azuracoder.vercel.app/social.jpg",
        },

        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://azuracoder.vercel.app/" },
        { property: "twitter:title", content: "AzuraCoder" },
        {
          property: "twitter:description",
          content:
            "AzuraCoder menyediakan assets website untuk latihan HTML, CSS, dan JavaScript, Jadi lu ga usah bingung mikirin design buat portfolio lu.",
        },
        {
          property: "twitter:image",
          content: "https://azuracoder.vercel.app/social.jpg",
        },
      ],
      link: [
        { rel: "canonical", href: "https://azuracoder.vercel.app/" },
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
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-swiper",
    "@nuxtjs/color-mode",
    "nuxt-disqus",
  ],
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },

  extends: "@nuxt-themes/typography",
  content: {
    highlight: {
      theme: "github-dark",
    },
  },

  disqus: {
    shortname: "azuracodere",
  },
});
