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
   <div class="px-8 py-10 bg-white dark:bg-slate-900/40 rounded-xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
         <div>
            <div class="flex justify-between">
               <div class="flex items-center gap-1">
                  <p class="p-[2px] px-2 bg-slate-200 dark:bg-slate-800 text-[12px] font-semibold text-slate-500 rounded-md" v-for="i in tech" :key="i">
                     {{ i }}
                  </p>
               </div>
               <p :class="dificulty">{{ dificulty }}</p>
            </div>
            <h3 class="text-2xl font-semibold mt-4 dark:text-white">{{ title }}</h3>
            <p class="mt-4 tracking-wide dark:text-slate-400">{{ description }}</p>
            <NuxtLink :to="to" class="mt-8 btn-primary">Liat Challenge</NuxtLink>
         </div>
         <img class="rounded-xl" :src="'/images/thumbnails/' + image" :alt="'Design Preview ' + title" />
      </div>
   </div>
</template>
