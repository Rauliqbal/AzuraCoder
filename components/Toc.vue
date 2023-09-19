<script setup>
defineProps(["links"]);

const flattenLinks = (links) => {
   let _links = links
      .map((link) => {
         let _link = [link];
         if (link.children) {
            let flattened = flattenLinks(link.children);
            _link = [link, ...flattened];
         }
         return _link;
      })
      .flat(1);

   console.log({ _links });

   return _links;
};
</script>

<template>
   <nav class="p-4 rounded-2xl">
      <h5 class="text-xl font-bold">Daftar isi 🔥</h5>
      <hr class="mt-5" />
      <ul class="mt-4">
         <!-- render each link with depth class -->
         <li v-for="link of flattenLinks(links)" :key="link.id" :class="`py-1 toc-link _${link.depth}`">
            <a :href="`#${link.id}`">
               {{ link.text }}
            </a>
         </li>
      </ul>
   </nav>
</template>

<style scoped>
.toc-links {
   @apply flex flex-col gap-2 px-2;
}

.toc-link {
   @apply text-slate-500;
}

.toc-link._3 {
   @apply pl-3;
}

.toc-link._4 {
   @apply pl-6;
}

.toc-link._undefined {
   @apply pl-8;
}
</style>
