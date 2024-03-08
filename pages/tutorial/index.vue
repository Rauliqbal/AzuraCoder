<script setup>
useHead({
   title: "Tutorial - SukaKode",
   meta: [
      { name: "keywords", content: "sukakode, belajar web, belajar html, belajar pemrograman web, belajar ui design, belajar figma, belajar coding, rauliqbal" },
      { name: "description", content: "Website SukaKode, membahas tentang tutorial pemrograman website dan UI Design untuk pemula yang mudah dipahami" },
   ],
});

const tutorial = [
   {
      title: "Belajar HTML",
      desc: "HTML adalah bahasa markup yang digunakan untuk membuat paragraf, heading, dan table pada halaman website.",
      image: "html.png",
      url: "html",
      bgGradient: "from-purple-400 via-pink-400 to-blue-500",
   },
   // {
   //    title: "Belajar CSS",
   //    desc: "CSS adalah untuk mendesain halaman website",
   //    image: "css.png",
   //    url: "css",
   //    bgGradient: "from-purple-400 via-blue-500 to-violet-500",
   // },
   // {
   //    title: "Belajar Figma",
   //    desc: "Figma adalah tools untuk membuat sebuah user interface yang biasa digunakan oleh seorang UI/UX Designer.",
   //    image: "figma.png",
   //    url: "figma",
   //    bgGradient: "from-blue-400 via-purple-400 to-red-500",
   //},
];
</script>
<template>
   <main class="container pt-28">
      <Swiper
         :modules="[SwiperAutoplay, SwiperPagination]"
         :slides-per-view="1"
         :loop="true"
         :space-between="40"
         :pagination="{
            dynamicBullets: true,
         }"
         :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
         }"
      >
         <SwiperSlide class="px-2 md:px-4 pb-10" v-for="tutor in tutorial" :key="tutor.id">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center p-6 lg:px-20 lg:py-8 bg-white drop-shadow-md hover:drop-shadow-xl transition-all duration-500 rounded-2xl">
               <div class="order-last md:order-first">
                  <h1 class="text-2xl md:text-3xl lg:text-5xl font-semibold">{{ tutor.title }}</h1>
                  <p class="lg:text-lg mt-4 tracking-wide leading-relaxed text-gray-500 line-clamp-3">{{ tutor.desc }}</p>
                  <NuxtLink class="btn-primary mt-8" :to="'/tutorial/' + tutor.url">Mulai Belajar</NuxtLink>
               </div>
               <div class="order-first md:order-last relative p-10 flex items-center justify-center">
                  <img class="scale-[.70] absolute z-10" :src="'/images/' + tutor.image" alt="" />
                  <img class="scale-100 blur-2xl opacity-30" :src="'/images/' + tutor.image" alt="" />
               </div>
            </div>
         </SwiperSlide>
      </Swiper>

      <div>
         <h2 class="text-3xl font-semibold my-6">Populer</h2>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="tutor in tutorial" :key="tutor">
               <NuxtLink :to="'/tutorial/' + tutor.url">
                  <div class="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-200 ease-out h-full">
                     <div :class="'rounded-xl overflow-hidden bg-gradient-to-br flex items-center justify-center h-52 ' + tutor.bgGradient">
                        <img :src="'/images/' + tutor.image" :alt="tutor.title" class="w-28" />
                     </div>
                     <div class="mt-6">
                        <h1 class="text-xl font-semibold line-clamp-2 mt-4">{{ tutor.title }}</h1>

                        <p class="mt-4 text-gray-500 line-clamp-2 tracking-wide">{{ tutor.desc }}</p>
                     </div>
                  </div>
               </NuxtLink>
            </div>
         </div>
      </div>
   </main>
</template>