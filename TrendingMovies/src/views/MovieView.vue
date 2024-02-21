<script setup>
  import { ref, watch } from 'vue'
  import { useMoviesStore } from '../store'
  import { useRoute } from 'vue-router'
  import MovieRating from '../components/MovieRating.vue'
  const store = useMoviesStore()
  const selectedMovie = ref(null)
  const route = useRoute()

  if (store.movieCatalogue !== null) {
    selectedMovie.value = store.movieCatalogue.find(
      (movie) =>
        movie.original_title == route.params.title ||
        movie.name == route.params.title
    )
  }

  watch(
    () => store.movieCatalogue,
    (newValue) => {
      selectedMovie.value = newValue.find(
        (movie) =>
          movie.original_title == route.params.title ||
          movie.name == route.params.title
      )
    }
  )

  const ratingChosen = (rating) => {
    alert(
      `You have given ${
        selectedMovie.value.original_title
          ? selectedMovie.value.original_title
          : selectedMovie.value.name
      } a rating of ${rating} stars!`
    )
  }
</script>

<template>
  <div
    v-if="selectedMovie"
    class="bg-black pt-10 grid grid-cols-2 pb-24 h-[calc(100vh-128px)]"
  >
    <div class="px-5 grid justify-center">
      <h1 class="text-white alfa-slab-regular text-3xl">
        {{ selectedMovie.original_title || selectedMovie.name }}
      </h1>
      <h4 class="text-gray-300 font-medium">
        {{ selectedMovie.release_date }}
      </h4>

      <img
        :src="`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`"
        :alt="`${
          selectedMovie.original_title
            ? selectedMovie.title
            : selectedMovie.name
        } Movie Poster`"
        class="max-h-[500px]"
      />
    </div>
    <div class="grid justify-center px-3 sm:pr-[10%] lg:pr-56">
      <div>
        <MovieRating
          @rating-chosen="ratingChosen"
          :rating="selectedMovie.vote_average"
        />
      </div>

      <p class="text-white">{{ selectedMovie.overview }}</p>
    </div>
  </div>
</template>
