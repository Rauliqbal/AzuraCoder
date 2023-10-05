<script setup>
useHead({
   title: "AzuraCoder",
   link: [{ rel: "canonical", href: "https://azuracoder.vercel.app/" }],
   meta: [
      {
         name: "title",
         content: "AzuraCoder"
      },
      {
         name: "description",
         content: "AzuraCoder menyediakan assets website untuk latihan HTML, CSS, dan JavvaScript, Jadi lu ga usah bingung mikirin design buat portfolio lu.",
      },
      {
         name: "keywords",
         content: "azuracoder, azura coder, challenge html css, belajar html, belajar css, challenge frontend"
      },
      { property: "og:title", content: "AzuraCoder" },
      { property: "og:description", content: "AzuraCoder menyediakan assets website untuk latihan HTML, CSS, dan JavaScript, Jadi lu ga usah bingung mikirin design buat portfolio lu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://azuracoder.vercel.app/" },
      { property: "og:image", content: "https://azuracoder.vercel.app/social.jpg" },

      { property: "twitter:card", content: "summary_large_image"},
      {property: "twitter:url", content: "https://azuracoder.vercel.app/"},
      {property: "twitter:title", content: "AzuraCoder"},
      {property: "twitter:description", content: "AzuraCoder menyediakan assets website untuk latihan HTML, CSS, dan JavaScript, Jadi lu ga usah bingung mikirin design buat portfolio lu."},
      {property: "twitter:image", content: "https://azuracoder.vercel.app/social.jpg"}
   ],
});
</script>
<template>
   <main>
      <LazyHomepageHero />
      <LazyHomepageChallenges />
      <LazyHomepageArticles />
      <LazyHomepageTeam />
   </main>
</template>
