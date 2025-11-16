<template>
  <div class="font-poppins  z-50 relative  ">
    <!-- Barre de navigation -->
    <nav class="flex justify-between items-center px-6 py-4">
    <!-- Logo -->
    <div>
      <img src="/images/logo-festival.png" alt="Logo Festival" class="logovday h-8" />
    </div>
    
    <!-- Hamburger bouton pour mobile -->
    <button
      class="md:hidden focus:outline-none"
      @click="isOpen = !isOpen"
      aria-label="Menu"
    >
      <i v-if="!isOpen" class="ti ti-menu text-2xl text-white"></i>
      <i v-else class="ti ti-x text-2xl text-white"></i>
    </button>
    
    <!-- Menu principal (desktop) -->
    <ul class="hidden md:flex gap-6 text-gray-800 font-medium text-white">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="menu-item box flex items-center gap-1 cursor-pointer"
      >
      
        <NuxtLink 
          :to="item.link"
          :class="[
            'transition-all duration-200',
            $route.path === item.link 
              ? 'text-orange-500 font-bold border-b-2 border-orange-500' 
              : 'hover:text-orange-300'
          ]"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>

    <!-- Menu mobile déroulant -->
    <transition name="fade">
      <ul
        v-show="isOpen"
        class="flex flex-col items-center gap-4 absolute w-full top-14 py-4 bg-white shadow-md md:hidden font-medium text-gray-800"
      >
        <li
          v-for="item in menuItems"
          :key="item.name"
          class="menu-item box flex items-center gap-2 cursor-pointer"
        >
         
          <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Menu items avec icônes Tabler
const menuItems = [
  { name: "Accueil", link: "/home", },
  { name: "Le Festival", link: "/festival",},
  { name: "Ouidah", link: "/ouidah",  },
  // { name: "Galerie", link: "/",  },
  // { name: "Contact", link: "/", }
]

// Variable pour menu mobile
const isOpen = ref(false)

// Animation GSAP
onMounted(() => {

  // Animation des items du menu
  gsap.from(".box", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.5
  })
    // Animation du logo
  gsap.from(".logovday", {
    x: -100,
    opacity: 0,
    duration: 2,
    ease: "power2.out"
  })
})
watch(isOpen, async (newVal) => {
  if (newVal) {
    await nextTick() // attendre que les éléments soient visibles dans le DOM
    gsap.from(".mobile-menu > .box", {
      y: -20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
    })
  }
})





</script>

<style scoped>
/* Transition pour menu mobile */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
