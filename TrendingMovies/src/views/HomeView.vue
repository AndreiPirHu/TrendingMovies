<script setup>
  import MoviesCatalogue from '../components/MoviesCatalogue.vue'
  import NavBar from '../components/NavBar.vue'
</script>
<template>
  <div class="bg-black">
    <NavBar />
    <div class="flex justify-center">
      <h1 class="text-yellow-400 text-4xl alfa-slab-regular my-6">
        Featured this Week
      </h1>
    </div>

    <MoviesCatalogue />
  </div>
</template>
