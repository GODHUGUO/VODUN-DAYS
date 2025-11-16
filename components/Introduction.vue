<template>
  <div class="relative   w-full h-screen fixed flex items-center justify-center bg-[#1D1E22] overflow-hidden">
    
    <div class="absolute inset-0 bg-[url('/images/bgcoris1.jpeg')] bg-cover bg-center opacity-5 overflow-y-hidden"></div>

   
    <div class=" text-[#DD193A] flex flex-col items-center justify-center z-10 px-4">
      <div class="font-bold text-5xl textacc text-center">BIENVENUE AU</div>
      <div class=" overflow-hidden">
        <img src="/images/logo-festival.webp " class="logovday " />
      </div>
      <button  class="bg-[#DD193A] mt-8  btn-pop px-8 py-2 rounded-lg text-white font-semibold" @click="closeIntro">
        Entrez ici
      </button>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

onMounted(() => {
 gsap.from(".logovday", { 
    opacity: 0,
     y: 200, 
     duration: 2, 
      });
});
const emit = defineEmits(['close'])

function closeIntro() {
  
  emit('close', )
}
</script>

<style scoped>
@keyframes pop {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.btn-pop {
  animation: pop 1s ease-in-out infinite;
  
}
/* .textacc{
  opacity: 0;
} */
</style>
