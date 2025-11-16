<template>
  <div>
    <transition name="fade">
      <Introduction v-if="showIntro" @close="goToSite()" class="relative z-50" />
    </transition>

<!--  
    <div v-if="!showIntro">
      <h1 class="text-3xl text-center mt-10">Bienvenue sur le site 🎉</h1>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Introduction from '../components/Introduction.vue'
const router = useRouter()
// definePageMeta({
//   layout: 'site'
// })

const showIntro = ref(true)
function goToSite() {
  showIntro.value = false

  // petit délai pour laisser la transition fade se terminer
  setTimeout(() => {
    router.push('/home') // redirige vers la vraie page du site
  }, 800)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
