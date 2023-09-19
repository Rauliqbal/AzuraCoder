<script setup>
function showHide() {
   document.getElementById("hamburger").checked = false;
}

onMounted(() => {
   window.addEventListener("scroll", function () {
      let header = this.document.querySelector("header");
      // let navMenu = this.document.querySelector("#nav-menu");
      // let navLogo = this.document.querySelector("#nav-logo");
      // let navLogoSolid = this.document.querySelector("#nav-logo-solid");

      header.classList.add("fixed", window.scrollY > 0);
      header.classList.toggle("bg-sticky", window.scrollY > 0);
      header.classList.remove("absolute", window.scrollY > 0);

      // // navMenu.classList.toggle("lg:text-white", window.scrollY > 0);
      // navMenu.classList.toggle("!text-black", window.scrollY > 0);

      // navLogo.classList.toggle("hidden", this.window.scrollY > 0);
      // navLogoSolid.classList.toggle("!block", this.window.scrollY > 0);
   });
});

const colorMode = useColorMode();
const toggleTheme = () => {
   colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
   <header class="fixed inset-x-0 z-20 py-4 md:py-6 transition-all">
      <div class="container">
         <div class="flex items-center justify-between">
            <div class="relative">
               <NuxtLink to="/">
                  <h2 class="text-lg md:text-2xl font-semibold dark:text-slate-100">AzuraCoder/></h2>
               </NuxtLink>
            </div>
            <div class="flex items-center">
               <div class="md:hidden mr-4">
                  <div class="flex flex-row items-center justify-center">
                     <button v-show="colorMode.preference === 'light'" class="transition-transform duration-100 hover:scale-125" @click="toggleTheme">
                        <i class="text-xl ai-sun"></i>
                     </button>
                     <button v-show="colorMode.preference === 'dark'" class="transition-transform duration-100 hover:scale-125" @click="toggleTheme">
                        <i class="text-xl ai-moon text-slate-400"></i>
                     </button>
                  </div>
               </div>
               <input type="checkbox" class="peer hidden" name="hamburger" id="hamburger" />
               <label for="hamburger" class="relative peer-checked:hamburger z-30 block cursor-pointer md:hidden">
                  <span class="duration-200 inline-block w-7 focus:w-0 h-1 bg-black after:bg-black before:bg-black dark:bg-slate-400 dark:after:bg-slate-400 dark:before:bg-slate-400 rounded-xl after:rounded-xl before:rounded-xl"></span>
               </label>
               <div @click="showHide" class="absolute inset-0 h-screen bg-gray-900/30 opacity-0 hidden peer-checked:opacity-100 peer-checked:block transition-all duration-300 md:peer-checked:hidden"></div>
               <div class="peer-checked:translate-x-0 w-72 sm:w-96 fixed top-0 right-0 bottom-0 translate-x-full transition duration-300 md:w-auto md:static md:translate-x-0 z-20 ease-out">
                  <div class="flex flex-col md:items-center md:flex-row h-full">
                     <ul class="bg-white dark:bg-slate-800 dark:md:bg-transparent md:bg-transparent flex items-center px-7 pt-28 md:pb-0 pb-[38rem] space-y-8 md:px-0 md:space-y-0 flex-col md:flex-row md:space-x-10 md:pt-0">
                        <li><NuxtLink @click="showHide" class="dark:text-slate-400 capitalize tracking-wide hover:text-blue-500 transition ease-out duration-200 text-gray-800" to="/">Home</NuxtLink></li>
                        <li><NuxtLink @click="showHide" class="dark:text-slate-400 capitalize tracking-wide hover:text-blue-500 transition ease-out duration-200 text-gray-800" to="/">Challenges</NuxtLink></li>
                        <li><NuxtLink @click="showHide" class="dark:text-slate-400 capitalize tracking-wide hover:text-blue-500 transition ease-out duration-200 text-gray-800" to="/">Articles</NuxtLink></li>
                        <li class="text-slate-600 dark:text-white hidden md:block">|</li>
                        <li class="hidden md:block">
                           <div class="flex flex-row items-center justify-center">
                              <button v-show="colorMode.preference === 'light'" class="transition-transform duration-100 hover:scale-125" @click="toggleTheme">
                                 <i class="text-xl ai-sun"></i>
                              </button>
                              <button v-show="colorMode.preference === 'dark'" class="transition-transform duration-100 hover:scale-125" @click="toggleTheme">
                                 <i class="text-xl ai-moon text-slate-400"></i>
                              </button>
                           </div>
                        </li>
                        <li><NuxtLink to="http://bit.ly/ForumAzuraCoder" target="_blank" rel="external" class="btn-primary text-sm">Gabung Grub</NuxtLink></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>

<style>
#hamburger ~ label span::after,
#hamburger ~ label span::before {
   right: 0;
   transition-delay: 0.2s, 0s;
   transition-duration: 0.1s;
   transition-property: margin, transform;
   content: "";
   position: absolute;
   width: 20px;
   height: 4px;
}

#hamburger ~ label span::after {
   margin-top: 10px;
}

#hamburger ~ label span::before {
   margin-top: -10px;
}

#hamburger:checked ~ label span {
   background-color: transparent;
}

#hamburger:checked ~ label span:before,
#hamburger:checked ~ label span:after {
   transition-delay: 0s, 0.2s;
   margin-top: 0;
}

#hamburger:checked ~ label span:before {
   transform: rotate(45deg);
}

#hamburger:checked ~ label span:after {
   transform: rotate(-45deg);
}
</style>
