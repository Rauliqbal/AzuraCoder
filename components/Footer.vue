<script setup>
const date = new Date();
</script>
<template>
   <footer class="bg-slate-100 dark:bg-slate-900/40">
      <div class="flex flex-col justify-center items-center py-8">
         <div class="flex gap-12">
            <a href="" class="text-slate-400 text-2xl hover:text-slate-600 transition ease-out duration-300">
               <i class="ai-instagram-fill"></i>
            </a>
            <a href="" class="text-slate-400 text-2xl hover:text-slate-600 transition ease-out duration-300">
               <i class="ai-whatsapp-fill"></i>
            </a>
            <a href="" class="text-slate-400 text-2xl hover:text-slate-600 transition ease-out duration-300">
               <i class="ai-github-fill"></i>
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
