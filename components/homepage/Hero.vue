<script setup></script>
<template>
   <section class="container pt-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         <div>
            <h1 class="text-4xl md:text-5xl md:leading-snug tracking-wide font-bold text-slate-900 dark:text-slate-200">
               Buat lu yg pengen latih skill
               <span class="inline-block shadow-lg bg-white dark:bg-slate-800 rounded-lg px-4 -rotate-1"> <p class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-500">Front-End Web</p> </span>, walaupun lu ga peduli.
            </h1>
            <p class="mt-8 mb-4 text-slate-600 leading-relaxed tracking-wide dark:text-slate-400">Gw buat ini biar lu semua latihan HTML dan CSS, jadi lu ga usah bingung mikirin design buat portfolio lu.</p>
            <ul class="list-disc pl-5 text-slate-600 dark:text-slate-400">
               <li class="py-1">Assets sudah disediakan</li>
               <li class="py-1">UI Design yang menarik</li>
               <li class="py-1">Bisa akses grup, jika kesulitan</li>
               <li class="py-1">Dengan Level : <span class="text-sm pemula">Pemula</span> <span class="text-sm junior">junior</span> <span class="text-sm suhu">suhu</span></li>
            </ul>
         </div>
         <div class="mx-auto">
            <nuxt-img src="/images/hero-img.png" loading="lazy" />
         </div>
      </div>
   </section>
</template>
