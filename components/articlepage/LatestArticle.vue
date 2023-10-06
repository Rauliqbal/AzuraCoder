<script setup>
const {data : article} = await useAsyncData("articles" , () => queryContent("/article").sort({publishedAt: -1 }).find())
const showFormattedDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}
</script>
<template>
  <section class="container pt-32 md:pt-40">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="order-last md:order-first">
        <h3 class="md:text-3xl font-semibold dark:text-white">{{ article[0].title }}</h3>
        <p class="desc mt-4 mb-8">{{ article[0].description }}</p>
        <div class="flex items-center gap-2 dark:text-slate-400">
          <i class=" text-xl ai-calendar"></i>
          <span class="text-sm ">{{ showFormattedDate(article[0].publishedAt) }}</span>
        </div>
        <div class="flex items-center gap-2 dark:text-slate-400">
          <i class=" text-xl ai-file"></i>
          <span class="text-sm ">Ditulis oleh {{ article[0].author.name }}</span>
        </div>
        <NuxtLink :to="article[0]._path" class="btn-primary mt-10">Baca selengkapnya</NuxtLink>
      </div>
      <NuxtImg class="rounded-xl" :src="'/images/thumbnails/article/'+article[0].featureImage"/>
    </div>
  </section>
</template>