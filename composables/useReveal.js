import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Une transition CSS (classe Tailwind "transition") sur un élément animé par GSAP
// fausse la lecture de son état final : on la coupe pendant l'animation, puis on
// nettoie les styles en ligne à la fin pour que les effets de survol refonctionnent.
const hidden = { y: 40, opacity: 0, ease: 'power2.out' }
const cleanup = { clearProps: 'transform,translate,rotate,scale,opacity,transition' }

// Animation d'apparition commune à toutes les pages :
// - .reveal       : l'élément monte en fondu quand il entre dans l'écran
// - .reveal-group : ses enfants apparaissent l'un après l'autre
export function useReveal(scope) {
  let ctx

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.set(el, { transition: 'none' })
        gsap.from(el, {
          ...hidden,
          ...cleanup,
          duration: 0.9,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray('.reveal-group').forEach((group) => {
        gsap.set(group.children, { transition: 'none' })
        gsap.from(group.children, {
          ...hidden,
          ...cleanup,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })
    }, scope?.value)
  })

  // Nettoie les ScrollTrigger quand on change de page
  onBeforeUnmount(() => ctx?.revert())
}
