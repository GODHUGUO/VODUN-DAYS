// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
    },
  },
   app: {
   
    head: {
     title: 'VODUN DAYS', 
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css' },
     

{ 
          rel: 'icon', 
          type: 'image/png',          // ou 'image/x-icon' si c'est un .ico
          href: '/images/vodun-days.png' // <-- chemin depuis /public
        }
      ],
    
    },
  },
})

