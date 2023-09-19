<script setup></script>
<template>
   <section class="container pt-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
         <div>
            <h1 class="text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-snug md:leading-snug xl:leading-snug tracking-wide font-bold text-slate-900 dark:text-white">
               Buat lu yg pengen latih skill
               <span class="inline-block shadow-lg bg-white dark:bg-slate-800 rounded-lg px-4 -rotate-1"> <p class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-500">Front-End Web</p> </span>, walaupun lu ga peduli
            </h1>
            <p class="mt-8 mb-4 desc">Gw buat ini biar lu semua latihan HTML dan CSS, jadi lu ga usah bingung mikirin design buat portfolio lu.</p>
            <ul class="list-disc pl-5 text-slate-600 dark:text-slate-400">
               <li class="py-1">Assets sudah disediakan</li>
               <li class="py-1">UI Design yang menarik</li>
               <li class="py-1">Bisa akses grup, jika kesulitan</li>
               <li class="py-1">Dengan Level : <span class="text-sm pemula">Pemula</span> <span class="text-sm junior">junior</span> <span class="text-sm suhu">suhu</span></li>
            </ul>
         </div>
         <div class="mx-auto">
            <div class="relative">
               <nuxt-img class="px-5" src="/images/hero-img.png" alt="Level-up your coding skill with design handoff" width="672" height="506" />
               <div class="top-28 animate-floating animation-delay-300 absolute bg-white dark:bg-slate-700 shadow-xl rounded-full p-4 md:p-5">
                  <img class="w-6 sm:w-8 md:w-12" alt="HTML" src="/images/html.svg" width="40" height="40" />
               </div>
               <div class="-top-6 left-48 animate-floating animation-delay-100 absolute bg-white dark:bg-slate-700 shadow-xl rounded-full p-4 md:p-5">
                  <img class="w-6 sm:w-8 md:w-12" alt="CSS" src="/images/css.svg" width="40" height="40" />
               </div>
               <div class="bottom-12 right-20 animate-floating animation-delay-200 absolute bg-white dark:bg-slate-700 shadow-xl rounded-full p-4 md:p-5">
                  <img class="w-6 sm:w-8 md:w-12" alt="javascript" src="/images/javascript.svg" width="40" height="40" />
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
