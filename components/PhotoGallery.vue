<template>
  <div :class="['gallery', dark ? 'gallery-dark' : '']">
    <!-- Filtres par catégorie (si la galerie en définit) -->
    <div
      v-if="categoryTabs.length"
      class="no-scrollbar -mx-6 mb-8 flex gap-2 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:justify-center md:px-0"
    >
      <button
        v-for="tab in categoryTabs"
        :key="tab.key"
        type="button"
        :class="['filter', category === tab.key ? 'filter-active' : '']"
        :aria-pressed="category === tab.key"
        @click="category = tab.key"
      >
        {{ tab.label }}
        <span class="text-xs tabular-nums opacity-60">{{ tab.count }}</span>
      </button>
    </div>

    <!-- Mosaïque -->
    <div ref="grid" class="gallery-grid">
      <button
        v-for="(item, index) in visible"
        :key="item.file"
        type="button"
        :class="['tile group', SHAPES[shape(index)]]"
        :aria-label="`Agrandir la photo : ${item.title}`"
        @click="activeIndex = index"
      >
        <img
          :src="item.md"
          :srcset="`${item.md} 720w, ${item.full} 1440w`"
          :sizes="shape(index) === 'tall' ? '(min-width: 768px) 25vw, 50vw' : '(min-width: 768px) 50vw, 100vw'"
          :alt="item.title"
          :style="item.focus ? { objectPosition: item.focus } : null"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />

        <!-- Voile et icône d'agrandissement au survol, sans légende -->
        <span class="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"></span>
        <span class="absolute right-3 top-3 flex h-9 w-9 scale-75 items-center justify-center rounded-full bg-white/90 text-lg text-[#1D1E22] opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100">
          <i class="ti ti-arrows-maximize"></i>
        </span>
      </button>
    </div>

    <!-- Progression, bouton « voir plus » et crédit -->
    <div class="mt-10 flex flex-col items-center gap-5 text-center">
      <div class="flex flex-col items-center gap-2">
        <p :class="['text-sm tabular-nums', dark ? 'text-white/60' : 'text-gray-500']">
          {{ visible.length }} sur {{ filtered.length }} photos
        </p>
        <div :class="['h-0.5 w-40 overflow-hidden rounded-full', dark ? 'bg-white/15' : 'bg-gray-200']">
          <div class="h-full rounded-full bg-[#DD193A] transition-all duration-500" :style="{ width: `${(visible.length / filtered.length) * 100}%` }"></div>
        </div>
      </div>

      <button
        v-if="remaining > 0"
        type="button"
        :class="['btn', dark ? 'border-2 border-white/25 text-white hover:border-white hover:bg-white hover:text-[#1D1E22]' : 'btn-dark']"
        @click="showMore"
      >
        <i class="ti ti-photo-plus text-lg"></i>
        Voir plus de photos
        <span class="text-sm opacity-60">({{ remaining }})</span>
      </button>

      <a
        :href="GALLERY_SOURCE.url"
        target="_blank"
        rel="noopener"
        :class="[
          'inline-flex items-center gap-2 text-xs transition-colors',
          dark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-[#DD193A]',
        ]"
      >
        <i class="ti ti-brand-facebook text-base"></i>
        Source des photos : {{ GALLERY_SOURCE.label }}
      </a>
    </div>

    <PhotoLightbox v-model:index="activeIndex" :photos="filtered" :source="GALLERY_SOURCE" />
  </div>
</template>

<script setup>
const props = defineProps({
  // { dir, photos: [{ file, title, category?, focus? }], categories?: { clé: libellé } }
  gallery: { type: Object, required: true },
  // Version pour fond sombre
  dark: { type: Boolean, default: false },
  // Nombre de photos affichées au départ, puis à chaque « voir plus »
  pageSize: { type: Number, default: 12 },
})

// Motif de 12 tuiles qui remplit la grille sans trou, sur 4 colonnes comme sur 2.
// Un bloc sur deux, la grande tuile passe de gauche à droite pour rythmer la mosaïque.
const BLOCKS = [
  { 0: 'big', 6: 'wide' },
  { 2: 'big', 5: 'wide' },
]
const SHAPES = {
  tall: 'row-span-2',
  wide: 'col-span-2 row-span-2',
  big: 'col-span-2 row-span-4',
}
const shape = (index) => visible.value[index]?.shape || BLOCKS[Math.floor(index / 12) % BLOCKS.length][index % 12] || 'tall'

const photos = computed(() =>
  props.gallery.photos.map((photo) => ({
    ...photo,
    full: `${props.gallery.dir}/${photo.file}.webp`,
    md: `${props.gallery.dir}/${photo.file}-md.webp`,
    sm: `${props.gallery.dir}/${photo.file}-sm.webp`,
  })),
)

const category = ref('tout')
const categoryTabs = computed(() => {
  const categories = props.gallery.categories
  if (!categories) return []
  return [
    { key: 'tout', label: 'Tout', count: photos.value.length },
    ...Object.entries(categories).map(([key, label]) => ({
      key,
      label,
      count: photos.value.filter((photo) => photo.category === key).length,
    })),
  ]
})

const filtered = computed(() =>
  category.value === 'tout' ? photos.value : photos.value.filter((photo) => photo.category === category.value),
)

const shown = ref(props.pageSize)
const visible = computed(() => filtered.value.slice(0, shown.value))
const remaining = computed(() => filtered.value.length - visible.value.length)

watch(category, () => {
  shown.value = props.pageSize
})

// Place le focus sur la première nouvelle photo, pour qui navigue au clavier
const grid = ref(null)
async function showMore() {
  const first = visible.value.length
  shown.value += props.pageSize
  await nextTick()
  grid.value?.children[first]?.focus({ preventScroll: true })
}

const activeIndex = ref(null)
</script>

<style scoped>
/* Les rangées sont calculées sur la largeur de la galerie pour qu'une tuile
   haute ait le format 4:5 des photos, quelle que soit la page qui l'accueille. */
.gallery {
  container-type: inline-size;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-flow: dense;
  grid-auto-rows: calc((100cqw - 0.75rem) / 2 * 0.625 - 0.375rem);
  gap: 0.75rem;
}

@container (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: calc((100cqw - 3rem) / 4 * 0.625 - 0.5rem);
    gap: 1rem;
  }
}

.tile {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: rgb(127 127 127 / 0.15);
  animation: tile-in 0.6s ease-out;
}
.tile:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgb(221 25 58 / 0.45);
}

/* Les photos ajoutées (filtre, « voir plus ») apparaissent en douceur */
@keyframes tile-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
}

.filter {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  background: #fff;
  min-height: 2.75rem;
  padding: 0.5rem 1.1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1d1e22;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}
.filter:hover {
  border-color: #dd193a;
}
.filter-active,
.filter-active:hover {
  border-color: #1d1e22;
  background: #1d1e22;
  color: #fff;
}
.gallery-dark .filter {
  border-color: rgb(255 255 255 / 0.15);
  background: transparent;
  color: rgb(255 255 255 / 0.75);
}
.gallery-dark .filter:hover {
  border-color: #ffbe00;
}
.gallery-dark .filter-active,
.gallery-dark .filter-active:hover {
  border-color: #ffbe00;
  background: #ffbe00;
  color: #1d1e22;
}

.no-scrollbar {
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  .tile {
    animation: none;
  }
}
</style>
