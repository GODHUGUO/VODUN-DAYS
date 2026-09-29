<template>
  <div
    :class="[
      'font-poppins sticky top-0 z-50 transition-colors duration-300',
      scrolled || isOpen ? 'bg-[#1D1E22]/95 backdrop-blur shadow-lg' : 'bg-transparent'
    ]"
  >
    <!-- Barre de navigation -->
    <!-- h-16 = 64px : les heros remontent de 64px pour passer sous le header -->
    <nav class="max-w-6xl mx-auto h-16 flex justify-between items-center px-6">
    <!-- Logo -->
     <!-- /home et non / : "/" réaffiche l'écran d'accueil -->
     <NuxtLink to="/home">
    <img src="/images/logo-festival.png" alt="Logo Vodun Days" class="logovday h-8" />
  </NuxtLink>

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
    <ul class="hidden md:flex items-center gap-8 font-medium text-white">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="menu-item box flex items-center gap-1 cursor-pointer"
      >

        <NuxtLink
          :to="item.link"
          :class="[
            'py-1 transition-all duration-200',
            $route.path === item.link
              ? 'text-[#FFBE00] font-semibold border-b-2 border-[#FFBE00]'
              : 'hover:text-[#FFBE00]'
          ]"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
      <li class="box">
        <NuxtLink
          to="/ouidah#infos"
          class="inline-flex items-center gap-2 bg-[#DD193A] hover:bg-white hover:text-[#DD193A] px-5 py-2 rounded-full font-semibold transition-colors"
        >
          <i class="ti ti-map-pin"></i> Infos pratiques
        </NuxtLink>
      </li>
    </ul>
  </nav>

    <!-- Menu mobile déroulant -->
    <transition name="fade">
      <ul
        v-show="isOpen"
        class="mobile-menu flex flex-col gap-1 absolute w-full top-full px-6 pb-6 pt-2 bg-[#1D1E22]/95 backdrop-blur shadow-lg md:hidden font-medium text-white"
      >
        <li
          v-for="item in menuItems"
          :key="item.name"
          class="menu-item box"
        >
          <NuxtLink
            :to="item.link"
            :class="[
              'block py-3 border-b border-white/10',
              $route.path === item.link ? 'text-[#FFBE00]' : ''
            ]"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
        <li class="box mt-4">
          <NuxtLink
            to="/ouidah#infos"
            class="flex items-center justify-center gap-2 bg-[#DD193A] px-5 py-3 rounded-full font-semibold"
          >
            <i class="ti ti-map-pin"></i> Infos pratiques
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
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

// Fond sombre dès qu'on quitte le haut de page
const scrolled = ref(false)
function onScroll() {
  scrolled.value = window.scrollY > 40
}

// Referme le menu mobile après un changement de page
const route = useRoute()
watch(() => route.fullPath, () => {
  isOpen.value = false
})

// Animation GSAP
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

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

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
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
