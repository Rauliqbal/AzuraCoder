<script setup>
const { data: articles } = await useAsyncData("articles", () => queryContent("/article").sort({ publishedAt: -1 }).find());
</script>
<template>
   <section class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
         <Card v-for="item in articles.slice(1)" :url="item._path" :key="item.id" :feature-image="item.featureImage" :title="item.title" :description="item.description" />
      </div>
   </section>
</template>
