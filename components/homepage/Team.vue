<script setup>
const teams = [
   {
      name: "Rauliqbal",
      image: "raul-iqbal.jpeg",
      url: "@rauliqbal",
      role: "Founder",
   },
   {
      name: "Raisha Ramadanti",
      image: "raisha-ramadanti.jpeg",
      url: "@raisha",
      role: "Copywritting",
   },
   {
      name: "Qhof ZN",
      image: "qhof-zn.jpeg",
      url: "@qhofzn",
      role: "UI Designer",
   },
   {
      name: "DevKit",
      image: "dev-kit.jpeg",
      url: "",
      role: "AI Assistant",
   },
];
</script>
<template>
   <section class="container">
      <h2 class="title text-center">Team Kami</h2>
      <p class="subtitle mt-1 text-center">Dibalik konten yang berkualitas ada tim yang hebat</p>

      <div class="grid grid-cols-2 md:grid-cols-4 mt-10 gap-8 md:px-24">
         <div v-for="team in teams" :key="team" class="flex flex-col items-center">
            <img class="w-28 rounded-full" :src="'/images/users/' + team.image" width="112" height="112" :alt="'Photo ' + team.name" />
            <h3 class="text-sm lg:text-base text-slate-600 dark:text-white tracking-wide font-bold mt-6">{{ team.name }}</h3>
            <p class="text-sm lg:text-base text-indigo-500 font-semibold">{{ team.role }}</p>
         </div>
      </div>
   </section>
</template>
