<template>
  <section class="relative bg-[#DD193A] text-white overflow-hidden">
    <!-- Motif de points discret -->
    <div class="absolute inset-0 opacity-10 cta-pattern"></div>

    <div class="relative max-w-4xl mx-auto px-6 py-14 md:py-16 text-center reveal">
      <h2 class="font-display uppercase text-4xl md:text-6xl leading-tight">{{ title }}</h2>
      <p class="mt-4 text-lg text-white/90 max-w-2xl mx-auto">{{ text }}</p>

      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          :to="primary.to"
          class="inline-flex items-center justify-center gap-2 bg-white text-[#DD193A] font-semibold px-8 py-3 rounded-full hover:bg-[#1D1E22] hover:text-white transition-colors"
        >
          {{ primary.label }} <i class="ti ti-arrow-right"></i>
        </NuxtLink>
        <NuxtLink
          v-if="secondary"
          :to="secondary.to"
          class="inline-flex items-center justify-center gap-2 border-2 border-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#DD193A] transition-colors"
        >
          {{ secondary.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, default: '' },
  primary: { type: Object, required: true },
  secondary: { type: Object, default: null },
})
</script>

<style scoped>
.cta-pattern {
  background-image: radial-gradient(circle, #fff 1.5px, transparent 1.5px);
  background-size: 22px 22px;
}
</style>
