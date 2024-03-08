<script setup>
useHead({
   title: "About - Nuxt 3 with Tailwind",
});
</script>
<template>
   <main class="flex justify-center items-center flex-col h-screen">
      <h1 class="text-4xl md:text-5xl font-semibold text-gray-600 text-center">This About Page</h1>
      <p class="text-lg text-gray-400 mt-8 text-center">Wow this awesome!</p>
      <div class="absolute inset-x-0 mt-[-240px] -z-10 transform-gpu overflow-hidden blur-3xl">
         <div class="relative bg-green-300 blur-2xl h-40 max-w-[600px]"></div>
      </div>
      <div class="absolute right-0 -z-10 transform-gpu overflow-hidden blur-3xl">
         <div class="relative bg-green-300 blur-2xl h-40 w-96"></div>
      </div>
   </main>
</template>
