<template>
    <div ref="root">

  <div class="relative h-screen bg-[url('/images/portedunonretour.webp')] bg-cover bg-center -mt-[64px] overflow-hidden bg-fixed  containhero" >

    <div class="absolute inset-0 bg-black/65"></div>

     <div class="absolute  inset-0 flex">
    <div class="flex-1 bg-white overlay"></div>
    <div class="flex-1 bg-white overlay"></div>
    <div class="flex-1 bg-white overlay"></div>
    <div class="flex-1 bg-white overlay"></div>
  </div>

    <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
      <h1 class="text-5xl font-bold textacceuil overflow-hidden">OUIDAH</h1>

    </div>
  </div>


<!-- ---------------------Présentation---------------- -->
<section class="bg-white py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12">
    <div class="md:col-span-3 reveal">
      <SectionTitle eyebrow="La ville" title="Ce qu'il faut savoir sur Ouidah" />
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="text-lg">
          Ville historique du Bénin, Ouidah est un haut lieu de la culture vodun et du patrimoine africain. Au bord de l'océan Atlantique, traditions, spiritualité et mémoire s'y rencontrent : c'est le lieu naturel et symbolique du Vodun Days.
        </p>
        <p>
          Autrefois port important durant la traite négrière, la ville conserve aujourd'hui des monuments historiques et des lieux de mémoire qui témoignent de son passé et de sa résilience.
        </p>
        <p>
          Ouidah est l'un des berceaux du Vodun béninois, une spiritualité vivante et profondément ancrée dans la vie quotidienne de ses habitants. Cérémonies, danses sacrées, chants rituels et célébrations culturelles s'y tiennent tout au long de l'année.
        </p>
      </div>

      <p class="font-semibold text-[#1D1E22] mt-8 mb-4">Outre le Vodun Days, la ville accueille :</p>
      <ul class="flex flex-wrap gap-3">
        <li v-for="item in yearRound" :key="item" class="px-4 py-2 rounded-full bg-[#F8F3EC] text-sm text-[#1D1E22] border border-[#DD193A]/20">
          {{ item }}
        </li>
      </ul>
    </div>

    <!-- Fiche express -->
    <aside class="md:col-span-2 reveal">
      <div class="bg-[#1D1E22] text-white rounded-2xl p-8 md:sticky md:top-24">
        <p class="font-display uppercase text-3xl">Ouidah en bref</p>
        <div class="flex h-1 w-16 mt-3 rounded-full overflow-hidden">
          <span class="flex-1 bg-[#108757]"></span>
          <span class="flex-1 bg-[#FFBE00]"></span>
          <span class="flex-1 bg-[#EB0000]"></span>
        </div>
        <ul class="mt-6 space-y-5">
          <li v-for="fact in facts" :key="fact.text" class="flex gap-4">
            <i :class="['ti', fact.icon, 'text-2xl text-[#FFBE00] shrink-0']"></i>
            <span class="text-white/85">{{ fact.text }}</span>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</section>


<!-- ---------------------Route de l'Esclave---------------- -->
<section class="bg-[#F8F3EC] py-12 md:py-16">
  <div class="max-w-5xl mx-auto px-6">
    <div class="reveal">
      <SectionTitle
        eyebrow="Lieu de mémoire"
        title="La Route de l'Esclave"
        intro="Une route historique de 4 km menant à la Porte du Non-Retour, en hommage aux millions d'Africains déportés. Suivez-la, étape par étape."
        center
      />
    </div>

    <div class="relative">
    <!-- Ligne verticale reliant les étapes -->
    <div class="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-[#DD193A]/20"></div>
    <ol class="relative">
      <li v-for="(step, index) in route" :key="step.title" class="relative pl-16 md:pl-24 pb-10 last:pb-0 reveal">
        <span class="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#DD193A] text-white font-display text-xl md:text-2xl flex items-center justify-center ring-8 ring-[#F8F3EC]">
          {{ index + 1 }}
        </span>

        <div class="bg-white rounded-2xl shadow-sm p-5 md:p-6 grid md:grid-cols-5 gap-6 items-center">
          <!-- Images alignées à la même hauteur, sans recadrage -->
          <div class="md:col-span-3">
            <div class="flex gap-2 mx-auto" :style="{ maxWidth: `${24 * ratioSum(step.images)}rem` }">
              <img
                v-for="img in step.images"
                :key="img.src"
                :src="img.src"
                :alt="step.title"
                loading="lazy"
                class="min-w-0 w-full object-cover rounded-xl"
                :style="{ flex: `${img.ratio} 1 0%`, aspectRatio: img.ratio }"
              />
            </div>
          </div>
          <div class="md:col-span-2">
            <p class="text-xs font-semibold uppercase tracking-widest text-[#DD193A]">Étape {{ index + 1 }}</p>
            <h3 class="font-display uppercase text-2xl md:text-3xl text-[#1D1E22] mt-1">{{ step.title }}</h3>
            <p class="text-gray-600 mt-3 leading-relaxed">{{ step.text }}</p>
          </div>
        </div>
      </li>
    </ol>
    </div>
  </div>
</section>


<!-- ---------------------Autres lieux---------------- -->
<section class="bg-white py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6">
    <div class="reveal">
      <SectionTitle eyebrow="À découvrir" title="Lieux emblématiques" center />
    </div>

    <div class="grid md:grid-cols-2 gap-6 reveal-group">
      <article v-for="place in places" :key="place.title" class="group rounded-2xl overflow-hidden bg-[#F8F3EC]">
        <div class="overflow-hidden">
          <img :src="place.src" :alt="place.title" loading="lazy" class="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div class="p-6">
          <h3 class="font-display uppercase text-2xl text-[#1D1E22]">{{ place.title }}</h3>
          <p class="text-gray-600 mt-2 leading-relaxed">{{ place.text }}</p>
        </div>
      </article>

      <article class="md:col-span-2 rounded-2xl overflow-hidden bg-[#1D1E22] text-white grid md:grid-cols-5 items-center">
        <img :src="beachImage" alt="La plage de Ouidah" width="2560" height="1146" loading="lazy" class="md:col-span-3 w-full h-auto" />
        <div class="md:col-span-2 p-6 md:p-8">
          <h3 class="font-display uppercase text-2xl md:text-3xl">La plage de Ouidah</h3>
          <p class="text-white/75 mt-2 leading-relaxed">
            Bordée par l'Atlantique, la plage accueille, au pied de la Porte du Non-Retour, les grandes cérémonies du Vodun Days.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>


<!-- ---------------------Infos pratiques---------------- -->
<section id="infos" class="bg-[#F8F3EC] py-12 md:py-16 scroll-mt-16">
  <div class="max-w-6xl mx-auto px-6">
    <div class="reveal">
      <SectionTitle eyebrow="Préparer sa visite" title="Infos pratiques" center />
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-group">
      <div v-for="info in practical" :key="info.title" class="bg-white rounded-2xl p-7 shadow-sm">
        <div class="w-12 h-12 rounded-full bg-[#DD193A]/10 text-[#DD193A] flex items-center justify-center">
          <i :class="['ti', info.icon, 'text-2xl']"></i>
        </div>
        <p class="font-semibold text-lg text-[#1D1E22] mt-5">{{ info.title }}</p>
        <p class="text-gray-600 mt-2 leading-relaxed">{{ info.text }}</p>
      </div>
    </div>

    <div class="mt-10 rounded-2xl overflow-hidden shadow-sm reveal">
      <iframe
        src="https://maps.google.com/maps?q=Ouidah%2C%20B%C3%A9nin&z=13&output=embed"
        title="Carte de Ouidah"
        class="w-full h-80 md:h-96 border-0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


<CtaBand
  title="Vivez le Vodun Days"
  text="Trois jours de célébration, chaque 8, 9 et 10 janvier, au cœur de la capitale spirituelle du Vodun."
  :primary="{ label: 'Découvrir le festival', to: '/festival' }"
  :secondary="{ label: 'Retour à l\'accueil', to: '/home' }"
/>

    </div>
</template>

<script setup>

definePageMeta({
  layout: 'site'
})

useSeoMeta({
  title: 'Ouidah · Vodun Days',
  description: "Ouidah, capitale spirituelle du Vodun : Route de l'Esclave, Temple des Pythons, Fort Portugais et infos pratiques pour préparer votre visite.",
})

import { gsap } from 'gsap'

onMounted(() => {
  // Timeline GSAP
  const tl = gsap.timeline()

  tl.to(".overlay", {
    yPercent: 100,       // chaque bande part du haut
    opacity: 0,           // commence invisible
    duration: 2,        // durée de chaque animation
    stagger: 0.3,         // délai entre chaque bande
    ease: "power3.out"    // effet fluide
  })
})

// Apparition des sections au scroll
const root = ref(null)
useReveal(root)

const facts = [
  { icon: 'ti-map-pin', text: "Sud du Bénin, au bord de l'océan Atlantique" },
  { icon: 'ti-car', text: 'Environ 40 km de Cotonou, soit 45 min en voiture' },
  { icon: 'ti-flame', text: 'Capitale spirituelle du Vodun' },
  { icon: 'ti-route', text: "Route de l'Esclave : 4 km jusqu'à la Porte du Non-Retour" },
]

const yearRound = [
  'Rituels traditionnels dans les couvents vodun',
  'Célébrations dédiées aux divinités',
  'Rencontres artistiques et culturelles',
]

// ratio = largeur / hauteur de chaque image (les noms avec accents sont encodés)
const route = [
  {
    title: 'La Place des enchères',
    text: "Point de départ de la route. C'est ici que les captifs étaient vendus ou échangés contre des marchandises.",
    images: [{ src: '/images/Place-des-enche%CC%80res-Ouidah-Be%CC%81nin.jpg', ratio: 0.752 }],
  },
  {
    title: "L'Arbre de l'Oubli",
    text: 'Les captifs devaient en faire le tour, les hommes neuf fois, les femmes sept fois, pour oublier leur nom, leur histoire et leurs origines.',
    images: [{ src: '/images/Arbre-oubli-Ouidah-Be%CC%81nin.jpg', ratio: 0.773 }],
  },
  {
    title: 'Les Cases Zomaï',
    text: "Leur nom signifie « là où la lumière ne va pas » : les captifs y étaient enfermés dans l'obscurité totale avant le départ.",
    images: [
      { src: '/images/Casa-Zomai%CC%88.jpg', ratio: 1.676 },
      { src: '/images/Benin_Ouidah_Entrepot-768x1024.jpg', ratio: 0.75 },
    ],
  },
  {
    title: 'Le Mémorial du Souvenir',
    text: "Élevé à Zoungbodji, sur le site d'une fosse commune où reposent les captifs morts avant l'embarquement.",
    images: [{ src: '/images/Memorial-Souvenir-Ouidah-Be%CC%81nin.jpg', ratio: 2.114 }],
  },
  {
    title: "L'Arbre du Retour",
    text: 'En en faisant le tour, les captifs espéraient que leur âme reviendrait un jour sur la terre de leurs ancêtres.',
    images: [{ src: '/images/Arbre-du-Retour-Ouidah-Be%CC%81nin.jpg', ratio: 0.75 }],
  },
  {
    title: 'La Porte du Non-Retour',
    text: "Face à l'océan, elle marque le dernier point foulé par les captifs sur la terre africaine. Un lieu de mémoire majeur, où se tiennent des cérémonies du Vodun Days.",
    images: [{ src: '/images/portedunonretour.webp', ratio: 1.779 }],
  },
]

const ratioSum = (images) => images.reduce((sum, img) => sum + img.ratio, 0)

// Chemin encodé dans le script : écrit en dur dans le template, Vue décode l'accent et l'image ne se charge plus
const beachImage = '/images/Plage-Ouidah-Be%CC%81nin-1.jpg'

const places = [
  {
    title: 'Le Temple des Pythons',
    text: 'Un lieu spirituel majeur, symbole du lien entre humains et divinités, où les pythons sont respectés et honorés.',
    src: '/images/Le_Temple_des_Pythons_a_Ouidah.jpg',
  },
  {
    title: 'Le Fort Portugais',
    text: "Ancienne forteresse coloniale devenue Musée d'Histoire, il retrace l'histoire d'Ouidah, ses royaumes, ses traditions et sa place dans le monde.",
    src: '/images/Fort%20Portugais%20DSC02169.jpg',
  },
]

const practical = [
  { icon: 'ti-car', title: 'Accès', text: 'À environ 40 km de Cotonou (45 minutes de route). Ouidah est accessible en voiture, en taxi, en bus interurbain ou via des services de transport touristiques.' },
  { icon: 'ti-shirt', title: 'Tenue', text: "Prévoyez des vêtements légers et confortables, ainsi qu'une protection contre le soleil." },
  { icon: 'ti-heart-handshake', title: 'Respect des lieux sacrés', text: "Respectez les sites sacrés et les espaces rituels, et demandez l'autorisation avant de photographier." },
  { icon: 'ti-tools-kitchen-2', title: 'Gastronomie', text: "Goûtez à la cuisine locale : akassa, gboman, poissons braisés, tchoukoutou et bien d'autres spécialités." },
  { icon: 'ti-bed', title: 'Hébergement', text: "Hôtels, auberges, résidences d'artistes et logements locaux, pour tous les budgets. Pensez à réserver tôt pour la période du festival." },
  { icon: 'ti-plane', title: "Venir de l'étranger", text: "Pensez au visa (e-Visa sur evisa.gouv.bj) et au certificat de vaccination contre la fièvre jaune, exigé à l'entrée au Bénin. Monnaie : franc CFA." },
]
</script>
