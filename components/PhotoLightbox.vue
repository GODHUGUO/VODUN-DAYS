<template>
  <Teleport to="body">
    <transition name="lightbox">
      <div
        v-if="photo"
        ref="dialog"
        class="fixed inset-0 z-[80] flex flex-col overflow-hidden bg-[#0B0B0D] text-white"
        role="dialog"
        aria-modal="true"
        :aria-label="`Photo ${index + 1} sur ${photos.length} : ${description}`"
      >
        <!-- Fond : la photo en cours, très floutée, pour baigner l'écran dans ses couleurs -->
        <img
          :src="photo.sm"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover opacity-40 blur-3xl"
        />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

        <!-- Compteur et fermeture -->
        <div class="lightbox-top relative flex items-center justify-between px-4 py-4 md:px-8">
          <p class="font-display text-2xl tabular-nums leading-none md:text-3xl">
            {{ pad(index + 1) }}<span class="text-white/40"> / {{ pad(photos.length) }}</span>
          </p>
          <button
            ref="closeButton"
            type="button"
            class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl backdrop-blur transition-colors hover:bg-white hover:text-[#1D1E22] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFBE00]/50"
            aria-label="Fermer la visionneuse"
            @click="close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>

        <!-- Photo : glisser à gauche ou à droite pour naviguer, vers le bas pour fermer -->
        <div
          :class="['stage relative flex min-h-0 flex-1 items-center justify-center px-3 md:px-24', artists.length ? 'xl:px-48' : '']"
          @click.self="close"
          @touchstart.passive="onTouchStart"
          @touchend="onTouchEnd"
        >
          <transition :name="direction > 0 ? 'slide-next' : 'slide-prev'" mode="out-in">
            <div :key="photo.full" class="relative">
              <img
                :src="photo.full"
                :alt="description"
                draggable="false"
                class="photo block select-none rounded-lg shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
              />

              <!-- Noms des artistes à la verticale, le long du bord gauche de la photo -->
              <div v-if="artists.length" class="spine hidden xl:flex">
                <div class="spine-text">
                  <span
                    v-for="name in artists"
                    :key="name"
                    :class="['spine-name font-display', artists.length > 1 ? 'spine-name-group' : '']"
                  >{{ name }}</span>
                </div>
              </div>
            </div>
          </transition>

          <template v-if="photos.length > 1">
            <button
              type="button"
              class="nav-button left-2 md:left-6"
              aria-label="Photo précédente"
              @click="move(-1)"
            >
              <i class="ti ti-chevron-left"></i>
            </button>
            <button
              type="button"
              class="nav-button right-2 md:right-6"
              aria-label="Photo suivante"
              @click="move(1)"
            >
              <i class="ti ti-chevron-right"></i>
            </button>
          </template>
        </div>

        <!-- Crédit et vignettes -->
        <div class="lightbox-bottom relative px-4 pb-5 pt-4 md:px-8">
          <!-- Sans la place d'écrire à la verticale, les noms passent sous la photo -->
          <p v-if="artists.length" class="font-display mb-2 text-center text-xl uppercase tracking-wide md:text-2xl xl:hidden">
            {{ artists.join(' · ') }}
          </p>

          <div class="lightbox-credit mx-auto flex max-w-6xl justify-center md:justify-end">
            <a
              :href="source.url"
              target="_blank"
              rel="noopener"
              class="inline-flex shrink-0 items-center gap-1.5 text-xs text-white/60 transition-colors hover:text-white"
            >
              <i class="ti ti-brand-facebook text-base"></i>
              Photo : {{ source.label }}
              <i class="ti ti-external-link"></i>
            </a>
          </div>

          <div ref="strip" class="lightbox-strip no-scrollbar mx-auto mt-4 flex max-w-6xl gap-2 overflow-x-auto p-1">
            <button
              v-for="(item, i) in photos"
              :key="item.file"
              type="button"
              :class="[
                'h-14 w-11 shrink-0 overflow-hidden rounded-md ring-2 ring-offset-2 ring-offset-[#0B0B0D] transition md:h-16 md:w-12',
                i === index ? 'opacity-100 ring-[#FFBE00]' : 'opacity-40 ring-transparent hover:opacity-90',
              ]"
              :aria-label="`Voir la photo ${i + 1} : ${item.title}`"
              :aria-current="i === index ? 'true' : undefined"
              @click="go(i)"
            >
              <img :src="item.sm" alt="" loading="lazy" class="h-full w-full object-cover" />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  // Photos avec full, sm et title (texte alternatif), préparées par PhotoGallery
  photos: { type: Array, required: true },
  // Position de la photo affichée, null quand la visionneuse est fermée
  index: { type: Number, default: null },
  source: { type: Object, required: true },
})
const emit = defineEmits(['update:index'])

const photo = computed(() => (props.index === null ? null : props.photos[props.index]))
const artists = computed(() => photo.value?.artists || [])
const description = computed(() =>
  artists.value.length ? `${artists.value.join(', ')} : ${photo.value.title}` : photo.value?.title,
)
const direction = ref(1)
const dialog = ref(null)
const closeButton = ref(null)
const strip = ref(null)
let returnFocus = null

const pad = (n) => String(n).padStart(2, '0')

function go(i) {
  direction.value = i >= props.index ? 1 : -1
  emit('update:index', i)
}

function move(step) {
  direction.value = step
  emit('update:index', (props.index + step + props.photos.length) % props.photos.length)
}

function close() {
  emit('update:index', null)
}

// Glisser du doigt : horizontal pour naviguer, vers le bas pour fermer
let touchStart = null
function onTouchStart(event) {
  touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY }
}
function onTouchEnd(event) {
  if (!touchStart) return
  const dx = event.changedTouches[0].clientX - touchStart.x
  const dy = event.changedTouches[0].clientY - touchStart.y
  touchStart = null
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1)
  else if (dy > 80 && dy > Math.abs(dx)) close()
}

function onKeydown(event) {
  if (props.index === null) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowRight') move(1)
  if (event.key === 'ArrowLeft') move(-1)
  // Garde le focus dans la visionneuse tant qu'elle est ouverte
  if (event.key === 'Tab' && dialog.value) {
    const focusables = [...dialog.value.querySelectorAll('button, a[href]')].filter((el) => el.offsetParent)
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }
}

watch(
  () => props.index,
  async (value, previous) => {
    if (value === null) {
      document.body.style.overflow = ''
      returnFocus?.focus()
      return
    }

    if (previous === null || previous === undefined) {
      returnFocus = document.activeElement
      document.body.style.overflow = 'hidden'
    }

    // Charge à l'avance les photos voisines pour une navigation sans attente
    for (const step of [1, -1]) {
      const neighbour = props.photos[(value + step + props.photos.length) % props.photos.length]
      if (neighbour) new Image().src = neighbour.full
    }

    await nextTick()
    if (previous === null || previous === undefined) closeButton.value?.focus()
    centerThumbnail(value)
  },
)

// Ne fait défiler que la bande : scrollIntoView déplacerait aussi la visionneuse,
// dont le fond agrandi déborde, une fois la bande arrivée à son extrémité
function centerThumbnail(i) {
  const thumbnail = strip.value?.children[i]
  if (!thumbnail) return
  const left = thumbnail.offsetLeft - strip.value.offsetLeft - (strip.value.clientWidth - thumbnail.offsetWidth) / 2
  strip.value.scrollTo({ left, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* La photo est limitée en unités de conteneur : son cadre épouse ainsi l'image,
   et les noms peuvent s'aligner exactement sur son bord gauche et sa hauteur. */
.stage {
  container-type: size;
}
.photo {
  max-width: 100cqw;
  max-height: 100cqh;
}

.spine {
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  margin-right: 1rem;
}
/* Filet doré qui part du bas de la photo et s'efface vers le haut */
.spine::after {
  content: '';
  width: 2px;
  margin-left: 1rem;
  background: linear-gradient(to top, #ffbe00, transparent 70%);
}
/* Se lit de bas en haut, comme le dos d'un livre */
.spine-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.spine-name {
  font-size: min(4rem, 11cqh);
  line-height: 1.1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  white-space: nowrap;
}
.spine-name-group {
  font-size: min(1.75rem, 6cqh);
}

.nav-button {
  position: absolute;
  top: 50%;
  display: flex;
  height: 3rem;
  width: 3rem;
  transform: translateY(-50%);
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: rgb(255 255 255 / 0.1);
  font-size: 1.5rem;
  backdrop-filter: blur(8px);
  transition: background-color 0.2s, color 0.2s;
}
.nav-button:hover {
  background: #fff;
  color: #1d1e22;
}
.nav-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgb(255 190 0 / 0.5);
}
@media (min-width: 768px) {
  .nav-button {
    height: 3.5rem;
    width: 3.5rem;
  }
}

.no-scrollbar {
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Téléphone en paysage : la photo prend toute la hauteur, le reste passe par-dessus ou s'efface */
@media (max-height: 500px) {
  .lightbox-top {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    padding: 0.5rem 0.75rem;
    pointer-events: none;
  }
  .lightbox-top > * {
    pointer-events: auto;
  }
  .lightbox-bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 1rem 0.5rem;
    pointer-events: none;
  }
  .lightbox-bottom > p {
    margin: 0;
    font-size: 1rem;
    text-shadow: 0 1px 6px rgb(0 0 0 / 0.9);
  }
  .lightbox-credit,
  .lightbox-strip {
    display: none;
  }
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-next-enter-from,
.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(32px);
}
.slide-next-leave-to,
.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-32px);
}
</style>
