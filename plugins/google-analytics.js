// Google Analytics 4 : compte les visites et les pages vues.
// Les changements de page sans rechargement sont comptés par la « mesure améliorée » de GA4,
// activée par défaut dans la propriété (option « Changements de page basés sur l'historique »).
// Désactivé en développement pour ne pas fausser les statistiques.
export default defineNuxtPlugin(() => {
  const id = useRuntimeConfig().public.gaId
  if (!id || import.meta.dev) return

  useHead({
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${id}`, async: true },
      {
        innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}');`,
      },
    ],
  })
})
