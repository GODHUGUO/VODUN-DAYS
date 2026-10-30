<template>
  <div ref="root">

<!-- -----------------herosection---------------- -->
  <div class="relative h-screen h-svh bg-[url('/images/vd3.webp')] bg-cover bg-center -mt-[64px] overflow-hidden lg:bg-fixed  containhero" >

    <div class="absolute inset-0 bg-black/65"></div>
    <div class="absolute inset-0 bg-white overlay flex justify-center items-center z-50">
  <div class="animate-spin rounded-full h-4 w-4 border-4 border-gray-300 border-t-blue-600"></div>
</div>


    <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center">
      <h1 class="text-4xl min-[360px]:text-5xl font-bold textacceuil overflow-hidden">VODUN DAYS</h1>
      <p class="text-lg sm:text-xl mt-4">Un évènement culturel béninois d'impact.</p>
      <p class="text-lg sm:text-xl mt-4 border px-2"> Du 2 au 9 janvier 2027 à OUIDAH.</p>
    </div>
  </div>


<!-- ---------------------Infos clés---------------- -->
<section class="bg-[#1D1E22] text-white">
  <div class="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 reveal-group">
    <div v-for="info in keyInfos" :key="info.label" class="flex items-center gap-3">
      <i :class="['ti', info.icon, 'text-3xl text-[#FFBE00] shrink-0']"></i>
      <div>
        <p class="text-[11px] uppercase tracking-widest text-white/50">{{ info.label }}</p>
        <p class="font-semibold leading-tight">{{ info.value }}</p>
      </div>
    </div>
  </div>
</section>


<!-- ---------------------Présentation---------------- -->
<section class="bg-white py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div class="reveal">
      <SectionTitle eyebrow="L'événement" title="Qu'est-ce que le Vodun Days ?" />
      <p class="text-gray-700 text-lg leading-relaxed">
        <strong class="text-[#1D1E22]">Vodun Days</strong>, initiative du président Patrice Talon, est une célébration culturelle et spirituelle organisée chaque année en janvier au Bénin. La prochaine édition se tiendra du 2 au 9 janvier 2027.
      </p>
      <p class="text-gray-600 leading-relaxed mt-4">
        Intégré au Programme de Mise en Valeur du Patrimoine Culturel et Touristique, cet événement aujourd'hui reconnu à l'international trouve ses racines dans un long héritage historique et identitaire, avec <span class="text-[#DD193A] font-semibold">Ouidah</span> comme cœur battant.
      </p>
    </div>

    <figure class="reveal">
      <div class="relative isolate">
        <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FFBE00] rounded-2xl -z-10"></div>
        <div class="absolute -top-4 -right-4 w-20 h-20 bg-[#DD193A] rounded-2xl -z-10"></div>
        <img src="/images/TALON.webp" :srcset="srcsetOf('/images/TALON.webp', 1920)" sizes="(min-width: 768px) 50vw, 100vw" loading="lazy" alt="Patrice Talon, initiateur du Vodun Days" class="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl" />
      </div>
      <figcaption class="mt-8 text-sm text-gray-500 italic">Patrice Talon, initiateur du Vodun Days.</figcaption>
    </figure>
  </div>

  <!-- Objectifs -->
  <div class="max-w-6xl mx-auto px-6 mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-group">
    <div
      v-for="item in objectives"
      :key="item.title"
      class="rounded-2xl border border-gray-100 bg-[#F8F3EC] p-6 hover:-translate-y-1 hover:shadow-lg transition"
    >
      <i :class="['ti', item.icon, 'text-3xl text-[#DD193A]']"></i>
      <p class="font-semibold text-[#1D1E22] mt-4">{{ item.title }}</p>
      <p class="text-sm text-gray-600 mt-2 leading-relaxed">{{ item.text }}</p>
    </div>
  </div>
</section>


<!-- ---------------------Ce que vous allez vivre---------------- -->
<section class="bg-[#F8F3EC] py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6">
    <div class="reveal">
      <SectionTitle
        eyebrow="Pourquoi venir"
        title="Ce que vous allez vivre"
        intro="Autour du 10 janvier, Journée nationale des religions traditionnelles, Ouidah vibre au rythme du Vodun. Trois jours de communion et de célébration."
        center
      />
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-group">
      <div
        v-for="(item, index) in experiences"
        :key="item.title"
        class="relative bg-white rounded-2xl p-7 shadow-sm overflow-hidden"
      >
        <span class="absolute top-4 right-5 font-display text-5xl text-[#DD193A]/25">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <div class="relative w-12 h-12 rounded-full bg-[#DD193A]/10 text-[#DD193A] flex items-center justify-center">
          <i :class="['ti', item.icon, 'text-2xl']"></i>
        </div>
        <p class="relative font-semibold text-lg text-[#1D1E22] mt-5">{{ item.title }}</p>
        <p class="relative text-gray-600 mt-2 leading-relaxed">{{ item.text }}</p>
      </div>
    </div>

    <div class="text-center mt-8 reveal">
      <NuxtLink to="/festival" class="inline-flex items-center gap-2 py-2.5 font-semibold text-[#DD193A] hover:gap-3 transition-all">
        Découvrir le festival <i class="ti ti-arrow-right"></i>
      </NuxtLink>
    </div>
  </div>
</section>


<!-- ---------------------Galerie---------------- -->
<section class="bg-white py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6">
    <div class="reveal">
      <SectionTitle
        eyebrow="Galerie"
        title="L'énergie du Vodun Days"
        intro="Masques sacrés, cérémonies, danses et ferveur du public : plongez au cœur du Vodun Days à Ouidah."
        center
      />
    </div>

    <PhotoGallery :gallery="vodunGallery" class="reveal" />
  </div>
</section>


<!-- --------------------------Origine du Vodun------------------- -->
<section class="bg-[#1D1E22] text-white py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6">
    <div class="reveal">
      <SectionTitle
        eyebrow="Histoire"
        title="Aux origines du Vodun"
        intro="Le mot vient du fon « vodoun ». Il désigne l'ensemble des divinités et forces invisibles dont les hommes cherchent à se concilier la puissance ou la bienveillance, et les rites qui permettent d'entrer en relation avec elles."
        dark
      />
    </div>

    <div class="relative mt-4">
      <div class="hidden md:block absolute top-[7px] left-0 right-0 h-0.5 bg-white/15"></div>
      <ol class="relative grid md:grid-cols-5 md:gap-6 reveal-group">
        <li
          v-for="step in timeline"
          :key="step.date"
          class="relative pl-8 pb-10 last:pb-0 border-l-2 border-white/15 md:border-l-0 md:pl-0 md:pb-0 md:pt-10"
        >
          <span class="absolute -left-[9px] top-1 md:left-0 md:top-0 w-4 h-4 rounded-full bg-[#FFBE00] ring-4 ring-[#1D1E22]"></span>
          <p class="font-display uppercase text-2xl text-[#FFBE00]">{{ step.date }}</p>
          <p class="font-semibold mt-1">{{ step.title }}</p>
          <p class="text-sm text-white/70 mt-2 leading-relaxed">{{ step.text }}</p>
        </li>
      </ol>
    </div>

    <!-- Texte complet, replié par défaut -->
    <details class="group mt-10 rounded-2xl bg-white/5 border border-white/10 reveal">
      <summary class="cursor-pointer list-none flex items-center justify-between gap-4 p-6 font-semibold">
        Lire l'histoire complète du Vodun
        <i class="ti ti-chevron-down text-xl transition-transform group-open:rotate-180"></i>
      </summary>
      <div class="px-6 pb-6 space-y-4 text-white/75 leading-relaxed max-w-3xl">
        <p>Le Vodun est né de la rencontre des cultes traditionnels des dieux yorubas et des divinités des peuples Aja, Fon et Ewe, lors de la création puis de l'expansion du royaume Fon d'Abomey aux XVIIe et XVIIIe siècles.</p>
        <p>Il est le fondement culturel des peuples issus, par migrations successives, de Tado au Togo : les Aja (dont les Fon, les Goun, les Ewe… et dans une certaine mesure les Yoruba), qui constituent une part importante des populations du sud des États du Golfe du Bénin (Bénin, Togo, Ghana, Nigéria…).</p>
        <p>Le mot vient du terme <em>vodoun</em> de langue fon. Le « n » final, quasi inaudible, a disparu dans la transcription des colons, donnant le terme « vaudou », orthographié différemment selon les pays. Ce terme n'existe d'ailleurs pas au Bénin, où l'on emploie le mot fon. Le Vodun est l'affirmation d'un monde surnaturel, mais aussi l'ensemble des procédures permettant d'entrer en relation avec celui-ci. Il correspond au culte yoruba des Orishas. À chaque ouverture, le prêtre vodun demande l'aide de Legba pour ouvrir les portes des deux mondes.</p>
        <p>Avec la déportation d'Africains vers d'autres continents, la culture vodun s'est étendue aux Amériques et aux îles des Caraïbes, notamment en Haïti. Interdite par les colons, passible de mort ou d'emprisonnement, sa pratique s'est poursuivie en secret et a intégré certains rites et conceptions catholiques.</p>
        <p>Le Vodun a perduré et ses pratiquants affichent aujourd'hui sans crainte leur croyance. Face à l'extension démographique et aux besoins en terres agricoles, les forêts sacrées abritant des divinités vodun servent de refuge à la faune et à la flore, comme le singe mone (<em>Cercopithecus mona</em>) : la croyance vodun protège ces forêts.</p>
        <p class="text-xs text-white/50">
          Source (texte adapté) :
          <a href="https://fr.wikipedia.org/wiki/Vaudou" target="_blank" rel="noopener" class="text-[#FFBE00] hover:underline">fr.wikipedia.org/wiki/Vaudou</a>
        </p>
      </div>
    </details>
  </div>
</section>


<!-- --------------------------Figures du Vodun------------------- -->
<section class="bg-[#F8F3EC] py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6">
    <div class="reveal">
      <SectionTitle
        eyebrow="Lexique"
        title="Les figures du Vodun"
        intro="Quelques noms que vous croiserez pendant le festival."
        center
      />
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-group">
      <div v-for="figure in figures" :key="figure.name" class="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition">
        <p class="font-display uppercase text-6xl text-[#DD193A] leading-none">{{ figure.name.charAt(0) }}</p>
        <p class="font-display uppercase text-2xl text-[#1D1E22] mt-4">{{ figure.name }}</p>
        <p class="text-xs font-semibold uppercase tracking-widest text-[#108757] mt-1">{{ figure.role }}</p>
        <p class="text-sm text-gray-600 mt-4 leading-relaxed">{{ figure.text }}</p>
      </div>
    </div>
  </div>
</section>


<!-- --------------------------Partenaires------------------- -->
<section class="bg-white py-12 md:py-16">
  <div class="max-w-6xl mx-auto px-6">
    <div class="reveal">
      <SectionTitle
        eyebrow="Ils soutiennent le festival"
        title="Les partenaires officiels du Vodun Days"
        intro="Les entreprises et les médias qui accompagnent l'organisation du Vodun Days."
        center
      />
    </div>

    <div class="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-10 gap-y-6 reveal-group">
      <div v-for="logo in partners" :key="logo.src" class="w-[calc(50%-0.5rem)] sm:w-40 h-20 flex items-center justify-center">
        <img :src="logo.src" :alt="logo.alt" loading="lazy" class="max-w-full max-h-full object-contain" />
      </div>
    </div>

    <p class="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 mt-10 mb-6">Partenaires médias</p>
    <div class="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-10 gap-y-6 reveal-group">
      <div v-for="logo in mediaPartners" :key="logo.src" class="w-[calc(50%-0.5rem)] sm:w-32 h-16 flex items-center justify-center">
        <img :src="logo.src" :alt="logo.alt" loading="lazy" class="max-w-full max-h-full object-contain" />
      </div>
    </div>

    <p class="text-center text-xs text-gray-500 mt-10">
      Source :
      <a href="https://vodundays.bj/" target="_blank" rel="noopener" class="text-[#DD193A] hover:underline">vodundays.bj</a>
    </p>
  </div>
</section>


<CtaBand
  title="Rendez-vous à Ouidah"
  text="Du 2 au 9 janvier 2027, vivez le Vodun Days au cœur de la capitale spirituelle du Vodun."
  :primary="{ label: 'Découvrir le festival', to: '/festival' }"
  :secondary="{ label: 'Découvrir Ouidah', to: '/ouidah' }"
/>

  </div>
</template>

<script setup>

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText)
definePageMeta({
  layout: 'site'
})

useSeoMeta({
  title: 'Vodun Days · Du 2 au 9 janvier 2027 à Ouidah',
  description: "Vodun Days, la célébration culturelle et spirituelle du Vodun, du 2 au 9 janvier 2027 à Ouidah, au Bénin.",
})

onMounted(() => {
  const tl = gsap.timeline({ease:"Power1.easeInOut"})
  tl.to(".overlay",{
    duration:0.8,
    y:"100%"
  })
})

onMounted(() => {
    const tl = gsap.timeline({ease:"Power3.out"})
const split = new SplitText(".textacceuil", { type: 'chars' }) // découpe en caractères
tl.from(split.chars, {
    opacity: 0,
    y: 70,
    delay:0.4,
    stagger: {
      each:0.08,
      from:"edges"
    } ,
    duration: 0.8,
    rotationX: 90,
  transformOrigin: "0% 50% -20",
    ease: 'power3.out'
  })
})

// Apparition des sections au scroll
const root = ref(null)
useReveal(root)

const keyInfos = [
  { icon: 'ti-calendar-event', label: 'Dates', value: 'Du 2 au 9 janvier 2027' },
  { icon: 'ti-map-pin', label: 'Lieu', value: 'Ouidah, Bénin' },
  { icon: 'ti-beach', label: 'Concerts', value: 'Sur la plage de Ouidah' },
  { icon: 'ti-confetti', label: 'Au programme', value: '8 jours de célébration' },
]

const objectives = [
  { icon: 'ti-flame', title: 'Fierté culturelle', text: 'Redonner fierté aux cultures béninoises et à leur héritage.' },
  { icon: 'ti-world', title: 'Tourisme mondial', text: 'Attirer au Bénin des visiteurs du monde entier.' },
  { icon: 'ti-building-monument', title: 'Ouidah, capitale spirituelle', text: 'Revaloriser Ouidah comme centre spirituel du Vodun.' },
  { icon: 'ti-map-2', title: 'Destination culturelle', text: 'Positionner le Bénin comme une destination culturelle majeure en Afrique.' },
]

const experiences = [
  { icon: 'ti-users-group', title: 'Processions et danses sacrées', text: 'Processions, danses sacrées et chants rituels animent les rues de la ville.' },
  { icon: 'ti-masks-theater', title: 'Egungun et Zangbeto', text: 'La sortie des revenants Egungun et des gardiens de la nuit Zangbeto.' },
  { icon: 'ti-ripple', title: 'Le Dan, serpent sacré', text: "L'apparition du Dan, symbole de la continuité de la vie." },
  { icon: 'ti-beach', title: "Cérémonies face à l'océan", text: 'Des cérémonies sur la plage de la Porte du Non-Retour.' },
  { icon: 'ti-building-arch', title: 'La Grande Cérémonie Vodun', text: "Des festivités au sein de l'Arène de Ouidah, cœur battant du festival." },
  { icon: 'ti-music', title: 'Concerts, saveurs et village', text: 'Concerts, performances artistiques, gastronomie locale et le Village des Vodun Days, près de la Porte du Non-Retour.' },
]

const timeline = [
  { date: 'Racines', title: 'Les peuples Aja', text: "Le Vodun est le fondement culturel des peuples issus, par migrations successives, de Tado au Togo : Fon, Goun, Ewe… Il s'enracine dans tout le Golfe du Bénin." },
  { date: 'XVIIe – XVIIIe s.', title: 'Naissance du Vodun', text: "Il naît de la rencontre des cultes des dieux yorubas et des divinités des peuples Aja, Fon et Ewe, lors de l'expansion du royaume Fon d'Abomey." },
  { date: 'Traite négrière', title: 'La diaspora', text: "Avec la déportation d'Africains, le Vodun traverse l'Atlantique jusqu'aux Amériques et aux Caraïbes, notamment en Haïti. Interdit par les colons, il se pratique en secret." },
  { date: '1992', title: 'La reconnaissance', text: "L'État béninois reconnaît le Vodun comme religion officielle. À l'initiative du président Nicéphore Soglo, le 10 janvier devient la Journée nationale des religions traditionnelles." },
  { date: "Aujourd'hui", title: 'Le Vodun Days', text: "Chaque année en janvier, Ouidah célèbre ce patrimoine vivant : fierté identitaire, retour aux racines et réconciliation avec l'histoire." },
]

const figures = [
  { name: 'Legba', role: 'Gardien des passages', text: "Messager entre les hommes et les divinités, il est invoqué en premier pour ouvrir les portes entre le monde visible et l'invisible." },
  { name: 'Dan', role: 'Le serpent sacré', text: 'Symbole de la continuité et du mouvement de la vie. À Ouidah, le python est honoré au Temple des Pythons.' },
  { name: 'Egungun', role: 'Les revenants', text: 'Esprits des ancêtres revenus parmi les vivants, ils apparaissent sous des costumes brodés qui couvrent entièrement le corps.' },
  { name: 'Zangbeto', role: 'Les gardiens de la nuit', text: "Masques de raphia tourbillonnants, ils veillent traditionnellement à la sécurité et à l'ordre de la communauté." },
]

// Partenaires affichés sur le site officiel vodundays.bj
const partners = [
  { src: '/images/partenaires/celtiis.webp', alt: 'Celtiis' },
  { src: '/images/partenaires/mtn.webp', alt: 'MTN' },
  { src: '/images/partenaires/moov-africa.webp', alt: 'Moov Africa' },
  { src: '/images/partenaires/societe-generale-benin.webp', alt: 'Société Générale Bénin' },
  { src: '/images/partenaires/biic.webp', alt: "BIIC, Banque Internationale pour l'Industrie et le Commerce" },
  { src: '/images/partenaires/air-cote-divoire.webp', alt: "Air Côte d'Ivoire" },
]

const mediaPartners = [
  { src: '/images/partenaires/srtb.webp', alt: 'SRTB' },
  { src: '/images/partenaires/a-plus-benin.webp', alt: 'A+ Bénin' },
  { src: '/images/partenaires/tv5monde.webp', alt: 'TV5MONDE' },
  { src: '/images/partenaires/rfi-france24.webp', alt: 'RFI et France 24' },
  { src: '/images/partenaires/le-media-positif.webp', alt: 'Le Média Positif' },
]


</script>

<style scoped>
summary::-webkit-details-marker {
  display: none;
}
</style>
