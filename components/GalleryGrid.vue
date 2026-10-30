<template>
  <div>
    <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
      <li v-for="(item, index) in items" :key="item.id" class="relative">
        <button
          type="button"
          class="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-[#1D1E22] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#DD193A]/40"
          :aria-label="$t('commun.agrandir', { titre: caption(item) })"
          @click="activeIndex = index"
        >
          <img
            :src="item.src"
            :alt="caption(item)"
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </button>

        <button
          v-if="removable"
          type="button"
          class="absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#C2152F] shadow hover:bg-[#DD193A] hover:text-white"
          :aria-label="$t('commun.supprimerElement', { titre: caption(item) })"
          @click="$emit('remove', item.id)"
        >
          <i class="ti ti-trash text-lg"></i>
        </button>
      </li>
    </ul>

    <!-- Visionneuse, comme la galerie de la page d'accueil -->
    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="active"
          class="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          @click.self="activeIndex = null"
        >
          <button type="button" class="absolute top-4 right-4 text-3xl text-white/80 hover:text-white" :aria-label="$t('commun.fermer')" @click="activeIndex = null">
            <i class="ti ti-x"></i>
          </button>
          <button
            v-if="items.length > 1"
            type="button"
            class="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:left-6"
            :aria-label="$t('commun.precedent')"
            @click="move(-1)"
          >
            <i class="ti ti-chevron-left"></i>
          </button>

          <img :src="active.src" :alt="caption(active)" class="max-h-[80vh] max-w-[85vw] rounded-xl shadow-2xl" />

          <button
            v-if="items.length > 1"
            type="button"
            class="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 md:right-6"
            :aria-label="$t('commun.suivant')"
            @click="move(1)"
          >
            <i class="ti ti-chevron-right"></i>
          </button>

          <p class="absolute inset-x-0 bottom-4 px-4 text-center text-sm text-white/80">
            {{ activeIndex + 1 }} / {{ items.length }} · {{ caption(active) }}
          </p>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
const props = defineProps({
  // Photos avec id, src, et titre ou nom
  items: { type: Array, required: true },
  // Affiche un bouton pour retirer chaque élément (édition du portfolio)
  removable: { type: Boolean, default: false },
})
defineEmits(['remove'])

const activeIndex = ref(null)
const active = computed(() => (activeIndex.value === null ? null : props.items[activeIndex.value]))

const caption = (item) => item.titre || item.nom || ''

function move(step) {
  activeIndex.value = (activeIndex.value + step + props.items.length) % props.items.length
}

function onKeydown(event) {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') activeIndex.value = null
  if (event.key === 'ArrowRight') move(1)
  if (event.key === 'ArrowLeft') move(-1)
}

// Bloque le scroll de la page quand la visionneuse est ouverte
watch(activeIndex, (value) => {
  document.body.style.overflow = value === null ? '' : 'hidden'
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
