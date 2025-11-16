<template>
  <div>


<header_landing/>
<slot></slot>
<footer_landing/>
  </div>




 
</template>

<script setup>
import footer_landing from '../components/footer_landing.vue';
import header_landing from '../components/header_landing.vue';

</script>