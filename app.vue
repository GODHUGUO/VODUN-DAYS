<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
*{
  font-family: Poppins;
  list-style-type: none;
}

/* Police des titres (la règle * ci-dessus écraserait sinon les enfants) */
.font-display,
.font-display *{
  font-family: Anton, sans-serif;
  letter-spacing: 0.01em;
}
</style>
