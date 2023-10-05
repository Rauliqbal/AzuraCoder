<script setup>
defineProps({
   to: String,
   title: String,
   description: String,
   image: String,
   tech: Array,
   dificulty: String,
});
</script>
<template>
   <div class="px-4 py-6 bg-white dark:bg-slate-800 rounded-xl">
      <div class="flex flex-col gap-4 items-center">
         <NuxtImg class="rounded-xl" :title="title" :src="'/images/thumbnails/challenge/' + image" width="640" height="480" :alt="'Design Preview ' + title" />
         <div>
            <div class="flex justify-between">
               <div class="flex items-center gap-1">
                  <p class="p-[2px] px-2 bg-slate-200 dark:bg-slate-700 text-[12px] font-semibold text-slate-500 dark:text-slate-400 rounded-md" v-for="i in tech" :key="i">
                     {{ i }}
                  </p>
               </div>
               <p :class="dificulty">{{ dificulty }}</p>
            </div>
            <h3 class="text-xl font-semibold mt-4 dark:text-white">{{ title }}</h3>
            <p class="mt-4 desc  line-clamp-2">{{ description }}</p>
            <NuxtLink :to="to" class="mt-8 btn-primary flex">Liat Challenge</NuxtLink>
         </div>
         
      </div>
   </div>
</template>
