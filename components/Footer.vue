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
   <footer class="bg-slate-100 dark:bg-slate-900/40">
      <div class="flex flex-col justify-center items-center py-8">
         <div class="flex gap-12">
            <a v-for="socmed in socialMedia" :key="socmed.id" :href="socmed.url" target="_blank" class="text-slate-400 text-2xl hover:text-slate-600 transition ease-out duration-300">
               <i :class="socmed.icon"></i>
            </a>
         </div>
         <div class="mt-6">
            <span class="text-sm text-slate-600 dark:text-slate-400"
               >&copy; <span class="font-semibold">2022 - {{ date.getFullYear() }} <a class="border-b border-dashed border-blue-400" href="https://rauliqbal.my.id" target="_blank">Rauliqbal</a></span> All rights reserved</span
            >
         </div>
      </div>
   </footer>
</template>
