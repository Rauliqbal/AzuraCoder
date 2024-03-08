<script setup>
const route = useRoute().params.id;
</script>
<template>
   <main class="container py-24">
      <section class="bg-white rounded-2xl p-4 md:p-6 shadow-md ">
         <!-- <header class="border-b pb-12">
            <img class="w-full object-cover rounded-xl" :src="'/images/thumbnails/' + data.article.image" :alt="'Thumbnail ' + data.article.title" />
            <h1 class="text-2xl md:text-4xl font-bold mt-8">{{ data.article.title }}</h1>
            <ul class="flex gap-1 mt-4">
               <li class="bg-gray-100 text-gray-400 px-3 py-1 rounded-md text-[12px] font-bold tracking-wide" v-for="tag in data.article.tags" :key="tag.id">{{ tag }}</li>
            </ul>

            <div class="flex justify-between items-center mt-6">
               <a href="https://rauliqbal.my.id" class="flex items-center gap-2">
                  <img class="w-10" src="~/assets/images/profile.png" alt="Rauliqbal a Front-End Developer" />
                  <span class="text-sm text-gray-500 font-medium hover:text-blue-500 transition">Rauliqbal</span></a
               >
               <span class="text-sm text-gray-500 font-medium">{{ data.article.date }}</span>
            </div>
         </header> -->
         <!-- <hr /> -->
         <article class="prose">
            <LazyContentDoc :path="'/tutorial/' + route" />
         </article>
      </section>

      <!-- <div class="h-screen flex flex-col items-center justify-center">
         <img class="max-w-[580px] w-full" src="~/assets/images/404.png" alt="" />
         <NuxtLink class="btn-primary" to="/tutorial">Kembali</NuxtLink>
      </div> -->
   </main>
</template>