<script setup>
defineProps({
   url: String,
   title: String,
   description: String,
   featureImage: String,
});

onMounted: ({
   // formatDate(date) {
   //    const options = { year: "numeric", month: "long", day: "numeric" };
   //    return new Date(date).toLocaleDateString("en", options);
   // },
});
</script>
<template>
   <NuxtLink :to="url">
      <div class="flex flex-col">
         <div class="rounded-xl overflow-hidden">
            <img :src="'/images/thumbnails/article/' + featureImage" width="640" height="480" :title="title" :alt="'Cover ' + title" />
         </div>
         <div class="px-1 mt-4">
            <h3 class="font-bold dark:text-white tracking-wide line-clamp-1 hover:underline">{{ title }}</h3>
            <p class="desc mt-1 line-clamp-2">{{ description }}</p>
         </div>
      </div>
   </NuxtLink>
</template>
