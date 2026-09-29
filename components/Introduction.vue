<template>
  <div ref="root" class="relative w-full min-h-screen flex items-center justify-center bg-[#1D1E22] overflow-hidden">

    <div class="absolute inset-0 bg-[url('/images/bgcoris1.webp')] bg-cover bg-center opacity-5"></div>
    <!-- Vignette : assombrit les bords pour concentrer le regard sur le logo -->
    <div class="absolute inset-0 intro-vignette"></div>

    <div class="relative z-10 flex flex-col items-center text-center px-6 py-16 w-full">
      <p class="intro-item text-[#DD193A] font-semibold uppercase tracking-[0.35em] text-sm md:text-lg">Bienvenue au</p>

      <div class="overflow-hidden w-full max-w-3xl mt-4">
        <img src="/images/logo-festival.webp" alt="Vodun Days" class="intro-logo w-full" />
      </div>

      <p class="intro-item font-display uppercase text-white text-xl md:text-3xl mt-6">Art, culture et spiritualité</p>

      <div class="intro-item flex h-1 w-24 mt-5 rounded-full overflow-hidden">
        <span class="flex-1 bg-[#108757]"></span>
        <span class="flex-1 bg-[#FFBE00]"></span>
        <span class="flex-1 bg-[#EB0000]"></span>
      </div>

      <p class="intro-item flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80 mt-5 text-sm md:text-base">
        <span class="flex items-center gap-2"><i class="ti ti-calendar-event text-[#FFBE00] text-lg"></i> 8, 9 et 10 janvier</span>
        <span class="flex items-center gap-2"><i class="ti ti-map-pin text-[#FFBE00] text-lg"></i> Ouidah, Bénin</span>
      </p>

      <button
        class="intro-item btn-glow mt-10 inline-flex items-center gap-3 bg-[#DD193A] hover:bg-white hover:text-[#DD193A] text-white font-semibold text-lg px-10 py-4 rounded-full transition-colors"
        @click="closeIntro"
      >
        Entrer <i class="ti ti-arrow-right"></i>
      </button>
    </div>

    <!-- Bande aux couleurs du drapeau, comme en bas du footer -->
    <div class="absolute bottom-0 inset-x-0 flex h-2">
      <div class="flex-1 bg-[#108757]"></div>
      <div class="flex-1 bg-[#FFBE00]"></div>
      <div class="flex-1 bg-[#EB0000]"></div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

const emit = defineEmits(['close'])
const root = ref(null)
let ctx

function closeIntro() {
  emit('close')
}

// La touche Entrée permet aussi d'entrer sur le site
function onKeydown(e) {
  if (e.key === 'Enter') closeIntro()
}

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.intro-logo', { opacity: 0, y: 200, duration: 1.6 })
      .from('.intro-item', { opacity: 0, y: 20, duration: 0.6, stagger: 0.12 }, '-=0.8')
  }, root.value)

  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  ctx?.revert()
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.intro-vignette {
  background: radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.55) 100%);
}

/* Halo qui pulse doucement autour du bouton */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(221, 25, 58, 0.55);
  }
  50% {
    box-shadow: 0 0 0 14px rgba(221, 25, 58, 0);
  }
}

.btn-glow {
  animation: glow 2s ease-in-out infinite;
}
</style>
