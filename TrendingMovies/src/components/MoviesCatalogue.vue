<script setup>
  import { ref, watch } from 'vue'
  import { useMoviesStore } from '../store'
  const store = useMoviesStore()

  let movies = ref(null)

  watch(
    () => store.movieCatalogue,
    (newValue) => {
      movies.value = newValue
    }
  )
  movies.value = store.movieCatalogue
</script>

<template>
  <div v-if="movies !== null" class="flex gap-4 flex-wrap mx-10 justify-center">
    <div
      :key="movie.title"
      v-for="movie in movies"
      class="group cursor-pointer"
    >
      <RouterLink
        :to="
          movie.title
            ? `/movie/${movie.title}`
            : `/movie/${movie.original_name}`
        "
        ><img
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path} `"
          :alt="`${movie.title} Movie Poster`"
          class="h-[300px] group-hover:opacity-70"
      /></RouterLink>

      <span
        class="block h-2 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-all duration-500"
      />
    </div>
  </div>
  <div v-else>Loading...</div>
</template>
