<script setup>
useHead({
   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
});
</script>

<template>
   <Navbar />
   <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
   transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
   opacity: 0;
}
</style>
