<script setup>
const { data: challenges } = await useAsyncData("challenges", () => queryContent("/challenges").find());
</script>
<template>
   <section class="container">
      <h2 class="title">Tantangan terbaru</h2>
      <p class="subtitle mt-1">Tantangan terbaru yang kami terbitkan</p>

      <article class="flex flex-col-reverse gap-6 mt-6">
         <div v-for="list in challenges" :key="list.id">
            <ChallengeCard :to="list._path" :title="list.title" :description="list.description" :image="list.featureImage.url[0]" :tech="list.tech" :dificulty="list.dificulty" :dificulty-class="list.class" />
         </div>
      </article>
   </section>
</template>
