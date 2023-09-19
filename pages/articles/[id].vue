<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
   let article = queryContent().where({ _path: path }).findOne();
   let surround = queryContent().only(["_path", "title", "description", "image"]).findSurround(path);

   return {
      article: await article,
      surround: await surround,
   };
});

// SEO META
useHead({
   title: data.value.article.title,
   meta: [
      { name: "description", content: data.value.article.description },
      { name: "keywords", content: data.value.article.keywords },
      { property: "og:image", content: `/images/${data.value.article.image}` },
      { property: "og:title", content: data.value.article.title },
      { property: "og:description", content: data.value.article.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://sukakode.vercel.app${path}` },
      { property: "og:image", content: `https://sukakode.vercel.app/images/thumbnails/article/${data.value.article.featureImage}` },
   ],
});
</script>
<template>
   <ArticlepagePost />
</template>
<style>
article p img {
   border-radius: 0.75rem !important;
   height: 100%;
   width: 100%;
   object-fit: cover;
}
/* .prose a {
   text-decoration: none !important;
} */

blockquote {
   font-style: normal !important;
   padding: 2px 12px;
   border-radius: 8px;
   border: 1px solid #4f79b8 !important;
   color: #1d1d1d !important;
   background-color: #eff6ff;
}
blockquote p {
   margin: 10px 12px !important;
}
blockquote a {
   color: #4f79b8 !important;
   transition: 0.3s ease-in-out;
}
blockquote a:hover {
   color: #2c599c !important;
}

p,
strong {
   font-family: "Plus Jakarta Sans", sans-serif !important;
   line-height: 1.625 !important;
}

code {
   font-family: "JetBrains Mono", monospace !important;
}

.prose p code,
.prose li code {
   font-size: 16px;
   border-radius: 0.375rem;
   border-width: 1px;
   --tw-border-opacity: 1;
   border-color: rgb(209 213 219);
   --tw-bg-opacity: 1;
   background-color: rgb(249 250 251);
   padding-left: 0.5rem;
   padding-right: 0.5rem;
   padding-top: 0.01rem;
   padding-bottom: 0.01rem;
}
.prose code::before,
code::after {
   content: "" !important;
}

.prose-code {
   background-color: #191b22 !important;
   border-radius: 8px !important;
}

.line {
   color: #adbac7 !important;
}

.prose table {
   font-size: 16px;
   border-width: 1px;
}
.prose table thead {
   background-color: #f1f1f1;
}
.prose table tr th,
.prose table tr td {
   padding: 12px 16px;
   border-width: 1px;
   border-color: #d1d5db;
}

.copy-button {
   background-color: #c2c2c2;
}
</style>
