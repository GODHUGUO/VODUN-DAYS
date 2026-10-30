// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  runtimeConfig: {
    public: {
      // Identifiant Google Analytics 4 (G-XXXXXXXXXX), ou variable d'environnement NUXT_PUBLIC_GA_ID.
      // Vide : aucun suivi.
      gaId:"G-PTRPXNLWQ8",
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
    },
  },
   app: {
   
    head: {
     title: 'VODUN DAYS',
      htmlAttrs: { lang: 'fr' },
      link: [
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: '' },
        // Version figée : @latest pourrait renommer ou retirer des icônes sans prévenir.
        // media="print" puis "all" au chargement : les icônes ne retardent pas l'affichage de la page.
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.50.0/dist/tabler-icons.min.css', media: 'print', onload: "this.media='all'" },
     

{ 
          rel: 'icon', 
          type: 'image/png',          // ou 'image/x-icon' si c'est un .ico
          href: '/images/vodun-days.png' // <-- chemin depuis /public
        }
      ],
    
    },
  },
})

