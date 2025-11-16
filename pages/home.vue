<template>
  <div>
  
<!-- -----------------herosection---------------- -->
  <div class="relative h-screen bg-[url('/images/vd3.jpg')] bg-cover bg-center -mt-[64px] overflow-hidden bg-fixed  containhero" >
  
    <div class="absolute inset-0 bg-black/65"></div>
    <div class="absolute inset-0 bg-white overlay"></div>


    <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
      <p class="text-5xl font-bold textacceuil overflow-hidden">VODUN DAYS</p>
      <p class="text-xl mt-4">Un évènement culturel béninois d'impact.</p>
      <p class="text-xl mt-4 border px-2"> 8, 9 et 10 janvier 2026 à OUIDAH.</p>
    </div>
  </div>


  <!-- ---------------------Présentation---------------- -->
  <div class=" overflow-hidden ">
<p class="font-bold text-2xl  px-10  text-[#DD193A] text-center mt-4 mb-4 declancheurbloc1">Qu'est ce que le VODUN DAYS ?</p>
<div class="flex flex-col md:flex-row px-14 gap-10 mb-10 ">
<div class="relative">
  <img src="/images/TALON.jpg " class="logovday " />
 <div class="absolute h-[100%] w-[100%] bg-white top-0 blocpresident"></div>


</div>

<div class="text-justify  relative">
 Vodun Days, initiative du président Patrice Talon, est une célébration culturelle et spirituelle organisée chaque 8,9 et 10 janvier au Bénin. Intégré au Programme de Mise en Valeur du Patrimoine Culturel et Touristique, cet événement aujourd’hui reconnu à l’international trouve ses racines dans un long héritage historique et identitaire. Son objectif est de redonner fierté aux cultures béninoises, d’attirer le tourisme mondial, de revaloriser <span class="text-[#DD193A] font-semibold"> Ouidah </span> comme centre spirituel du Vodun et de positionner le Bénin comme une destination culturelle majeure en Afrique. 
 <div class="absolute h-[100%] w-[100%] bg-white top-0 bloctexte"></div>
</div>
</div>
  </div>

<!-- --------------------------section2------------------- -->
<div class="px-14 text-justify">
  <p class="font-bold text-2xl  px-10  text-[#DD193A] text-center mt-4 mb-4 declancheurbloc1  text-section">Origine du VODUN.  </p>


<div>
 <p  class="mb-4  text-reveal  "> Le <span class="text-[#DD193A] font-bold"><span class="text-[#DD193A] font-bold">vaudou</span></span>  est né de la rencontre des cultes traditionnels des dieux yorubas et des divinités akans : Aja, fon et ewe, lors de la création puis l'expansion du royaume Fon d'Abomey aux XVIIe et XVIIIe siècles. <br><br>

Le <span class="text-[#DD193A] font-bold"><span class="text-[#DD193A] font-bold">vaudou</span></span> est le fondement culturel des peuples qui sont issus par migrations successives de Tado au Togo, les Aja (dont les Fons, les Gouns, les Ewe… et dans une certaine mesure les Yoruba…) peuples qui constituent un élément important des populations au sud des États du Golfe du Bénin (Bénin, Togo, Ghana, Nigéria…).<br><br>

Le mot <span class="text-[#DD193A] font-bold">vaudou</span> provient du terme vodoun de langue fon. Le « n » final de vodoun, quasi inaudible, fut retiré, donnant ainsi le terme <span class="text-[#DD193A] font-bold">vaudou</span>, ayant plusieurs orthographes selon les pays en fonction de ce que les colons ont phonétiquement rapporté. Le terme <span class="text-[#DD193A] font-bold">vaudou</span> n'existe d'ailleurs pas au Bénin et c'est bien le terme de langue fon qui est employé pour désigner cette pratique. Le <span class="text-[#DD193A] font-bold">vaudou</span> désigne l'ensemble des dieux ou des forces invisibles dont les hommes essaient de se concilier la puissance ou la bienveillance. Il est l'affirmation d'un monde surnaturel, mais aussi l'ensemble des procédures permettant d'entrer en relation avec celui-ci. Le <span class="text-[#DD193A] font-bold">vaudou</span> correspond au culte yoruba des Orishas. De même que le <span class="text-[#DD193A] font-bold">vaudou</span> est un culte à l'esprit du monde de l'invisible. À chaque ouverture, le prêtre vodoun demande l'aide de l'esprit de Papa Legba pour ouvrir les portes des deux mondes.<br><br>

Le <span class="text-[#DD193A] font-bold">vaudou</span> vient des croyances de certaines tribus/castes africaines qui se sont répandues et déformées par l'acculturation d'un christianisme dominant en Amérique et la violence de l'esclavagisme négrier, croyances qui étaient d'ailleurs elles-mêmes rejetées à l'origine par d'autres tribus/castes africaines voisines : il s'agit d'une « magie » se voulant maléfique et, en Afrique, cachée, car représentant des « valeurs décadentes » pour la majorité des Africains bien avant l'arrivée des Européens. <br><br>

Avec la déportation de certains Africains vers d'autres pays et continents, la culture <span class="text-[#DD193A] font-bold">vaudou</span>e s'est étendue à l'Amérique et aux îles des Caraïbes notamment Haïti.<br><br>

 La pratique de leur religion et culture était interdite par les colons, passible de mort ou d'emprisonnement, et se pratiquait par conséquent en secret. Le <span class="text-[#DD193A] font-bold">vaudou</span> a cependant intégré certains rites et conceptions catholiques.<br><br>

 Le <span class="text-[#DD193A] font-bold">vaudou</span> a perduré et ses pratiquants affichent sans craintes leur croyance. Face à l'extension démographique et aux besoins en terres agricoles au Bénin, les forêts sacrées abritant des divinités vodoun servent de refuge à la faune et la flore, comme Cercopithecus mona, car la croyance vodoun protège ces forêts.<br/>
 <span class="text-xs">Source:</span> <a href="https://fr.wikipedia.org/wiki/" class="text-[#DD193A] text-xs">https://fr.wikipedia.org/wiki/vaudou</a> </p>
</div>

</div>

<div class="px-12">
<div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
  <img 
    v-for="(img, index) in images" 
    :key="index" 
    :src="img" 
    alt="Image"
    class="w-full mb-4 h-auto object-cover rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
    @click="openLightbox(img)"
  >
</div>

<div v-if="selectedImage" 
     class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
     @click="closeLightbox">
  <img :src="selectedImage" class="max-h-[90%] max-w-[90%] rounded-xl shadow-2xl">
</div>
</div>


<div class="px-14 overflow-hidden">
  <p class="font-bold text-2xl  px-10  text-[#DD193A] text-center mt-4 mb-4 declancheurbloc2">Pourquoi une journée VODUN ? </p>
  <p class="text-justify textdeclancheurbloc2">
    Pendant longtemps, le Vodun a été stigmatisé et assimilé à la sorcellerie. Cependant, en 1992 (officiellement 1991 selon certaines archives), l’État béninois a reconnu le Vodun comme une religion officielle. La même année, sous l’initiative du président Nicéphore Soglo, le 10 janvier est déclaré Journée Nationale des Religions Traditionnelles, devenant ainsi un symbole de reconnaissance culturelle, de fierté identitaire, de retour aux racines et de réconciliation avec l’histoire. À Ouidah, considérée comme la capitale spirituelle du Vodun, cette journée est marquée par des processions et danses sacrées, des chants rituels, la sortie des Egungun et Zangbeto, l’apparition du Dan (serpent sacré), ainsi que des cérémonies sur la plage de la Porte du Non-Retour. C’est aussi un moment de communion et de célébration avec de la gastronomie locale, des animations sur les places emblématiques, des concerts, des performances artistiques, la Grande Cérémonie Vodun, des festivités au sein de l’Arène de Ouidah, un village dédié aux festivités et de nombreuses autres surprises.

  </p>
</div>

<div class="px-14 overflow-hidden">
  <p class="font-bold text-2xl  px-10  text-[#DD193A] text-center mt-4 mb-4 declancheurbloc3 ">Partenaires officiels </p>
<div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <div class="w-36 h-20  flex items-center justify-center rounded">
    <img src="/images/celt.jpeg" alt="Image 1" class="w-full h-full object-contain">
  </div>
  <div class="w-36 h-20  flex items-center justify-center rounded">
    <img src="/images/A+BENIN.png" alt="Image 2" class="w-full h-full object-contain">
  </div>
  <div class="w-36 h-20  flex items-center justify-center rounded">
    <img src="/images/GDIZ.png" alt="Image 3" class="w-full h-full object-contain">
  </div>
  <div class="w-36 h-20  flex items-center justify-center rounded">
    <img src="/images/LOGO_LB.png" alt="Image 4" class="w-full h-full object-contain">
  </div>
  <div class="w-36 h-20  flex items-center justify-center rounded">
    <img src="/images/logo_TV5MONDE.jpg" alt="Image 5" class="w-full h-full object-contain">
  </div>
  <div class="w-36 h-20  flex items-center justify-center rounded">
    <img src="/images/F24.png" alt="Image 6" class="w-full h-full object-contain">
  </div>
  <div class="w-36 h-20  flex items-center justify-center rounded">
    <img src="/images/RFI.png" alt="Image 7" class="w-full h-full object-contain">
  </div>
  <div class="w-40 h-20  flex items-center justify-center rounded ">
    <img src="/images/SRTB.png" alt="Image 8" class="w-full h-full object-contain">
  </div>
  <div class="w-40 h-20  flex items-center justify-center rounded ">
    <img src="/images/sg.png" alt="Image 9" class="w-full h-full object-contain">
  </div>
</div>

</div>




<div>
  
</div>




  </div>
</template>

<script setup>

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from 'gsap/ScrollTrigger'
// Enregistre le plugin auprès de GSAP
gsap.registerPlugin(ScrollTrigger)

gsap.registerPlugin(SplitText)
definePageMeta({
  layout: 'site'
})

onMounted(() => {
  const tl = gsap.timeline({ease:"Power1.easeInOut"})
  tl.to(".overlay",{
    duration:3,
    y:"100%"
  })
})

onMounted(() => {
    const tl = gsap.timeline({ease:"Power3.out"})
const split = new SplitText(".textacceuil", { type: 'chars' }) // découpe en caractères  
tl.from(split.chars, {
    opacity: 0,
    y: 70,
    delay:1.5,
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


onMounted(() =>{
gsap.to(".blocpresident", {
  xPercent: 500,
  scrollTrigger: {
   trigger: '.declancheurbloc1',
     start: "bottom 90%",
    immediateRender: false,
  //  markers:true,
    scrub:12,
       
  }
})

gsap.to(".bloctexte", {
  yPercent: 400,
  scrollTrigger: {
   trigger: '.declancheurbloc1',
     start: "bottom 90%",
    immediateRender: false,
  //  markers:true,
    scrub:9,
       
  }
})


}) 

onMounted(() => {
  const paragraphs = gsap.utils.toArray(".text-reveal")
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".text-section", // conteneur global
      start: "top 80%",
      end: "bottom 20%",
      scrub: 40,
    },
  })

  paragraphs.forEach((p) => {
    const split = new SplitText(p, { type: "chars" })
    
    // chaque paragraphe s’ajoute à la timeline dans l’ordre
    tl.from(split.chars, {
      opacity: 0.5,
      
      stagger: 1,
      duration: 1,
      ease: "power2.out",
    }, ">") // ">" = enchaîne après le précédent
  })
})

const images = [
  '/images/im1.jpg',
  '/images/im2.jpg',
  '/images/im3.jpg',
  '/images/im4.jpg',
  '/images/im5.jpg',
  '/images/im6.jpg',

]


onMounted(() =>{
gsap.from(".textdeclancheurbloc2", {
  xPercent: 500,
  scrollTrigger: {
   trigger: '.declancheurbloc2',
     start: "bottom 90%",
    duration:10,
    
  //  markers:true,
   
       
  }
})
}) 
onMounted(() => {
  gsap.from(".grid img", {

          scrollTrigger: {
   trigger: '.declancheurbloc3',
   start:"top 60%",
    immediateRender: false,
  
    // scrub:12,
       
  },
    y: 50,           
    opacity: 0,     
    duration: 1,   
    stagger: 0.1,    
    ease: "power2.out",

  });
});


const selectedImage = ref(null)

const openLightbox = (img) => {
  selectedImage.value = img
}

const closeLightbox = () => {
  selectedImage.value = null
}


</script>