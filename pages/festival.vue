<template>
    <div>
  <div class="relative h-screen bg-[url('/images/festival.webp')] bg-cover bg-center -mt-[64px] overflow-hidden bg-fixed  containhero" >
  
    <div class="absolute inset-0 bg-black/65"></div>

     <div class="absolute  inset-0 flex">
    <div class="flex-1 bg-white overlay"></div>
    <div class="flex-1 bg-white overlay"></div>
    <div class="flex-1 bg-white overlay"></div>
    <div class="flex-1 bg-white overlay"></div>
  </div>

    <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
      <p class="text-5xl font-bold textacceuil overflow-hidden">Le Festival</p>
     
    </div>
  </div>

<div class="px-14 text-justify">
  <p class="font-bold text-2xl  px-10  text-[#DD193A] text-center mt-4 mb-4 declancheurbloc2">VODUN DAYS Festival </p>
<div>
    Le  festival de VODUN DAYS est un événement culturel majeur qui se tient chaque année à Ouidah, au cœur de l’Arène Culturelle spécialement aménagée pour accueillir cérémonies, performances et rencontres artistiques.
Ce festival met à l’honneur les valeurs du vodun, non pas comme superstition, mais comme patrimoine vivant, art, connaissance et identité d’un peuple. <br><br>



<div class="flex flex-col md:flex-row justify-between gap-10 items-center mb-8">
    <div>   <span class="font-semibold text-[#DD193A]">Un espace symbolique : l’Arène de Ouidah  </span> <br>
L’Arène construite à Ouidah est bien plus qu’un simple espace de spectacle.
C’est un lieu de convergence culturelle, conçu pour accueillir : <br>
•	Danses rituelles <br>
•	Chants traditionnels <br>
•	Performances contemporaines inspirées des divinités Vodun <br>
•	Défilés de couvents et communautés spirituelles <br>
Elle devient, durant le festival, un pont entre tradition et modernité, où le sacré rencontre la scène artistique.</div>

<div  class="">

<img src="/images/54284765010_e1a485950b_h.jpg" class=" object-cover rounded-lg"  />

</div>

 
</div>

<div class="flex flex-col items-center md:flex-row gap-10">

<div class="w-96">
   <img src="/images/sagbohan.jpg" class=" object-cover rounded-lg"  /> 
</div>


    <div>
<p class="font-semibold text-[#DD193A]"> Des artistes venus du Bénin et du monde </p>
Chaque édition rassemble artistes, groupes de danse, musiciens, performeurs et créateurs venus du Bénin, d’Afrique et d’ailleurs. <br>
Ils viennent partager leur vision, leur énergie et leur art dans une ambiance d’unité et de célébration.<br>
Parmi les artistes invités, on retrouve : <br>
•	Troupes traditionnelles du Sud et du Centre du Bénin <br>
•	Musiciens et percussionnistes africains <br>
•	Groupes afro-fusion, reggae, afrobeat et world music <br>
•	Artistes internationaux en résidence ou en tournée culturelle <br>
Cette diversité crée un mélange puissant, où chacun se rencontre autour d’une même valeur .
    </div>


</div>

</div>
</div>




    </div>
</template>

<script setup>
definePageMeta({
  layout: 'site'
})
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// Enregistre le plugin auprès de GSAP
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  // Timeline GSAP
  const tl = gsap.timeline()

  tl.to(".overlay", {
    xPercent: 100,       // chaque bande part du haut
    opacity: 0,           // commence invisible
    duration: 2,        // durée de chaque animation
    stagger: 0.3,         // délai entre chaque bande
    ease: "power3.out"    // effet fluide
  })
})



</script>


<style scoped>

</style>