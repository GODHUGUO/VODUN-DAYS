<template>
  <section class="relative bg-[#DD193A] text-white overflow-hidden">
    <!-- Motif de points discret -->
    <div class="absolute inset-0 opacity-10 cta-pattern"></div>

    <div class="relative max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 text-center md:text-left reveal">
      <div>
        <h2 class="font-display uppercase text-xl md:text-2xl leading-tight">{{ title }}</h2>
        <p v-if="text" class="mt-1 text-sm text-white/90 max-w-xl mx-auto md:mx-0">{{ text }}</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-2 justify-center shrink-0">
        <NuxtLink
          :to="primary.to"
          class="inline-flex items-center justify-center gap-2 bg-white text-[#DD193A] text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#1D1E22] hover:text-white transition-colors"
        >
          {{ primary.label }} <i class="ti ti-arrow-right"></i>
        </NuxtLink>
        <NuxtLink
          v-if="secondary"
          :to="secondary.to"
          class="inline-flex items-center justify-center gap-2 border-2 border-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white hover:text-[#DD193A] transition-colors"
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
