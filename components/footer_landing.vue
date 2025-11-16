<template>
    <div class="bg-[#1D1E22] mt-[98px] " > 
<div class="">       
<div class="bg-[#DD193A] text-xs w-100%  h-[8px]"></div>
<div class="py-8 flex justify-center flex-col items-center">

<div class=""> <img src="/images/logo-festival.png " class="h-8" /></div>

 <p class="text-white mt-4 mb-4"> Pour plus d'informations, ainsi que du contenu en images et en vidéos : </p>

<div>
    <p class="flex gap-4 mt-2">

<a  href="https://web.facebook.com/vodundays?mibextid=LQQJ4d&_rdc=1&_rdr" target="_blank"
 class="inline-block transition-transform duration-300 hover:scale-105"
>
  <img src="/images/logofb.png" class="h-8" />
</a>



<a  href="https://www.instagram.com/vodundays/" target="_blank"
 class="inline-block transition-transform duration-300 hover:scale-105"
>
        <img src="/images/logoinsta.png " class="h-8" />
</a>


<a  href="https://www.youtube.com/playlist?list=PL6nGRnf5v3jg5ByAAlBgMpCKWi743C2HC" target="_blank"
 class="inline-block transition-transform duration-300 hover:scale-105"
>
        <img src="/images/logoyoutube.png " class="h-8" />
</a>



<a  href="https://www.tiktok.com/@vodundays" target="_blank"
 class="inline-block transition-transform duration-300 hover:scale-105"
>
        <img src="/images/logotiktok.png " class="h-8" />
</a>

<a  href="https://x.com/vodundays" target="_blank"
 class="inline-block transition-transform duration-300 hover:scale-105"
>
        <img src="/images/twitter-x-logo.png " class="h-8" />

</a>

    </p>

   <p class="text-center text-white text-xs mt-4">
  Copyright © {{ year }}
</p>
</div>


<div class="h-[1px] w-full bg-white mt-4"></div>

<div class="text-xs mt-4   text-[#DD193A]">
    Email du développeur:
    <a href="mailto:jeanhuguesgodonou@gmail.com" class="underline hover:text-red-600">
    jeanhuguesgodonou@gmail.com
  </a>
</div>

</div>

</div> 

<div class="  flex ">
    <div class="bg-[#108757] h-[7px] w-[33%]  "></div>
    <div class="bg-[#FFBE00] h-[7px] w-[34%] "></div>
    <div class="bg-[#EB0000] h-[7px] w-[33%] "></div>
</div>

    </div>
</template>

<script setup>
const year = new Date().getFullYear()
</script>