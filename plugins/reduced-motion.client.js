// Réglage « réduire les animations » du téléphone : toutes les animations GSAP se terminent aussitôt.
// Import à la demande pour que GSAP ne s'ajoute pas au code chargé par toutes les pages.
export default defineNuxtPlugin(async () => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const { gsap } = await import('gsap')
  gsap.globalTimeline.timeScale(1000)
})
