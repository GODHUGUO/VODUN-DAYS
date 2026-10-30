<template>
    <div ref="root">
  <div class="relative h-screen h-svh bg-[url('/images/festival.webp')] bg-cover bg-center -mt-[64px] overflow-hidden lg:bg-fixed  containhero" >

    <div class="absolute inset-0 bg-black/65"></div>

     <div class="absolute  inset-0 flex">
    <div class="flex-1 bg-white overlay"></div>
    <div class="flex-1 bg-white overlay"></div>
    <div class="flex-1 bg-white overlay"></div>
    <div class="flex-1 bg-white overlay"></div>
  </div>

    <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
      <h1 class="text-5xl font-bold textacceuil overflow-hidden">Le Festival</h1>

    </div>
  </div>


<!-- ---------------------Présentation---------------- -->
<section class="bg-white py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
    <div class="md:col-span-3 reveal">
      <SectionTitle eyebrow="Le festival" title="Vodun Days Festival" />
      <p class="text-lg text-gray-700 leading-relaxed">
        Le festival Vodun Days est un événement culturel majeur qui se tient chaque année à Ouidah, entre l'Arène culturelle, qui accueille les cérémonies, et l'espace aménagé sur la plage pour les concerts.
      </p>
    </div>

    <blockquote class="md:col-span-2 bg-[#F8F3EC] border-l-4 border-[#DD193A] rounded-r-2xl p-8 reveal">
      <i class="ti ti-quote text-4xl text-[#DD193A]"></i>
      <p class="text-xl text-[#1D1E22] font-medium leading-relaxed mt-2">
        Le vodun mis à l'honneur non pas comme superstition, mais comme patrimoine vivant, art, connaissance et identité d'un peuple.
      </p>
    </blockquote>
  </div>

  <div class="max-w-6xl mx-auto px-6 mt-10 grid sm:grid-cols-3 gap-4 reveal-group">
    <div v-for="info in keyInfos" :key="info.text" class="flex items-center gap-4 rounded-2xl bg-[#1D1E22] text-white p-5">
      <i :class="['ti', info.icon, 'text-3xl text-[#FFBE00] shrink-0']"></i>
      <span class="font-semibold">{{ info.text }}</span>
    </div>
  </div>
</section>


<!-- ---------------------L'Arène---------------- -->
<section class="bg-[#F8F3EC] py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div class="reveal relative isolate">
      <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-[#108757] rounded-2xl -z-10"></div>
      <img src="/images/54284765010_e1a485950b_h.webp" :srcset="srcsetOf('/images/54284765010_e1a485950b_h.webp', 1600)" sizes="(min-width: 768px) 50vw, 100vw" loading="lazy" alt="Vue aérienne de l'Arène de Ouidah, face à l'océan" width="1600" height="941" class="w-full rounded-2xl shadow-xl" />
    </div>

    <div class="reveal">
      <SectionTitle eyebrow="Un espace symbolique" title="L'Arène de Ouidah" />
      <p class="text-gray-700 leading-relaxed">
        L'Arène construite à Ouidah est bien plus qu'un simple espace de spectacle. C'est un lieu de convergence culturelle, conçu pour accueillir :
      </p>
      <ul class="mt-6 grid sm:grid-cols-2 gap-3">
        <li v-for="item in arena" :key="item.text" class="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
          <i :class="['ti', item.icon, 'text-xl text-[#DD193A] shrink-0 mt-0.5']"></i>
          <span class="text-sm text-[#1D1E22]">{{ item.text }}</span>
        </li>
      </ul>
      <p class="text-gray-700 leading-relaxed mt-6">
        Durant le festival, elle devient un <strong class="text-[#1D1E22]">pont entre tradition et modernité</strong>, où le sacré rencontre la scène artistique.
      </p>
    </div>
  </div>
</section>


<!-- ---------------------Artistes---------------- -->
<section class="bg-[#1D1E22] text-white py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
    <div class="md:col-span-2 reveal">
      <img src="/images/sagbohan.webp" :srcset="srcsetOf('/images/sagbohan.webp', 1440)" sizes="(min-width: 768px) 384px, 100vw" loading="lazy" alt="Sagbohan Danialou en concert au Vodun Days" width="1440" height="1798" class="w-full max-w-sm mx-auto rounded-2xl shadow-2xl" />
    </div>

    <div class="md:col-span-3 reveal">
      <SectionTitle eyebrow="Sur scène" title="Des artistes venus du Bénin et du monde" dark />
      <p class="text-white/75 leading-relaxed">
        Chaque édition rassemble artistes, groupes de danse, musiciens, performeurs et créateurs venus du Bénin, d'Afrique et d'ailleurs. Ils viennent partager leur vision, leur énergie et leur art dans une ambiance d'unité et de célébration.
      </p>

      <ul class="mt-8 grid sm:grid-cols-2 gap-4">
        <li v-for="item in artists" :key="item.text" class="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
          <i :class="['ti', item.icon, 'text-2xl text-[#FFBE00] shrink-0']"></i>
          <span class="text-sm text-white/85">{{ item.text }}</span>
        </li>
      </ul>

      <p class="text-white/75 leading-relaxed mt-8">
        Cette diversité crée un mélange puissant, où chacun se retrouve autour d'une même célébration.
      </p>
    </div>
  </div>
</section>


<!-- ---------------------Galerie des artistes---------------- -->
<section class="bg-[#1D1E22] text-white pb-12 md:pb-16">
  <div class="max-w-6xl mx-auto px-6 pt-12 md:pt-16 border-t border-white/10">
    <div class="reveal">
      <SectionTitle
        eyebrow="Quelques images"
        title="Ils ont fait vibrer la plage de Ouidah"
        intro="Voix, percussions et chorégraphies : retour en images sur les artistes passés par la scène du Vodun Days."
        dark
        center
      />
    </div>

    <PhotoGallery :gallery="festivalGallery" dark class="reveal" />
  </div>
</section>


<!-- ---------------------Vidéos---------------- -->
<section class="bg-white py-12 md:py-16">
  <div class="max-w-4xl mx-auto px-6">
    <div class="reveal">
      <SectionTitle eyebrow="En vidéo" title="Revivez le Vodun Days" center />
    </div>

    <div class="rounded-2xl overflow-hidden shadow-xl reveal">
      <iframe
        src="https://www.youtube-nocookie.com/embed/videoseries?list=PL6nGRnf5v3jg5ByAAlBgMpCKWi743C2HC"
        title="Vidéos du Vodun Days"
        class="w-full aspect-video"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="text-center mt-8 reveal">
      <a
        href="https://www.youtube.com/playlist?list=PL6nGRnf5v3jg5ByAAlBgMpCKWi743C2HC"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 py-2 font-semibold text-[#DD193A] hover:gap-3 transition-all"
      >
        <i class="ti ti-brand-youtube text-xl"></i> Voir toutes les vidéos sur YouTube
      </a>
    </div>
  </div>
</section>


<CtaBand
  title="Préparez votre séjour"
  text="Accès, hébergement, gastronomie, lieux à visiter : tout ce qu'il faut savoir pour venir à Ouidah."
  :primary="{ label: 'Infos pratiques', to: '/ouidah#infos' }"
  :secondary="{ label: 'Découvrir Ouidah', to: '/ouidah' }"
/>

    </div>
</template>

<script setup>
definePageMeta({
  layout: 'site'
})

useSeoMeta({
  title: 'Le Festival · Vodun Days',
  description: "Le festival Vodun Days à Ouidah : cérémonies et danses rituelles à l'Arène, concerts sur la plage, avec des artistes venus du Bénin et du monde.",
})

import { gsap } from 'gsap'

onMounted(() => {
  // Timeline GSAP
  const tl = gsap.timeline()

  tl.to(".overlay", {
    xPercent: 100,       // chaque bande part du haut
    opacity: 0,           // commence invisible
    duration: 0.8,      // durée de chaque animation
    stagger: 0.1,         // délai entre chaque bande
    ease: "power3.out"    // effet fluide
  })
})

// Apparition des sections au scroll
const root = ref(null)
useReveal(root)

const keyInfos = [
  { icon: 'ti-calendar-event', text: 'Du 2 au 9 janvier 2027' },
  { icon: 'ti-building-arch', text: "L'Arène et la plage de Ouidah" },
  { icon: 'ti-world', text: 'Artistes du Bénin et du monde' },
]

const arena = [
  { icon: 'ti-users-group', text: 'Danses rituelles' },
  { icon: 'ti-microphone-2', text: 'Chants traditionnels' },
  { icon: 'ti-sparkles', text: 'Performances contemporaines inspirées des divinités Vodun' },
  { icon: 'ti-flag', text: 'Défilés de couvents et communautés spirituelles' },
]

const artists = [
  { icon: 'ti-users-group', text: 'Troupes traditionnelles du Sud et du Centre du Bénin' },
  { icon: 'ti-music', text: 'Musiciens et percussionnistes africains' },
  { icon: 'ti-microphone-2', text: 'Groupes afro-fusion, reggae, afrobeat et world music' },
  { icon: 'ti-world', text: 'Artistes internationaux en résidence ou en tournée culturelle' },
]
</script>
