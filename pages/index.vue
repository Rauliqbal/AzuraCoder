<script setup>
useHead({
   title: "AzuraCoder",
   link: [{ rel: "canonical", href: "https://azuracoder.vercel.app/" }],
   meta: [
      {
         name: "description",
         content: "AzuraCoder menyediakan assets website untuk latihan HTML, CSS, dan JavvaScript, Jadi lu ga usah bingung mikirin design buat portfolio lu.",
      },
      { property: "og:title", content: "AzuraCoder" },
      { property: "og:description", content: "AzuraCoder menyediakan assets website untuk latihan HTML, CSS, dan JavvaScript, Jadi lu ga usah bingung mikirin design buat portfolio lu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://azuracoder.vercel.app/" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://azuracoder.vercel.app/social.jpg" },
   ],
});
</script>
<template>
   <main>
      <LazyHomepageHero />
      <LazyHomepageChallenges />
   </main>
</template>
