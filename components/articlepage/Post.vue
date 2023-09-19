<script setup></script>
<template>
   <main>
      <div class="container grid grid-cols-1 md:grid-cols-3 gap-6 items-start pt-28">
         <section class="col-span-2 bg-white dark:bg-black/40 border dark:border-slate-800 rounded-2xl p-4 md:p-10 shadow-md">
            <header class="border-b pb-12">
               <img class="w-full object-cover rounded-xl" :src="'/images/thumbnails/article/' + data.article.featureImage" :alt="'Thumbnail ' + data.article.title" />
               <h1 class="text-2xl md:text-4xl font-bold mt-8 dark:text-white">{{ data.article.title }}</h1>
               <ul class="flex gap-1 mt-4">
                  <li class="bg-gray-100 text-gray-400 px-3 py-1 rounded-md text-[12px] font-bold tracking-wide" v-for="tag in data.article.tags" :key="tag.id">{{ tag }}</li>
               </ul>

               <div class="flex justify-between items-center mt-6">
                  <a :href="data.article.author.profilUrl" class="flex items-center gap-2">
                     <img class="w-10 rounded-full" :src="'/images/users/' + data.article.author.imageUrl" alt="Rauliqbal a Front-End Developer" />
                     <span class="text-sm text-gray-500 font-medium hover:text-blue-500 transition">{{ data.article.author.name }}</span></a
                  >
                  <span class="text-sm text-gray-500 font-medium">{{ data.article.publishedAt.toLocaleString("en-IN", { year: "numeric", month: "long", day: "numeric" }) }}</span>
               </div>
            </header>

            <article class="prose mb-10 max-w-full w-full m-auto">
               <ContentRenderer :value="data.article" />
            </article>

            <!-- <DisqusComments :identifier="'/blog/' + path" /> -->
         </section>

         <aside class="col-span-2 md:col-span-1 sticky top-28 bg-white rounded-2xl shadow-md">
            <Toc :links="data.article.body.toc.links" />
         </aside>
      </div>
      <hr class="my-16" />

      <div class="container flex justify-center items-center flex-col">
         <img
            class="w-24 rounded-full"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1682569609088/dd2212ed-37c8-43c0-b94c-95f4c0ea262e.png?w=256&h=256&fit=crop&crop=entropy&auto=compress,format&format=webp"
            alt="Profile Rauliqbal"
         />

         <h6 class="text-gray-500 font-medium tracking-wide mt-6">WRITTEN BY</h6>
         <h2 class="font-semibold text-gray-900 text-2xl md:text-3xl"><a class="hover:text-blue-500 hover:underline transition-all" href="https://rauliqbal.my.id" target="_blank">Rauliqbal</a></h2>
         <p class="text-gray-500 tracking-wide leading-tight max-w-xl text-center mt-4">Hi, I'm Front-End Developer based in Indonesia. I like to write articles related to Front-End Developer and UI Designer.</p>
         <div class="flex gap-4 mt-4">
            <a class="p-2 hover:bg-gray-300 transition-all duration-200 ease-out rounded-md" href="https://github.com/Rauliqbal" target="_blank">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" class="ai ai-GithubFill fill-gray-600">
                  <g clip-path="url(#clip0_100_4)">
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                     />
                  </g>
                  <defs>
                     <clipPath id="clip0_100_4"><rect width="24" height="24" /></clipPath>
                  </defs>
               </svg>
            </a>
            <a class="p-2 hover:bg-gray-300 transition-all duration-200 ease-out rounded-md" href="https://www.linkedin.com/in/muhamad-raul-iqbal/" target="_blank">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" class="ai ai-LinkedinBoxFill fill-gray-600">
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0 2.063 2.063 0 0 1 4.125 0z"
                  />
               </svg>
            </a>

            <a class="p-2 hover:bg-gray-300 transition-all duration-200 ease-out rounded-md" href="https://youtube.com/@rauliqbal" target="_blank">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" class="ai ai-YoutubeFill fill-gray-600">
                  <g clip-path="url(#clip0_100_7)">
                     <path
                        d="M23.5 6.507a2.786 2.786 0 0 0-.766-1.27 3.05 3.05 0 0 0-1.338-.742C19.518 4 11.994 4 11.994 4a76.624 76.624 0 0 0-9.39.47 3.16 3.16 0 0 0-1.338.76c-.37.356-.638.795-.778 1.276A29.09 29.09 0 0 0 0 12c-.012 1.841.151 3.68.488 5.494.137.479.404.916.775 1.269.371.353.833.608 1.341.743 1.903.494 9.39.494 9.39.494a76.8 76.8 0 0 0 9.402-.47 3.05 3.05 0 0 0 1.338-.742c.37-.353.633-.792.765-1.27A28.38 28.38 0 0 0 24 12.023a26.579 26.579 0 0 0-.5-5.517zM9.602 15.424V8.577l6.26 3.424-6.26 3.423z"
                     />
                  </g>
                  <defs>
                     <clipPath id="clip0_100_7"><rect width="24" height="24" /></clipPath>
                  </defs>
               </svg>
            </a>
         </div>
      </div>
   </main>
</template>
