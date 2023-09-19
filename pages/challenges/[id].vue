<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
   let article = queryContent().where({ _path: path }).findOne();
   let surround = queryContent().only(["_path", "title", "description", "image"]).findSurround(path);

   return {
      article: await article,
      surround: await surround,
   };
});

useHead({
   title: `${data.value.article.title} | AzuraCoder`,
});
</script>
<template>
   <main>
      <section class="container">
         <div class="bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-10 shadow-md">
            <Swiper
               :modules="[SwiperAutoplay, SwiperPagination]"
               :slides-per-view="1"
               :space-between="30"
               :loop="true"
               :autoplay="{
                  delay: 2500,
               }"
               :pagination="{
                  clickable: true,
                  dynamicBullets: true,
               }"
            >
               <SwiperSlide class="pb-10" v-for="slide in data.article.featureImage.url" :key="slide">
                  <img class="w-full md:h-[36rem] object-cover rounded-xl" :src="'/images/thumbnails/challenge/' + slide" :alt="'Thumbnail ' + data.article.title" />
               </SwiperSlide>
            </Swiper>

            <h1 class="text-2xl md:text-4xl font-bold my-8 dark:text-white">{{ data.article.title }}</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
               <div>
                  <div class="flex justify-between">
                     <div class="flex items-center gap-1">
                        <p class="p-[2px] px-2 bg-slate-200 text-[12px] font-semibold text-slate-500 rounded-md" v-for="i in data.article.tech" :key="i">
                           {{ i }}
                        </p>
                     </div>
                     <p :class="data.article.dificulty">{{ data.article.dificulty }}</p>
                  </div>
                  <p class="desc mt-4">{{ data.article.description }}</p>
               </div>
               <div>
                  <a :href="'/files/' + data.article.fileAssets" download class="mt-8 btn-primary">Download Assets</a>
               </div>
            </div>
         </div>

         <div class="grid md:grid-cols-3 mt-8 gap-8">
            <div class="order-last md:order-first col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-10 shadow-md">
               <h2 class="title mb-4">Pesan dari gw <i class="ai-pin"></i></h2>
               <p class="desc">
                  Sebelum mulai challenges, kamu harus download file assets nya terlebih dahulu yang sudah di sediakan, kamu bisa menggunakan tool apa aja untuk menyelesaikan challenge ini, jadi kamu dapat berlatih dan mencobanya.
               </p>

               <p class="desc mt-4">
                  Gw pengen lu nyoba sesuatu yang lebih hebat, cobalah nulis style lu dengan Sass (CSS with superpowers). dan coba memperkirakakn waktu untuk menyelesaikan projek ini. apakah waktu pengerjaannya sesuai perkiraan lu.
               </p>

               <p class="desc mt-4">Semoga sukses ya broo, sorry bro kalo ada kata yg menyinggung atau kurang baik🙏</p>
            </div>

            <div class="order-first md:order-last col-span-2 md:col-span-1 bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-10 shadow-md h-fit">
               <h2 class="title mb-4">UI Designer <i class="ai-image"></i></h2>
               <div class="flex items-center gap-4">
                  <img class="w-16 border-4 p-1 border-blue-400 rounded-full" :src="'/images/users/' + data.article.author.imageUrl" :alt="data.article.title" />
                  <div>
                     <p class="font-semibold tracking-wide text-lg dark:text-white">{{ data.article.author.name }}</p>
                     <a class="font-medium hover:text-blue-500 transition ease-out dark:text-slate-400" :href="data.article.author.profileUrl" target="_blank">Kunjungi Profile <i class="ai-link-out"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </main>
</template>

<style>
.swiper-pagination-bullet {
   width: 16px !important;
   height: 4px !important;
   border-radius: 4px;
}

.swiper-pagination-bullet-active {
   width: 24px !important;
}
</style>
