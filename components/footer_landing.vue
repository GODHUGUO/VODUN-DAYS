<template>
    <footer class="bg-[#1D1E22] text-white">
<div class="bg-[#DD193A] h-[8px]"></div>

<div class="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 text-center md:text-left">

  <!-- Logo + accroche -->
  <div class="flex flex-col items-center md:items-start">
    <img src="/images/logo-festival.png" alt="Logo Vodun Days" class="h-8" />
    <p class="mt-4 text-sm text-white/70 max-w-xs">
      Chaque 8, 9 et 10 janvier, Ouidah célèbre le Vodun, patrimoine vivant du Bénin.
    </p>
  </div>

  <!-- Navigation -->
  <div>
    <p class="font-semibold uppercase tracking-widest text-xs text-[#FFBE00] mb-4">Navigation</p>
    <ul class="space-y-2 text-sm">
      <li v-for="item in links" :key="item.link">
        <NuxtLink :to="item.link" class="text-white/80 hover:text-[#FFBE00] transition-colors">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>

  <!-- Réseaux -->
  <div>
    <p class="font-semibold uppercase tracking-widest text-xs text-[#FFBE00] mb-4">Suivez-nous</p>
    <p class="text-sm text-white/70 mb-4">Pour plus d'informations, ainsi que du contenu en images et en vidéos :</p>
    <p class="flex gap-4 justify-center md:justify-start">

<a  href="https://web.facebook.com/vodundays?mibextid=LQQJ4d&_rdc=1&_rdr" target="_blank" rel="noopener" aria-label="Facebook"
 class="inline-block transition-transform duration-300 hover:scale-110"
>
  <img src="/images/logofb.png" alt="Facebook" class="h-8" />
</a>

<a  href="https://www.instagram.com/vodundays/" target="_blank" rel="noopener" aria-label="Instagram"
 class="inline-block transition-transform duration-300 hover:scale-110"
>
        <img src="/images/logoinsta.png" alt="Instagram" class="h-8" />
</a>

<a  href="https://www.youtube.com/playlist?list=PL6nGRnf5v3jg5ByAAlBgMpCKWi743C2HC" target="_blank" rel="noopener" aria-label="YouTube"
 class="inline-block transition-transform duration-300 hover:scale-110"
>
        <img src="/images/logoyoutube.png" alt="YouTube" class="h-8" />
</a>

<a  href="https://www.tiktok.com/@vodundays" target="_blank" rel="noopener" aria-label="TikTok"
 class="inline-block transition-transform duration-300 hover:scale-110"
>
        <img src="/images/logotiktok.png" alt="TikTok" class="h-8" />
</a>

<a  href="https://x.com/vodundays" target="_blank" rel="noopener" aria-label="X"
 class="inline-block transition-transform duration-300 hover:scale-110"
>
        <img src="/images/twitter-x-logo.png" alt="X" class="h-8" />
</a>

    </p>
  </div>
</div>

<div class="border-t border-white/10">
  <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-2 justify-between items-center text-xs text-white/60">
    <p>Copyright © {{ year }} Vodun Days</p>
    <p>
      Email du développeur :
      <a href="mailto:jeanhuguesgodonou@gmail.com" class="text-[#DD193A] hover:underline">jeanhuguesgodonou@gmail.com</a>
    </p>
  </div>
</div>

<div class="flex">
    <div class="bg-[#108757] h-[7px] w-[33%]"></div>
    <div class="bg-[#FFBE00] h-[7px] w-[34%]"></div>
    <div class="bg-[#EB0000] h-[7px] w-[33%]"></div>
</div>

    </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const links = [
  { name: 'Accueil', link: '/home' },
  { name: 'Le Festival', link: '/festival' },
  { name: 'Ouidah', link: '/ouidah' },
  { name: 'Infos pratiques', link: '/ouidah#infos' },
]
</script>
