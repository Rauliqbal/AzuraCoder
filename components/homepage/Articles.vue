<script setup>
const { data: articles } = await useAsyncData("articles", () => queryContent("/article").find());
</script>
<template>
   <section class="container">
      <h2 class="title">Artikel terbaru</h2>
      <p class="subtitle mt-1">Artikel terbaru yang kami terbitkan</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
         <Card v-for="item in articles.slice(0, 3)" :url="item._id" :key="item.id" :feature-image="item.image" :title="item.title" :description="item.description" />
      </div>
   </section>
</template>
