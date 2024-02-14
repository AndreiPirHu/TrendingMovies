<script setup>
  import { ref, watch } from 'vue'
  import { useMoviesStore } from '../store'
  const store = useMoviesStore()

  let movies = ref(null)
  movies.value = store.movieCatalogue

  watch(
    () => store.movieCatalogue,
    (newValue) => {
      movies.value = newValue
    }
  )
</script>

<template>
  <div v-if="movies !== null" class="flex gap-4 flex-wrap mx-10 justify-center">
    <div :key="movie.id" v-for="movie in movies" class="group cursor-pointer">
      <RouterLink
        :to="
          movie.original_title
            ? `/movie/${movie.original_title}`
            : `/movie/${movie.name}`
        "
        ><img
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path} `"
          :alt="`${
            movie.original_title ? movie.original_title : movie.name
          } Movie Poster`"
          class="h-[300px] group-hover:opacity-70"
      /></RouterLink>

      <span
        class="block h-2 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-all duration-500"
      />
    </div>
  </div>
  <div v-else>Loading...</div>
</template>
