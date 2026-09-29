<template>
  <div :class="['mb-8', center ? 'text-center' : '']">
    <p
      :class="[
        'text-xs md:text-sm font-semibold uppercase tracking-[0.25em]',
        dark ? 'text-[#FFBE00]' : 'text-[#DD193A]'
      ]"
    >
      {{ eyebrow }}
    </p>

    <h2
      :class="[
        'font-display uppercase text-4xl md:text-5xl leading-tight mt-3',
        dark ? 'text-white' : 'text-[#1D1E22]'
      ]"
    >
      {{ title }}
    </h2>

    <!-- Trait aux couleurs du drapeau, repris du footer -->
    <div :class="['flex h-1 w-24 mt-4 rounded-full overflow-hidden', center ? 'mx-auto' : '']">
      <span class="flex-1 bg-[#108757]"></span>
      <span class="flex-1 bg-[#FFBE00]"></span>
      <span class="flex-1 bg-[#EB0000]"></span>
    </div>

    <p
      v-if="intro"
      :class="[
        'mt-6 text-lg leading-relaxed max-w-2xl',
        center ? 'mx-auto' : '',
        dark ? 'text-white/70' : 'text-gray-600'
      ]"
    >
      {{ intro }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  intro: { type: String, default: '' },
  dark: { type: Boolean, default: false },
  center: { type: Boolean, default: false },
})
</script>
