<script setup>
const props = defineProps({
  error: Object,
});

const error = useError();
if (error.value.statusCode === 404 || "404") {
  error.value.message = "Oops! Halaman tidak ditemukan 😔";
}

const handleError = () => clearError({ redirect: "/" });
</script>
<template>
  <Navbar />
  <main class="flex flex-col items-center justify-center py-24">
    <img src="/images/404.png" alt="Oops! Page not found 😔" />
    <h2 class="text-base md:text-3xl  leading-relaxed font-semibold text-center mt-4">
     {{ error.message }}
    </h2>
    <hr />

    <button class="btn-primary mt-8" @click="handleError">Back to home</button>
  </main>
  <Footer/>
</template>
