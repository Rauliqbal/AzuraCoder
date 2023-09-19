<script setup>
const date = new Date();

const socialMedia = [
   {
      name: "instagram",
      icon: "ai-instagram-fill",
      url: "https://www.instagram.com/azuracoder.id/",
   },
   {
      name: "whatsapp",
      icon: "ai-whatsapp-fill",
      url: "http://bit.ly/ForumAzuraCoder",
   },
   {
      name: "github",
      icon: "ai-github-fill",
      url: "#",
   },
];
</script>
<template>
   <footer class="bg-slate-100 dark:bg-slate-800">
      <div class="flex flex-col justify-center items-center py-8">
         <div class="flex gap-12">
            <NuxtLink v-for="socmed in socialMedia" :key="socmed.id" :to="socmed.url" target="_blank" rel="external" class="text-slate-400 text-2xl hover:text-slate-600 transition ease-out duration-300">
               <i :class="socmed.icon"></i>
            </NuxtLink>
         </div>
         <div class="mt-6">
            <span class="text-sm text-slate-600 dark:text-slate-400"
               >&copy; <span class="font-semibold">2022 - {{ date.getFullYear() }} <NuxtLink class="border-b border-dashed border-blue-400" to="https://rauliqbal.my.id" target="_blank" rel="external">Rauliqbal</NuxtLink></span> All rights
               reserved</span
            >
         </div>
      </div>
   </footer>
</template>
