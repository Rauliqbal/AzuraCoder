<script setup>
defineProps({
   url: String,
   title: String,
   description: String,
   featureImage: String,
});
</script>
<template>
   <NuxtLink :to="url">
      <div class="flex flex-col">
         <div class="rounded-xl overflow-hidden">
            <img :src="'/images/thumbnails/article/' + featureImage" alt="" />
         </div>
         <div class="px-1 mt-4">
            <h3 class="font-bold tracking-wide line-clamp-1">{{ title }}</h3>
            <p class="text-slate-600 mt-1 line-clamp-2">{{ description }}</p>
         </div>
      </div>
   </NuxtLink>
</template>
